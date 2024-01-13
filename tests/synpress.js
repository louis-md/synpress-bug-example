const { defineConfig } = require('cypress')
const synpressPath = '../node_modules/@synthetixio/synpress'
// eslint-disable-next-line security/detect-non-literal-require, @typescript-eslint/no-var-requires
const setupNodeEvents = require(`${synpressPath}/plugins/index`)

module.exports = defineConfig({
  userAgent: 'synpress',
  retries: {
    runMode: 0,
    openMode: 0
  },
  includeShadowDom: true,
  fixturesFolder: `${synpressPath}/fixtures`,
  chromeWebSecurity: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    coverage: false
  },
  defaultCommandTimeout: 150000,
  pageLoadTimeout: 150000,
  requestTimeout: 150000,
  taskTimeout: 120000,
  e2e: {
    testIsolation: false,
    setupNodeEvents,
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'tests/support.js'
  }
})
