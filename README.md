#JavaScript Introduction

* invented in 1995 by Brendan Eich at Netscape, Inc
* has nothing to do with Java -- Java and JavaScript are two completely different langauges
* invented as a way to allow programs to run in web browsers
* meets ECMASscript (European Computer Manufacturers Association) standard (as does ActionScript)

##client-side vs server-side

* php is server-side
* JavaScript is client-side
* (server-side JavaScript is also possible now, but we're going to ignore that)

##example1.html - hello world!

```html
<html>
<head>
<script type="text/javascript">
  function doHello() {
    document.getElementById("demo").innerHTML = "Hello, World!";
  }
</script>
</head>
<body>

<p id="demo">This is my first javascript program.</p>

<button type="button" onclick="doHello()">Go</button>

</body>
</html> 
```

##example2.html / example2.js - hello world in a separate .js file

###example2.html

```html
<html>
<head>
<script type="text/javascript">
</script>
</head>
<body>

<p id="demo">This is my first javascript program.</p>

<button type="button" onclick="doHello()">Go</button>

</body>
</html> 
```
###example2.js

```javascript
function doHello() {
  document.getElementById("demo").innerHTML = "Hello, World!";
}
```
