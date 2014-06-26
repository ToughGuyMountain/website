

$(document).ready(function() {
  window.addEventListener('resize', resizeBlock, false);
});

var resizeBlock = function() {
  var blocks = $(".block");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].height = window.innerHeight;
  }
}
