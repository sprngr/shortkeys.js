/* 
 * shortkeys.js
 * Version 2.0
 * Author: Michael Springer
 * License: MIT
 * URL: https://github.com/mspringer/shortkeys.js
 * ===========================
 * A javascript function for simple keyboard shortcuts.
 */


function shortkeys(keys, callback, args) {
    if (keys.indexOf("+") === -1) {
        return false;
    }

    var mod, key = keys.split("+");
    document.onkeydown = function (e) {
        switch (key[0].toLowerCase()) {
            case "ctrl":
                mod = e.ctrlKey;
                break;
            case "alt":
                mod = e.altKey;
                break;
            case "shift":
                mod = e.shiftKey;
                break;
            case "meta":
                mod = e.metaKey;
                break;
        }

        if (e.keyCode == key[1].toUpperCase().charCodeAt(0) && mod) {
            callback.apply(this, args);
            return false;
        }
    }
}
