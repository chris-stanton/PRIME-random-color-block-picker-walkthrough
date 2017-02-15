//Use only with jQuery
$(document).ready(function() {
//log to say were are ready
  console.log("jquery is ready to go");
//creates blocks, applies css and appends to the DOM
  var colorArray = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine"];
//loops through all of the colors and applies to the empty <div>
  for (var i = 0; i < colorArray.length; i++) {
    colorArray[i]
  }

  var newColorBlock = $("<div>");
  newColorBlock.css("background-color", colorArray[i]);
  newColorBlock.addClass('colorBlocks');
  $('#colorBlockContainer').append(newColorBlock);
});
