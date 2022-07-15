import { css, Global } from '@emotion/react';

import { darkColor, theme } from 'modules/theme';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
          -webkit-font-smoothing: antialiased;
          height: 100%;
        }

        body {
          background-color: ${darkColor};
          color: ${theme.white};
          font-family: Rubik, sans-serif;
          font-size: ${theme.typography.regular.fontSize};
          margin: 0;
          min-height: 100vh;
          padding: 0;
        }

        img {
          height: auto;
          max-width: 100%;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: underline;

          &.disabled {
            pointer-events: none;
          }
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          transition: background-color 50000s ease-in-out 0s, color 5000s ease-in-out 0s;
        }
      `}
    />
  );
}
