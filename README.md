shortkeys.js
============

A javascript function for dirt simple keyboard shortcuts.

Installation
------------

To use this you can download a copy of either the `shortkeys.js` or `shortkeys.min.js` files and reference it
in a script tag. 

Or you can copy the code and include it in one of your javascript files.

Usage
-----

Currently shortkeys supports shortcut creation with `Ctrl`, `Alt`, `Shift`, & `Meta` keys as a modifier, and one additional key.

Example shortcut string: ```"ctrl+a"```

Future versions should include support for more than 2 keys in a shortcut declaration.

Simple usage:

```javascript
shortkeys("ctrl+q",function(){
    alert("Ermagherd Ctrl+Q was pressed!");
});
```
