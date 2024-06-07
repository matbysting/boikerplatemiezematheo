import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    name: 'eslint-config-boilerplatemiezematheo',
    rules: {
      'no-console': 'warn',
    },
  },
  {
    ignores: ['**/nodes_modules/**', 'dist/'],
  },
]
