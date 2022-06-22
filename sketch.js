var car,obsticle;
function preload(){
  car1=loadImage("car1.png");
  obsticle1=loadImage("obstical2.png");
  track=loadImage("background.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(width/2,height-100,30,30);
  car.addImage(car1);
car.scale=0.05
  obstical = new Group();

  addSprites();

  
}

function draw() 
{
   background(30);
   image(track, 0,-displayHeight*3,displayWidth, displayHeight*5);
   //camera.position.y=car.position.y
  if (keyIsDown(RIGHT_ARROW)) 
  {
    car.position.x = car.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    car.position.x= car.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    car.position.y = car.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
  car.position.y = car.position.y + 5;
  }
  
  drawSprites();
  camera.position.y = car.y;

  
}
 function addSprites() {
  for (var i = 0; i <12; i++) {
    var x, y;
      x = random(width/2+150, width/2-150);
      y = random(-height*4,height);
    
   sprite = createSprite(x, y);
    sprite.addImage(obsticle1);
    sprite.scale = 0.5;
    obstical.add(sprite);
    
  }
}



