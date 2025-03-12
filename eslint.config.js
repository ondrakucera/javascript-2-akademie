import globals from "globals";
import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: { ...globals.browser },
			ecmaVersion: 2022,
			sourceType: "module",
		},
		rules: {
			indent: ["error", "tab"],
			"linebreak-style": ["error", "unix"],
			quotes: ["error", "double"],
			semi: ["error", "always"],
		},
	},
];
