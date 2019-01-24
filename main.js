//This is the document ready function. It will be called as soon as the page loads.
$(document).ready(function()
{
	console.log("page loaded");
	
	//initialize game
	var elem = $("#canvas");
	var game = new Game(
		elem[0],
		Number(elem.attr("width")),
		Number(elem.attr("height")));
	game.init();
});
