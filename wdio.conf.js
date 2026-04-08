exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitForTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
