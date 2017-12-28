
"use strict";

var vars = require('../../data/vars');

/**
 * get paths
 * @param root
 * @param dir
 * @param addLilacsPrefix
 * @returns {{dir: string, js: string, less: string, html: string}}
 */
var getPaths = (root, dir, addLilacsPrefix) => {

    var dirName = (addLilacsPrefix ? 'lila_' : '') + dir;

    return {
        dirName: dirName,
        dir: root + '/' + dirName,
        js: root + '/' + dirName + '/js',
        css: root + '/' + dirName + '/css',
        html: root + '/' + dirName + '/html'
    }
};

module.exports = (config) => {

    config.buildPaths = {
        src: getPaths(config.basePaths.buildRoot, 'src', !1),
        dev: getPaths(config.basePaths.buildRoot, 'dev', !1),
        dist: getPaths(config.basePaths.buildRoot, 'dist', !1),
        // copy dev directory
        copiedDev: getPaths(config.basePaths.buildRoot, 'copied_dev', !0),
        // extracted directory
        extract: getPaths(config.basePaths.buildRoot, 'extract', !0),
        extractJs: getPaths(config.basePaths.buildRoot, 'extract_js', !0),
        extractCss: getPaths(config.basePaths.buildRoot, 'extract_css', !0),
        // dist temporary directory
        distTmp: getPaths(config.basePaths.buildRoot, 'dist_tmp', !0),
        // dist temporary directory to handle html
        distHandleHtml: getPaths(config.basePaths.buildRoot, 'dist_handle_html', !0),
        // dist temporary directory to store files
        distStore: getPaths(config.basePaths.buildRoot, 'dist_store', !0),
        // doc temporary directory
        doc_tmp: {
            dir: config.basePaths.buildRoot + '/lila_doc'
        },
        // doc dist directory
        doc: {
            dir: vars.projectRoot + '/docs'
        }
    };
};