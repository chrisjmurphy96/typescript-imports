define("toImport", ["require", "exports"], function (require, exports) {
    "use strict";
    var Reddify = /** @class */ (function () {
        function Reddify() {
        }
        /**
         * Turns to-red, well, red
         * hmm
         */
        Reddify.document = function () {
            document.getElementById('to-red').style.color = 'red';
        };
        return Reddify;
    }());
    return Reddify;
});
define("test", ["require", "exports", "toImport"], function (require, exports, Reddify) {
    "use strict";
    exports.__esModule = true;
    Reddify.document();
    console.log('compiled');
    document.getElementById('to-red').style.color = 'red';
});
//# sourceMappingURL=app.js.map