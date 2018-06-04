
var webpack = require('webpack');

var distData = require('./data');

var webpackBuild = (cb) => {
    webpack(distData.currentConfig.webpackBuildConfig, (err, stats) => {
        if (err) {
            logger.error(err.stack || err);
            if (err.details) {
                logger.error(err.details);
            }
            process.exit(0);
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            info.errors.forEach((error) => {
                logger.error(error);
            });
            process.exit(0);
        }

        if (stats.hasWarnings()) {
            info.warnings.forEach(function (warning) {
                logger.warn(warning);
            });
        }

        cb();
    });
};

module.exports = webpackBuild;