
// default config root attributes
var defaults = {
    // current handling module name
    module: 'test/index',
    /**
     * environment index
     *
     * example: 0 -> test
     *          1 -> prod
     *          2 -> other
     *          ...
     */
    env: 0,
    // whether mini js files
    minJs: !1,
    // whether mini css files
    minCss: !1,
    // whether mini html files
    minHtml: !1,
    // whether record file changes, thus next time only handle changed file
    recordFileChanges: !0,
    // whether to pack css separately into a single css file
    packCssSeparately: !1,
    // whether to ignore files under node_modules directory when transform es6 to es5
    ignoreNodeModules: !0,
    // indicates which files to load
    fileLoaderSuffixes: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'svg', 'eot', 'ttf', 'woff', 'woff2'],
    // dev server port
    devServerPort: 8090
};

var _ = require('lodash');

module.exports = (config) => {
    config = _.defaults(config, _.cloneDeep(defaults));

    return config;
};