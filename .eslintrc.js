module.exports = {
	/* === env === */
	env: {
		browser: true,
		es6: true,
		node: true,
	},

	/* === extends === */
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:typescript-sort-keys/recommended',
		'next/core-web-vitals',
		'prettier',
	],

	/* === parser === */
	parser: '@typescript-eslint/parser',

	/* === parserOptions === */
	parserOptions: {
		babelOptions: { presets: [require.resolve('next/babel')] },
		ecmaFeatures: { jsx: true },
		ecmaVersion: 'latest',
	},

	/* === plugins === */
	plugins: ['@typescript-eslint', 'typescript-sort-keys', 'sort-destructure-keys', 'sort-keys-fix'],

	/* === root === */
	root: true,

	/* === rules ===*/
	rules: {
		// next
		'@next/next/no-html-link-for-pages': 'off',
		'@next/next/no-page-custom-font': 'off',

		// typescript
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',

		// eslint
		'no-empty-pattern': 'off',

		// react
		'react/jsx-sort-props': 'warn',

		// sort-destructure-keys
		'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],

		// sort-keys-fix
		'sort-keys-fix/sort-keys-fix': 'warn',
	},

	/* === settings === */
	settings: {
		next: {
			rootDir: ['src/'],
		},
	},
}
