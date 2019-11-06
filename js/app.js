
//Hide Warning
//jQuery(".warning").hide();

//Show Warning Slowly
//$(".warning").show("slow");


//$(".warning").hide().show("slow"); // alternative - method chaining

var myCode = function() {
	$(".warning").hide().show("slow");
}

//some test

$(document).ready(myCode);   // run when the page has been loaded
// need to do this unless include the jquery code at bottom of html page rather than the head





