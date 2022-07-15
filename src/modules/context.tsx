import { createContext, useContext, useMemo } from 'react';
import { PartialDeep } from 'type-fest';

import { appState } from 'config';

import { AppState } from 'types';

import { useLocalStorageState } from './hooks';

export const AppContext = createContext({
  state: appState,
  setAppState: () => undefined,
});
AppContext.displayName = 'AppContext';

export function AppProvider(props: any) {
  const [state, setState] = useLocalStorageState('npm-stats', appState);

  const value = useMemo(
    () => ({
      state,
      setAppState: setState,
    }),
    [setState, state],
  );

  return <AppContext.Provider value={value} {...props} />;
}

export function useAppContext(): {
  setAppState: (
    patch: PartialDeep<AppState> | ((previousState: AppState) => PartialDeep<AppState>),
  ) => void;
  state: AppState;
} {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }

  return context;
}
