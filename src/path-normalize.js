/**
 * simple-path-normalize/src/path-normalize.js
 * david.kaye, @dfkaye
 * work in progress, as always :)
 *
 * !!!! bad fix needed/added 5/22/2013 for leading url schemes in browser/testem tests with qunit
 *
 */
;(function (exports) {

    var BLANK = '';
    var SLASH = '/';
    var DOT = '.';
    var DOTS = DOT.concat(DOT);
    var SCHEME = '://';

    exports.normalize = normalize;

    function normalize(path) {

        if (!path || path === SLASH) {
            return SLASH;
        }
        
        var target = (path[0] === SLASH || path[0] === DOT) ? [BLANK] : [];
        var src;
        var scheme;        
        var parts;
        var token;
        
        if (path.indexOf(SCHEME) > 0) {
            parts = path.split(SCHEME);
            scheme = parts[0];
            src = parts[1].split(SLASH);
        } else {
            src = path.split(SLASH);
        }

        for (var i = 0; i < src.length; ++i) {
            token = src[i] || BLANK;
            if (token === DOTS) {
                if (target.length > 1) {
                    target.pop();
                }
            } else if (token !== BLANK && token !== DOT) {
                target.push(token);
            }
        }

        return (scheme ? scheme + '://' : '') + target.join(SLASH).replace(/[\/]{2, }/g, SLASH) || SLASH;
    }

}((typeof module != 'undefined' && module.exports) ? module.exports : this));