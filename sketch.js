
var fixedRect,movingRect,rect2,rect3,rect1



function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite (400, 200, 50, 80);
  fixedRect.shapeColor="green"

  movingRect = createSprite (600,200,80,50)
  movingRect.shapeColor="green"

  rect1 = createSprite(100,100,50,50)
  rect1.shapeColor="blue"

  rect2 = createSprite(250,100,50,50)
  rect2.shapeColor="blue"

  rect3 = createSprite(350,100,50,50)
  rect3.shapeColor="blue"
}

function draw() {
  background(0);  

  movingRect.x= mouseX
  movingRect.y=mouseY 

  console.log (movingRect.x-fixedRect.x)

 
  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  } else {
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
 

  drawSprites();
}

