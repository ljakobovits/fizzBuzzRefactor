var fizzCount = function(userNum) {

var counter = 1;


while (counter <= userNum)
{
	
	if ((counter % 3) === 0) {

		if ((counter % 5) === 0) {
		 document.write("<p>fizzbuzz</p>");

		}
		else {
			document.write("<p>fizz</p>");
		}
	}
	else if ((counter % 5) === 0) {
		document.write("<p>buzz</p>");
	}
	else{
	  document.write(counter + "<p></p>");
	}
	counter++;
};
}

$(document).ready(function() {

	


$('.start').mousedown(function() {


var number = prompt("Please enter a number");


if (number.indexOf(".")> -1) {
	while (number.indexOf(".")> -1) {
	number = prompt("Please enter an integer");
		while (isNaN(+number)) {
			number = prompt("Please enter a number");
		}

	}
}

else if (isNaN(+number)) {
	while (isNaN(+number)) {
		number = prompt("Please enter a number");
		while (number.indexOf(".")> -1) {
			number = prompt("Please enter an integer");
		}

	}
}

document.write("<strong>You entered "+ number+ "<p></p></strong>");


fizzCount(number);




  
});


});