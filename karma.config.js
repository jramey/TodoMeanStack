module.exports = function(config) {
    config.set({
 
        frameworks: ['jasmine'],
        files: [
            "public/js/libs/angular.js",
            "public/js/libs/angular-mocks.js",
            "public/js/controllers/*.js",
            "public/js/services/*.js",
            "public/js/*.js",
            'tests/unit/*.js'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        captureTimeout: 60000,
        singleRun: false
    });
};