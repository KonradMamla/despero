const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://promo.desperados.com',
    setupNodeEvents(on, config) {
    },
    specPattern: '**/*.spec.js',
  },
});
