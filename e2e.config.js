exports.config = {
  seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
  seleniumPort: null,
  chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  seleniumArgs: [],
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['./Tests/e2e/*.js'],
  baseUrl: 'http://localhost:8080'
}
