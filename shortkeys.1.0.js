/* 
 * shortkeys.js
 * Version 1.0
 * Author: Michael Springer
 * License: WTFPLv2
 * URL: https://github.com/mspringer/shortkeys.js
 * ===========================
 * A jQuery plugin for easy keyboard shortcuts.
 * Based on the work of Ganeshji Marwaha
 */

$.ctrl = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[];
        if(e.keyCode == key.charCodeAt(0) && e.ctrlKey) {
            callback.apply(this, args);
            return false;
        }
    });
};

$.alt = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[];
        if(e.keyCode == key.charCodeAt(0) && e.altKey) {
            callback.apply(this, args);
            return false;
        }
    });
};

$.shift = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[];
        if(e.keyCode == key.charCodeAt(0) && e.shiftKey) {
            callback.apply(this, args);
            return false;
        }
    });
};
