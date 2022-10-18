var bg,sleep,brush,gym,eat,brush,move,bath
var astronaut



function preload (){
  bg = loadImage("assets/iss.png")
  sleep = loadAnimation("assets/sleep.png")
  brush = loadAnimation("assets/brush.png")
  gym = loadAnimation("assets/gym1.png","assets/gym2.png","assets/gym11.png","assets/gym12.png")
  eat = loadAnimation("assets/eat1.png","assets/eat2.png")
  bath = loadAnimation("assets/bath1.png","assets/bath2.png")
  move = loadAnimation("assets/move.png","assets/move1.png")
  
  
  }




function setup() {
  createCanvas(800,400);
createSprite(400, 200, 50, 50);
  
astronaut = createSprite(300,200)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1

}

function draw() {
  background(bg);  
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow to Brush",20, 60);
  text("Down Arrow to exercise",20, 75);
  text("Left Arrow to eat",20, 90);
  text("Right Arrow to Bathe",20, 105);
  text("a key to move",20, 120);
 
 
  edges=createEdgeSprites();
  astronaut.bounceOff(edges)
  
 
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("a")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}



