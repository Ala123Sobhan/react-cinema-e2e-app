const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "in8nj3",
  e2e: {
    env: {
      apiKey: process.env.REACT_APP_API_SECRET,
    },
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
