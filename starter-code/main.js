console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardFour===cardThree || cardOne===cardTwo){
	alert('You found a match.');
} else if (cardOne===cardThree || cardTwo===cardFour){
	alert('Sorry, try again.');
}*/

var createCards= function(){
var gameBoard= document.getElementById('game-board');

for (var i=1; i<=4; i+=1){

	var newCard= document.createElement('div');
	newCard.className= 'card';

	gameBoard.appendChild(newCard);
	}
}
createCards();








