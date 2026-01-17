export default {
	extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
	plugins: ["stylelint-gamut"],
	ignoreFiles: ["**/*.css"],
	rules: {
		"gamut/color-no-out-gamut-range": true,
		"function-disallowed-list": ["rgba", "hsla", "rgb", "hsl"],
		"color-function-notation": "modern",
		"color-no-hex": true,
		"color-named": "never",
	},
};
