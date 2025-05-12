const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b8m6ed",
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  experimentalSessionSupport: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: "https://web.demotm.journeymentor.net",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});