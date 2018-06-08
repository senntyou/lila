
const checkRules = require('../common/check_rules');

const makeBabelLoader = require('../loaders/babel_loader');
const makeCssLoader = require('../loaders/css_loader');
const makeLessLoader = require('../loaders/less_loader');
const makeUrlLoader = require('../loaders/url_loader');
const makeHtmlLoader = require('../loaders/html_loader');
const makeExtractCssLoader = require('../loaders/extract_css_loader');
const makeExtractLessLoader = require('../loaders/extract_less_loader');

/**
 * Make `webpack.module` for build.
 *
 * @param config
 */
module.exports = config => {

    checkRules(config);

    config.webpack.module.rules.push(
        makeBabelLoader(config),
        makeUrlLoader(config, !0),
        makeHtmlLoader(config)
    );

    let excludeMatches = config.cssModulesExclude;
    let browsers = config.browsers;
    if (config.packCssSeparately) {
        if (config.enableCssModules && excludeMatches) {
            config.webpack.module.rules.push(
                makeExtractCssLoader(!1, excludeMatches, !0, !1, browsers),
                makeExtractCssLoader(!0, excludeMatches, !1, !0, browsers),
                makeExtractLessLoader(!1, excludeMatches, !0, !1, browsers),
                makeExtractLessLoader(!0, excludeMatches, !1, !0, browsers)
            );
        }
        else if (config.enableCssModules) {
            config.webpack.module.rules.push(
                makeExtractCssLoader(!0, excludeMatches, !1, !1, browsers),
                makeExtractLessLoader(!0, excludeMatches, !1, !1, browsers)
            );
        }
        else {
            config.webpack.module.rules.push(
                makeExtractCssLoader(!1, [], !1, !1, browsers),
                makeExtractLessLoader(!1, [], !1, !1, browsers)
            );
        }
    }
    else {
        if (config.enableCssModules && excludeMatches) {
            config.webpack.module.rules.push(
                makeCssLoader(!1, excludeMatches, !0, !1, browsers),
                makeCssLoader(!0, excludeMatches, !1, !0, browsers),
                makeLessLoader(!1, excludeMatches, !0, !1, browsers),
                makeLessLoader(!0, excludeMatches, !1, !0, browsers)
            );
        }
        else if (config.enableCssModules) {
            config.webpack.module.rules.push(
                makeCssLoader(!0, excludeMatches, !1, !1, browsers),
                makeLessLoader(!0, excludeMatches, !1, !1, browsers)
            );
        }
        else {
            config.webpack.module.rules.push(
                makeCssLoader(!1, [], !1, !1, browsers),
                makeLessLoader(!1, [], !1, !1, browsers)
            );
        }
    }
};