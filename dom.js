/*
+-------------------------------+
|                               |
|   +----+    +---+   +-----+   |
|   |        +        |         |
|   |        +        |         |
|   +----+    +--+    +-----+   |
|   |             +         |   |
|   |             +         |   |
|   +----+   +---+    +-----+   |
|                               |
+-------------------------------+
|              DOM              |
+-------------------------------+
*/
////DOM - Document Object Model
////   
//// MODEL
////   ^ 
////Keyword there is that is a Model, it is a data source, and like other data sources, you have to QUERY it
////queries are done through the document object, which is a property of the window object (these do not exist server side)
////

document.getElementById('element'); //Select by <div id="element"></div>
document.getElementsByClassName('element');//<div class="element"></div> - Should avoid doing this one, not very well supported
document.getElementsByName('element');//<div name="element"></div>
document.getElementsByTagName('div');//<div></div>
document.getElementsByTagNameNS(namespace, 'div');//<div></div> - Probably will never use this, but namespace is the URL of the type of document the page is using, like XHTML

////querySelector uses CSS selector syntax
////querySelectorAll gives you all of the results for that selector
document.querySelector('.class'); //class
document.querySelector('#id'); //id
document.querySelector('div'); //tag


document.querySelectorAll('.class'); //class
document.querySelectorAll('#id'); //id
document.querySelectorAll('div'); //tag

////FORMS
////Forms can be easier to manipulate through the forms property in the document object
////If you have a form with an ID or a NAME on the form, it is available through the forms property