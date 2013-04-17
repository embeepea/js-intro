#JavaScript Introduction

* invented in 1995 by Brendan Eich at Netscape, Inc
* has nothing to do with Java -- Java and JavaScript are two completely different langauges
* invented as a way to allow programs to run in web browsers
* meets ECMASscript (European Computer Manufacturers Association) standard (as does ActionScript)

##client-side vs server-side

* php is server-side
* JavaScript is client-side
* (server-side JavaScript is also possible now, but nevermind that for now)

##example1.html

* Hello World!

##example2.html / example2.js

* Same as example1, but with JavaScript in a separate file

##example3.html

* A more complicated HTML structure.

##example4.html

* Arranging for JS code to run immediately on page load
* HTML page elements are not available until page has finished loading!
* body "onload" attribute.

##example5.html

* Same as example4, but with CSS styling.
* DOM concepts
  * elements / attributes - nested structure
  * "selectors" for targeting objects in DOM

##example6.html

* divs and spans: useful containers for organizing the structure of a page.  Like tables, but more flexible.
* 'class' vs 'id' attributes
* Google Chrome dev tools: view HTML structure, see console log

##example7.html

* introducing jQuery - a JavaScript library
* the jQuery function, aka just $.  Note: this feels strange at first, but gets more natural after a while:
  in JQuery, $ is a function name!
* jQuery selectors: 'document', '#wilma', '#betty'
* anonymous functions
* asynchronicity, 'callback' functions

##example8.html

* registering event handlers

##JavaScript Language Fundamentals

* syntax similar to php and many other C-inspired languages
* variables declared with `var` statement; optional, but *highly* recommended, because
  otherwise *bad things can happen*
* JavaScript is full of _bad parts_.  But if you stick to the _good parts_, it's a great langauge.
  [_JavaScript: the Good Parts_](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=sr_1_1?ie=UTF8&qid=1366208068&sr=8-1&keywords=javascript%2C+the+good+parts)
 is a great book by Douglas Crockford.
* scoping, function nesting

##JavaScript objects

* similar to PHP associative arrays (actually, more like PHP objects, which we did not cover!)

##example9.html

* JavaScript object syntax

##example10.html

* see `stations.js`
* more complex object example

##example11.html

* AJAX (Asynchronous JavaScript and XML) with jQuery
* web services

##example12.html

* JSON - JavaScript Object Notation
* JSON with AJAX

##example13.html

* weather station list from example10 above, via AJAX

##displayweather.html, displayweather.js, displayweather.css

* walkthrough of full example
