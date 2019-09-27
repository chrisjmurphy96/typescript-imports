define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Reddify = /** @class */ (function () {
        function Reddify() {
        }
        /**
         * Turns to-red, well, red
         */
        Reddify.document = function () {
            document.getElementById('to-red').style.color = 'red';
        };
        return Reddify;
    }());
    exports.Reddify = Reddify;
});
