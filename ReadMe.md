`shortkeys.js`
===========

A jQuery plugin for easy keyboard shortcuts.

Installation
------------

To use this you can download a copy of either the `shortkeys.x.js` or `shortkeys.x.min.js` files and reference it
in a script tag. 

Or you can copy the code and include it in one of your javascript files (supposedly faster from what  hear.)

Or you can even just copy the code of the function you need to use into your javascript file, its pretty darn simple.

Usage
-----

Creation of keyboard shortcuts with Ctrl, Alt, or Shift using one of the corresponding functions:

`$.ctrl()`, `$.alt()`, or `$.shift()`

Explanation of how to use one of the functions:

    $.foo('key', function(optionalArgs) {
        this.do.stuff(optionalArgs);
    }, [Input for Args]};

In this working example, the shortcut for `Ctrl + S` is created and will trigger an alert displaying "Saved":

    $.ctrl('S', function() {
      alert("Saved");
    });

In this example for `Shift + D` we make use of the optional argument:

    $.shift('D', functon(n) {
      alert(s);
    }, ["This does more than allow you to bind alerts, trust me."]};
    
Drawbacks
---------
One drawback of performing keyboard shortcut overrides from javascript is that it is unable to override all browser
defined shortcuts. 

For instance the creation of `Ctrl + N` will fail in Chrome/Chromium but work in Firefox.

The shortcut `Ctrl + O` works in both Chrome & Firefox, however still triggers the default event in Firefox.

The only true way to properly override browser defined shortcuts is to utilize a Java applet to capture input...that
seems a bit messy so personally I'll stick with this and make new shortcuts for my web apps.
    
Planned Updates
---------------

Probably the only real update aside from making sure this doesn't break is the inclusion of a function
that allows you to combine more than two keys together (Ex. `Ctrl + Shift + Q`)


License
-------
All of the shortkeys.js code (for what little there is) is under the WTFPLv2 license. Which means it's also MIT and BSD (or anything you want). However, the inspired works are subject to their own licenses.

This program is free software. It comes without any warranty, to the extent permitted by applicable law. You can redistribute it and/or modify it under the terms of the WTFPL, Version 2, as published by Sam Hocevar. 

See http://sam.zoy.org/wtfpl/COPYING for more details.

Thanks
------

This plugin is based off the work of [Ganeshji Marwaha](http://www.gmarwaha.com/blog/2009/06/16/ctrl-key-combination-simple-jquery-plugin/),
 It saved my ass during a university project so I figured I'd redistribute my "extended" plugin I built based off his code.