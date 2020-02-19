module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"react/prop-types": 0,
		"react/display-name": 0,
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"no-unused-vars": ["error", { "varsIgnorePattern": "jsx" }],
		"@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "jsx" }]
	}
};
