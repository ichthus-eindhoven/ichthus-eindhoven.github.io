module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue",
  ],
  ignoreFiles: ["pages/index.vue", "components/VideoComponent.vue"],
  rules: {
    // This fixes app.scss errors
    "no-descending-specificity": null,
    "no-empty-source": null,
  },
};
