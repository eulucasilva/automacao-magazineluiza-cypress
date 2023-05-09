const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://www.magazineluiza.com.br/',
    $schema: 'https://on.cypress.io/cypress.schema.json',
    defaultCommandTimeout: 30000
  },
});
