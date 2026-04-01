import base from '@gilbarbara/eslint-config';
import next from '@next/eslint-plugin-next';

export default [
  ...base,
  {
    plugins: {
      next,
    },
    rules: {
      'import-x/no-cycle': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
];
