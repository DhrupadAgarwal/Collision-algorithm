
var fixedRect,movingRect



function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite (400, 200, 50, 80);
  fixedRect.shapeColor="green"

  movingRect = createSprite (600,200,80,50)
  movingRect.shapeColor="green"
}

function draw() {
  background(0);  

  movingRect.x= mouseX
  movingRect.y=mouseY 

  console.log (movingRect.x-fixedRect.x)

  if (movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2 && fixedRect.x-movingRect.x<(fixedRect.width+movingRect.width)/2 
      && movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2 && fixedRect.y-movingRect.y<(fixedRect.height+movingRect.height)/2 ){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }

  drawSprites();
}