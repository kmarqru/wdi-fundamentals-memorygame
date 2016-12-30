console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardFour===cardThree || cardOne===cardTwo){
	alert('You found a match.');
} else if (cardOne===cardThree || cardTwo===cardFour){
	alert('Sorry, try again.');
}