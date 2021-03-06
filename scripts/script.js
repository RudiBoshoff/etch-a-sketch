// RUDI BOSHOFF

// STRUCTURE
// 1. user inputs grid size
// 2. user generates grid
// 2.1 determine the number of blocks in the grid
// 2.2 change html of containter div
// 2.3 change the block sizes based on *2.1*
// 3. user draws with mouse
// 3.1 change opacity of blocks on mouseover
// 4. user initiates color
//4.1 draw function but instead of a change in opacity; a change in color


const myGrid = $(".set-grid");
const randomColor = $(".set-color");
const containerWidth = 640;
const containerHeight = 640;
// TODO:  $(".container").css("width");
//        $(".container").css("height");
//        need to remove px from returned value
let randomiseColor = false;

// 1. user inputs grid size
let gridSize = $("input").val();
$("input").on("change", function() {
 gridSize = $("input").val();
})

// 2. user generates grid
myGrid.on("click", function(){
  generateGrid();
})

// GENERATE THE GRID
function generateGrid(){
  const container = $(".container");
  let containerHTML = "";
  // 2.1 determine the number of blocks in the grid
  let numOfBlocks = Math.pow(gridSize,2);
  for (let blocks = 0; blocks < numOfBlocks; blocks++){
      containerHTML += '<div class="item"></div>';
  }
  // 2.2 change html of containter div
  container.html(containerHTML);
  blockSize();
  // 3. user draws with mouse
$(".item").mouseover(function(){
  draw($(this));
})
  }

// 2.3 change the block sizes based on *2.1*
function blockSize(){
  const item = $(".item");
  const width = containerWidth / gridSize;
  const height = containerHeight / gridSize;
  //don't round to ensure perfect fit

  item.css({
    "width" : String(width).concat("px"),
    "height" : String(height).concat("px")
  });
}

// Randomise Color for drawing
let toggle = -1;
randomColor.on("click", function(){
  if (toggle == -1){
    randomiseColor = true;
    toggle = toggle * -1;
  } else {
    randomiseColor = false;
    toggle = -1;
  }
})
// 3.1 change opacity of blocks on mouse over
function draw(currentItem){
  if (randomiseColor == false){
    const opacityIncrement = 0.2;
    currentItem.css("background-color", "#333");
    randomColor.css("color", "white");
    let currentOpacity = Number(currentItem.css("opacity"));
    if (currentOpacity < 1){
        currentOpacity +=  opacityIncrement;
        currentItem.css("opacity",currentOpacity);
    }
} else {
    currentItem.css("opacity", 1);
    const backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    currentItem.css("background-color", backgroundColor);
    randomColor.css("color", backgroundColor); //very trippy
}
}

// 4. user initiates color
//4.1 draw function but instead of a change in opacity; a change in color
