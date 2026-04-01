'use client';

import { ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { MenuProvider } from '~/context/menu';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <HeroUIProvider>
        <MenuProvider>{children}</MenuProvider>
      </HeroUIProvider>
    </NextThemesProvider>
  );
}
