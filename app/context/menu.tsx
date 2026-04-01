'use client';

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface MenuContextValue {
  close: () => void;
  isOpen: boolean;
  toggle: () => void;
}

const MenuContext = createContext<MenuContextValue>({
  isOpen: false,
  close: () => undefined,
  toggle: () => undefined,
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(previous => !previous), []);

  const value = useMemo(() => ({ isOpen, close, toggle }), [isOpen, close, toggle]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  return useContext(MenuContext);
}
