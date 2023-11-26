import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://10.0.0.104:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
