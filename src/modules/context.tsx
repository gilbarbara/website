import { createContext, ReactNode, useContext, useEffect, useMemo, useRef } from 'react';
import { PartialDeep } from 'type-fest';

import { appState } from '~/config';

import { AppState } from '~/types';

import { useLocalStorageState } from './hooks';

interface Props {
  children: ReactNode;
  initialState?: PartialDeep<AppState>;
}

export const AppContext = createContext<{
  setAppState: (
    patch: PartialDeep<AppState> | ((previousState: AppState) => PartialDeep<AppState>),
  ) => void;
  state: AppState;
}>({
  state: appState,
  setAppState: () => undefined,
});
AppContext.displayName = 'AppContext';

export function AppProvider({ children, initialState }: Props) {
  const [state, setState] = useLocalStorageState('dev', appState);
  const isInitial = useRef(true);

  useEffect(() => {
    isInitial.current = false;
  }, [state]);

  const value = useMemo(
    () => ({
      state: isInitial.current ? { ...state, ...initialState } : state,
      setAppState: setState,
    }),
    [initialState, setState, state],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
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
