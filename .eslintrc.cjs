module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-refresh/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn"
  },
}