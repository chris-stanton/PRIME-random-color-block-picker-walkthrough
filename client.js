//Use only with jQuery
$(document).ready(function() {
//log to say were are ready
  console.log("jquery is ready to go");
//creates blocks, applies css and appends to the DOM
  var colorArray = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine"];
//loops through all of the colors and applies to the empty <div>
  for (var i = 0; i < colorArray.length; i++) {
  var newColorBlock = $("<div>");
  newColorBlock.css("background-color", colorArray[i]);
  newColorBlock.addClass('colorBlocks');
  $('#colorBlockContainer').append(newColorBlock);
  }

//select a random color and add it to the DOM
var randomNUmberSelected = randomNumber(0, colorArray.length-1); //randomly selects a number from 0-4
var randomColor = colorArray[randomNUmberSelected];
$('#userColorPrompt').text(randomColor);


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
});
