// Prod prices
var prodPrices = ["0.33", "0.50"];
document.getElementById("prod1").innerHTML = "£&nbsp;" + prodPrices[0];
document.getElementById("prod2").innerHTML = "£&nbsp;" + prodPrices[1];


// Grabbing Product List by Class and apply event listener (click on child elements)
document.addEventListener("DOMContentLoaded", 
	function() { 

	var priceTbl =
	// grabbing the parent Class in the product list table
	document.getElementsByClassName("prod-list");
	console.log("prod-list");
	
	// event listener = counting the amount of child elements in the grabbed Class and printing any click in the console
	for(var i = 0; i < priceTbl.length; ++i) {
	priceTbl[i].addEventListener("click", gotClick);
	}

	function gotClick(event) {
	//console.log("Clicked");
	
	var priceTdId = this.id;
	console.log(priceTdId);
	}

var prodQty = document.getElementById("qtyFlat1").value;


});
/*Ch4 last*/



function subTot() {
var prod1Qty = document.getElementById("qtyFlat1").value;
var subTotProd1 = prod1Qty * prodPrices[0];
var subTotClean = subTotProd1.toFixed(2);
		document.getElementById("prod1-subtotal").innerHTML = subTotClean;
		document.getElementById("quantity-alert").innerHTML = "<br><br>";

    if (prod1Qty > 10 ) {
		document.getElementById("quantity-alert").innerHTML = "Too much sugar is bad for you.<br>Select between 1 ~ 10.";
		
		// insert aria attribute inside a tag
		var ariaMsgAttr = document.getElementById("quantity-alert");
		var ariaString = document.createAttribute("aria-describedby");
		ariaString.value = "Too much sugar is bad for you. Select between 1 to 10.";
		ariaMsgAttr.setAttributeNode(ariaString);
        return false;
    }else{
		return true;
	}
}
subTot();


function clearSub() {
	var prod1QtyOver = document.getElementById("qtyFlat1").value;
	if(prod1QtyOver > 10){
		document.getElementById("quantity-alert").innerHTML = "<br><br>";
		document.getElementById("qtyFlat1").value = "";
		document.getElementById("prod1-subtotal").innerHTML = prodPrices[0];
	}
}
clearSub();


/**************/


/*
function myFunction() {
    var h1 = document.getElementsByTagName("H1")[0];
    var att = document.createAttribute("class");
    att.value = "democlass";
    h1.setAttributeNode(att);
}
*/


/*function ariaAttr() {
    var ariaErrAttr = document.getElementById("quantity-alert");
    var att = document.createAttribute("aria-describedby");
    att.value = "Too much sugar is bad for you.<br>Select between 1 ~ 10.";
    ariaErrAttr.setAttributeNode(att);
}
ariaAttr();*/


/*function qtyIntMust() {
var qtyInt = parseInt(document.getElementById("qtyFlat1").value, 10) || 0,
 if(qtyInt == NaN)
 	qtyInt = 0; 
}
qtyIntMust();*/


// http://stackoverflow.com/questions/1444477/keycode-and-charcode
/*
function(evt) {
  evt = evt || window.event;
  var charCode = evt.which || evt.keyCode;
  var charStr = String.fromCharCode(charCode);
  alert(charStr);
}
*/

/* function qtyNum(evt) {
	evt = evt || window.event;
	var qtyNumKey = event.charCode || event.keyCode; 
	if (qtyNumKey == >= 48 && charCode <= 57) {
		return true;
	}
}
qtyNum(); */

// var subTotProd1 = document.getElementById("prod1-subtotal").innerHTML = Math.round((prod1Qty * (prodPrices[0])) * 100) / 100;
// var prod1Qty = parseInt(document.getElementById("qtyFlat1").value, 100);


/*$(document).ready(function () {
	// the '+' button
    $('.add').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
	// the '-' button
    $('.minus').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });	
}); */


/*document.getElementById ('qtyFlat1');
	
	
	/*function prodSubTot (val, prodPrices){
	return currentVal * prodPrices[0];
	console.log(prodSubTot);
	}*/
