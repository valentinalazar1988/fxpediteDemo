const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  projectId: "b8m6ed",
  defaultCommandTimeout: 60000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
   e2e: {
       baseUrl: "https://web.demotm.journeymentor.net",  // Default baseUrl for other tests, once defined, it is taken for all tests
       pageLoadTimeout: 120000,  // Increase timeout to 2 minutes
       chromeWebSecurity: false,  // Disable security to allow cross-origin navigation
       experimentalSessionAndOrigin: true,  // Fix session handling

       setupNodeEvents(on, config) {
         require('cypress-mochawesome-reporter/plugin')(on);
       }
     },
     env: {
       alternateBaseUrl: "https://www.airportlabs.com/"  // Define alternate url
     }
});