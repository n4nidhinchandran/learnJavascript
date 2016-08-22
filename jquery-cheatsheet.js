/*

	For reference only, the file is saved as .js for syntax highlighting purposes.
	Next Stop https://learn.jquery.com/using-jquery-core/traversing/

*/

// Jquery and $
jQuery("h1") = $("h1")

$("h1"); // Select HTML Element by name
$("#id"); // Select Elemtnt by Id
$(".class"); // Select elemtent by class
$("input[name='first_name']"); // Selecting elements by attributes


$("parentElement descendentElement"); // To select descendant (selects all descendents including sub descendents)
$("parentElement > descendentElement"); // To select direct descendents

$("Element, #id, .class"); // Selecting multiply elements

// Pseuo class selections
$("ul li :first");
$("ul li :last");
$("ul li :odd"); // 1 3 5
$("ul li :even"); // 0 2 4

$("#myform :input"); // Select all input like element in a form
$("#myform :checked"); // Selects all checked checkboxes and radio buttons in the form
$("#myform :selected"); // Selects all selected items in <options> list elements
$("#myform :enabled");
$("#myform :disabled");

// Selecting form-specific elements by type, uses syntax $("form :type"), most of them are equal to ["type=type"]
$("input :password");
$("input :reset");
$("form input :radio");
$("form input :text");
$("input :submit");
$("input :checkbox");
$("input :button");
$("input :image");
$("input :file");


$("div :visible"); // Select visible divs
$("div :gt(2)"); // Select all except the first three divs
$("div :animated"); // Select all currently animated divs


// Filter by traversing
$("ul").find("li"); // Faster, select sub "li" too
$("ul").first(); // Faster
$("ul").last(); // Faster

// Refining Selections
$("div.foo").has("p"); // div.foo elements that contains <p> tags
$("element").not(".bar"); // elements that dose not have a class of bar
$("ul li").eq(5); // select the sixth li


// Walking the DOM
$("ul").first().next(); // Second element
$("ul").first().prev(); // Returns first element itself.

$("li").first().parent(); // Walking Up the DOM
$("ul").children("li"); // select direct children only

$("h1").html(); // gets html content of element
$("h1").html("hello world"); // sets html content of element
$("h1").text(); // Fetch element's text. Html will be stripped
$("h1").text("Set this"); // Set Element's text Html will be stripped

$("element").width(); // Get or set width in pixels
$("element").height(); // Get or set height in pixels
$("element").position(); // Get an object with position information for the first element in the selection. relative to its ancestor 

$("element").val(); // gets value of element
$("element").val("Text"); // sets value of element

// Run jquery on DOM ready only
jQuery(document).ready(function(){
	// code
});

// Run jQuery after all components are loaded
jQuery(window).load(function(){
	// code
})


// Working With The DOM
/* var price = $("<p>Price Here </p>"); */

// Before 
$(".class").before(price); // puts the price node before class
price.insertBefore($(".class"));

// After 
$(".class").after(price); // puts the price node after class
price.insertAfter($(".class"));

// Prepend
$(".class").prepend(price);
price.prependTo($(".class"));

// Append
$(".class").append(price);
price.appendTo($(".class"));

// Remove from DOM
$('button').remove();

// Clone elements
$("element").clone(); // $("element").clone().appendTo("#idOfElement");

// Creating Elements
var newElement = $("<p>hi i am new</p>");
newElement.appendTo("element"); //

// Creating Elements
$(document.createElement('a').text('newText'));

$('button').on('click', function(){
	// code to run on button click
});

$('.class').on('click','button', function(){
	// code to run when button inside class is clicked
});

/* 

* *  * *  * *  * *  * *  * *  * *  * *  
.on Mouse Event List 
* *  * *  * *  * *  * *  * *  * *  * *  

click, dbclick
focusin, focusout
mousedown, mouseup
mousemove, mouseout
mouseover, mouseleave
mouseenter

* *  * *  * *  * *  * *  * *  * *  * *  
.on Keyboatd Event List 
* *  * *  * *  * *  * *  * *  * *  * *  

keypress, keydown, keyup
blur, focus
select, submit
change

*/

/* Expanding .on() Start */

function functionName() {
	// function code
}
$("element").on('click','button', functionName);

/* Expanding .on() End */ 


$(this); // current element

$("this").closest(".class"); // Finds the closest class by traversing up

$("element").attr("href"); // retutns href attribute of element
$("element").attr("href","index.html"); // sets href attributer of the element
$("element").attr({
	title :"this is good",
	href :"newlink.html"
}); // sets multiple attributes

$("this").data("dataName"); // to read data- attributes, here data-dataName
$("this").data("dataName","value"); // to set data- attributes

$(".class1").filter(".class2"); // Finds elements with classes .class1 and .class2

$("element").addClass("class"); // adds a class to the element
$("element").removeClass("class"); // removes class from element
$("element").toggleClass("class"); // toggles class presence
$("element").hasClass("class");

$("element").slideDown(); // Side down to show elements (set as display none in beginning)
$("element").slideUp(); // Side up to hide elements
$("element").slideToggle(); // Toggle slide animation

$("element").fadeIn(); // fade in element
$("element").fadeOut(); // fade out element
$("element").fadeToggle(); // fade toggle

$("element").length; // Retursn no. of nodes in the page

var quantity = +$("element").val(); // sets quantity to a number with value of element

$(element).on('click',function(event) {
	event.stopPropagation(); // stops "bubbling up" each parent node, still the click event will be handled
	event.preventDefault(); // prevents default actions
});


// Add css
$(this).css('background-color','#fff');
$(this).css({'background-color':'#fff','border-color':'1px solid #ccc'});


$("element").show(); // same as css display:block

$(this).animate({'top':'10px'}, 'slow'); // Parameters : slow/400, fast/200

// jQuery no conflict Meathod 1 
var $j = jQuery.noConflict(); // now $j is an alias of jQuery, creating alias is optional
// usgae of non conflict $("element").hide();

// jQuery no conflict Meathod 2
jQuery.noConflict();
jQuery(document).ready(function($){
	$("element").hide(); // uses locally scoped $ as an alias to jQuery
})



// is()
$("#id").is("element"); // check for element
var mike = $("this").is(function(){ }); // evaluvates function is true or false
if ( $( this ).is( ":first-child" ) ) {} // another evaluvation
	
// jQuery Meathod Chaining (setters are good in chaining but getters breaks chaining)
$("element").text("new Text").addClass("newClass").attr('href','#');

.end() // to end chaining and reattach the original element


// .each iteration
$("element").each(function(){
	alert($(this).attr("id")); // alerts id of each element
});

