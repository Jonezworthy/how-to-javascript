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
 |              JQUERY           |
 +-------------------------------+
 */
////jQuery is a library for many many uses, it is best used to bridge browser compatibility gaps
////There is no way I could possibly go through every jQuery use
////I will point out some useful methods & selectors that you may be interested in
var selector, filter;
////--- Selectors
////So jQuery has the ability to select elements from the DOM, allowing you to manipulate them
////The basic syntax for this is
$('selector');
////jQuery uses CSS based selectors, which makes understanding what elements you will select a lot easier

////These are most common, but there are a lot more selectors available
$('#test'); //id="test"
$('.test'); //class="test"
////Using attribute selectors can be done too
$('input[type="text"]');
$('input[type^="text"]'); //Starts with text
$('input[type*="text"]'); //Contains text
$('input:disabled'); //Is a disabled element
$(selector).eq(3);//eq can be used to get the nth of the elements (say you want the 3rd input)
$(selector).first();
$(selector).last();
$(selector).filter(selector); //Filters by selector

////For the full list: https://www.w3schools.com/jquery/jquery_ref_selectors.asp

////--- Element modifiers
////Imagine this HTML exists in the DOM
////<img id="element" src="www.google.co.uk" />
$('#element').attr('src');//This will return the src attribute's value
$('#element').attr('src', 'www.cruise.co.uk');//This will SET the value of the attribute src to www.cruise.co.uk

////CSS can be set with the .css method, it is best practice to use an object with key/value pairs to describe the CSS you want
////Do be aware that CSS properties with hypenated names can be camelcased

$('#element').css({fontWeight: 400});

$('#element').html(); //Returns the HTML for that element
$('#element').html('new HTML'); //Sets the HTML for that element
$('#element').replaceWith($('#element2')); //ReplaceWith can be used for similar effects

////-- Traversal - just to be aware these exist!
////These are fairly self explanatory from the names
$('#element').parent(selector);
$('#element').parents(selector);
$('#element').parentsUntil(selector, filter);
$('#element').children(selector);
$('#element').find(selector);
$('#element').siblings(selector);
$('#element').next(selector);
$('#element').nextAll(selector);
$('#element').nextUntil(selector);
$('#element').prev(selector);
$('#element').prevAll(selector);
$('#element').prevUntil(selector);


////--- Events
////I could do a whole lecture on events, but I will try and keep this down to syntax only
////There are 2 common syntaxes for events
////For example, we will use the click event
$('#element').click(function () {
    ////This way creates an event listener for each element selected
});

////.on can be bound on an element that doesn't exist yet
$('#element').on('click', function () {
    ///This way creates 1 event listener that will handle all of the elements selected
});
////Typically using .on is more accepted due to namespace considerations
////--- Event Bubbling
////Bubbling is an important concept in events
////An example of bubbling is when you click on a child element, which triggers the click event on that element
////But by clicking on that child element, you have also clicked on its parent, which fires the click event on that element
////And by clicking on that parent, you have also clicked on the <html> element, which also fires the click event on the <html> element
////Hopefully you understand that affect - it is called bubbling
////I do not recommend you do this, 90% of cases you would get an issue with bubbling, you probably haven't designed your HTML correctly
$('#element').on('click', function (event) {
    event.stopPropagation();//This cancels the bubbling affect up the DOM tree 
});

////There are many other events you can bind - here's the most popular - there are many!
////e.g submit
////    focus
////    blur
////    dblclick
////    keydown
////    keyup
////    keypress
////    mousedown
////    mouseup
////    mouseover
////    contextmenu
