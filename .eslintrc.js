module.exports = {
	extends: "@workwithizzi/eslint-config-react",
	rules: {
		"quotes": ["warn", "backtick"],
		semi: ["warn", "never"],
		"comma-dangle": ["warn", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "never"
		}]
	}
}
