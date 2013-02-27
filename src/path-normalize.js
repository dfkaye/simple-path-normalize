/**
 * simple-path-normalize/src/path-normalize.js
 * david.kaye, @dfkaye
 * work in progress, as always :)
 */
 
(function (exports) {

    var BLANK = '';
    var SLASH = '/';
    var DOT = '.';
    var DOTS = DOT.concat(DOT);

    exports.normalize = normalize;
    
    function normalize(path) {

        if (!path || path === SLASH) {
            return SLASH;
        }
        
        var src = path.split(SLASH);
        var target = (path[0] === SLASH || path[0] === DOT) ? [BLANK] : [];
        var i, len, token;
        
        for (i = 0, len = src.length; i < len; ++i) {
            token = src[i] || BLANK;
            if (token === DOTS) {
                if (target.length > 1) {
                    target.pop();
                }
            } else if (token !== BLANK && token !== DOT) {
                target.push(token);
            }
        }

        return target.join(SLASH).replace(/[\/]{2, }/g, SLASH) || SLASH;
    };

}(this));