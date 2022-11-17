module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": 0,
    indent: ["error", 2],
    quotes: ["error", "double"],
  },
};
