import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import html from 'eslint-plugin-html';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { html },
    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  prettier,
  {
    ignores: ['**/*.js', '**/*.mjs', '**/*.d.ts', 'dist/**', 'ghpages/**'],
  },
);
