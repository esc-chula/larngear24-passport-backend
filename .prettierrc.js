// @ts-check

/** @type {import("prettier").Config} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  endOfLine: "lf",
  printWidth: 80,
  plugins: [
    "prettier-plugin-organize-imports"
  ],
};

module.exports = config;
