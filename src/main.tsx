import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import { AppProvider } from 'modules/context';
import { theme } from 'modules/theme';

import App from './App';
import GlobalStyles from './components/GlobalStyles';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </StrictMode>,
  );
}
