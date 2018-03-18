$('#pixel_canvas').on('click', 'td', function() {
  // Get the actual color value out of the color picker
  const color = $('#colorPicker').val();
  // Use that color to change the background of the cells in the canvas
  // when we click on them
  this.style.background = color;
});

// When size is submitted by the user, call makeGrid()
$(':submit').click(function(event) {
  // call this method to do not trigger the default action of this event
  // in this case to click on the submit button, when it's downloaded
  event.preventDefault();
  // empty (= delete) all children, in this case cells from the canvas to start
  // a new one (if there was any already)
  $('#pixel_canvas').empty();
  // Get the height and width values out from the input boxes
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  makeGrid(height, width);
});

function makeGrid(gridHeight, gridWidth) {
  // This nested for loop make the actual pixel canvas out from cells
  for (let i = 1; i <= gridHeight; i++){
    $('#pixel_canvas').append('<tr></tr>');
    for (let j = 1; j <= gridWidth; j++){
      $('#pixel_canvas').children().last().append('<td></td>');
    }
  }
}
