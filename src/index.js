var fs = require('fs')
var path = require('path')
var shell = require('shelljs')

function CleanSourceMapPlugin (options) {
    var cssPath = options.cssPath;
    var jsPath = options.jsPath;
    if (!cssPath) {
        throw(new Error('clean-source-map-plugin cssPath value is undefined!'))
    } else if (typeof cssPath !== 'string') {
        throw(new Error('cssPath must be string type'))
    }
    if (!jsPath) {
        throw(new Error('clean-source-map-plugin jsPath value is undefined!'))
    } else if (typeof jsPath !== 'string') {
        throw(new Error('jsPath must be string type'))
    }
    this.options = {
        cssPath: cssPath,
        jsPath: jsPath,
        root: shell.pwd().toString()
    }
}

CleanSourceMapPlugin.prototype.apply = function (compiler) {
    var cssPath = this.options.cssPath;
    var jsPath = this.options.jsPath;
    var root = this.options.root;
    compiler.plugin('done', function(compilation) {
        var resolveJsPath = path.resolve(root, jsPath)
        var resolveCssPath = path.resolve(root, cssPath)
        var jsFiles = fs.readdirSync(resolveJsPath);
        var cssFiles = fs.readdirSync(resolveCssPath);
        var jsMap = jsFiles.filter(function(file) {
            return file.endsWith('.map');
        });
        var cssMap = cssFiles.filter(function(file) {
            return file.endsWith('.map');
        });
        if (jsMap.length) {
            var joinJSMaps = Array.from(jsMap, function(file){ return path.join(resolveJsPath, file)})
            shell.rm(joinJSMaps)
        }
        if (cssMap.length) {
            var joinCSSMaps = Array.from(cssMap, function(file){ return path.join(resolveCssPath, file)})
            shell.rm(joinCSSMaps)
        }
    })
}

module.exports = CleanSourceMapPlugin;