// Get the walker image:

var walker = document.getElementById('walker');

// Configure motion params:
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var currentX = rightBorder;
// Have the stick figure start at the right border and start walking left
walker.style.left = rightBorder + 'px';
// var walkLeft = walkerPosition + '20px'

setInterval(update, 50)
function update() {
  currentX = currentX - 10;
  if(currentX <= leftBorder){
    // currentX = 0
    walker.classList.toggle('flip');
    currentX = currentX + 10


  }
  walker.style.left = currentX + 'px';
}



// When he crosses the left border, have him turn around and start walking right (and vice versa)


// Bonus: Make him turn around when you click on him
