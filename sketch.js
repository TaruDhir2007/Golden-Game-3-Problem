var player, playerImg;
var scene1Img, scene1;
var exit, exitImg;
var scene2, scene2Img;
var eatPlayer, eatPlayerImg;
var pan, panImg;
var egg, eggImg;
var next, nextImg;
//var count = World.seconds;
var touch;
var cup, cupImg;
var fry, fryImg;
var banana, bananaImg;
var coffee, coffeeImg;
var livingr, livingrImg;
var plate, plateImg;
var shirt, shirtImg;
var mouse, mouseImg;
var food, foodImg;
var OMG, OMGimg;

function preload(){
  scene1Img = loadImage("images/sleeping.png");
  exitImg = loadImage("images/exit.png");
  scene2Img = loadImage("images/kitchen top.png");
  eatPlayerImg = loadImage("images/eating.png");
  panImg = loadImage("images/frypan.png");
  eggImg = loadImage("images/egg.png");
  fryImg = loadImage("images/half fry.png");
  coffeeImg = loadImage("images/coffe.png");
  bananaImg = loadImage("images/banana.png");
  livingrImg = loadImage("images/living.png")
  plateImg = loadImage("images/Plate.png")
  cupImg = loadImage("images/coffeeCup.png");
  nextImg = loadImage("images/next.png")
  shirtImg = loadImage("images/shirt.png");
  OMGimg = loadImage("images/OMG.png");
  mouseImage = loadImage("images/mouse.png");
  foodImg = loadImage("images/food.png");
}

function setup() {
  createCanvas(500, 500);
  scene1 = createSprite(250, 250, 10, 10);
  scene1.addImage("sleeping image", scene1Img);
  scene1.scale = 0.65;
  
  exit = createSprite(450, 450);
  exit.addImage("Exit Image", exitImg)
 
 
  
  
  scene2 = createSprite(250, 250);
  scene2.addImage("kitchen top image", scene2Img);
  scene2.scale = 0.5;
  scene2.visible = false;
  exit.scale = 0.45;
  
  
  eatPlayer = createSprite(60, 400);
  eatPlayer.addImage("girl eating", eatPlayerImg);
  eatPlayer.scale = 0.4;
  eatPlayer.visible = false;
  banana =  createSprite(150 , 80);
  banana.addImage("banana Image", bananaImg);
  banana.scale = 0.3;
  banana.visible = false;
  pan = createSprite(275, 250);
  pan.addImage("fry pan", panImg ) 
  pan.scale = 1;
 
  //pan.debug = true
  pan.visible = false;
  fry = createSprite(295 , 125);
  fry.addImage("half fry egg", fryImg)
  fry.scale = 0.4;
  fry.visible = false;
 // pan.setCollider("rectangle",0,0,40,40)
  coffee = createSprite(50 , 80);
  coffee.addImage("coffee maker", coffeeImg);
  coffee.scale = 0.15; 
  coffee.visible = false;
  egg = createSprite(290, 100);
  egg.addImage("raw egg", eggImg);
  egg.scale = 0.25;
 // egg.debug = true
  egg.visible = false;
 

  plate = createSprite(400, 70);
  plate.addImage("Plate Image", plateImg);
  plate.scale = 0.45;
  plate.visible = false;
  touch = createSprite(400, 50, 5, 5 );
  //next.depth = scene2.depth;
 // next.depth += 1;
 next = createSprite(450 , 450);
 next.addImage("Next button", nextImg);
 next.scale = 0.35;
 next.visible=false;

 livingr = createSprite(240, 250);
  livingr.addImage("Living room", livingrImg);
  livingr.scale = 0.95;
 livingr.visible = false;
 
mouse = createSprite(100, 450);
mouse.addImage("Mouse", mouseImage);
mouse.scale = 0.3;
mouse.visible = false; 
mouse.depth = livingr.depth;
mouse.depth += 1;
 
}

function draw() {
  background(0);
 // console.log(egg.x)
  if(mousePressedOver(exit)){
    scene1.destroy();
    exit.destroy();
    scene2.visible = true;
    eatPlayer.visible = true;
    banana.visible = true;
    pan.visible = true;
    coffee.visible = true;
    egg.visible = true;
 //   livingr.visible = false;
  }
 live();
    if(egg.x < 255){
      egg.visible = false;
      fry.visible = true;
      plate.visible = true;
      fry.depth = plate.depth;
      fry.depth += 1;
      banana.depth = plate.depth;
      banana.depth += 1;
      fill("white");
      textSize(20);
      text("Put your food on the plate", 250, 250);
      
    }

    

if(fry.isTouching(touch)){
cup = createSprite(300 , 50);
cup.addImage("coffee cup", cupImg);
cup.scale = 0.1;
console.log(cup.lifetime)
cup.lifetime=1;
banana.x = 400;
banana.y = 60;
livingr.depth=cup.depth;
livingr.depth=livingr.depth+1;
//next.visible = true;
}   

  drawSprites();
if(keyDown(DOWN_ARROW)){
    egg.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
    egg.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    egg.x -=2
  }
  if(keyDown(UP_ARROW)){
    egg.y -=2
  }

  if(keyDown(DOWN_ARROW)){
    fry.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
    fry.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    fry.x -=2
  }
  if(keyDown(UP_ARROW)){
    fry.y -=2
  }

   console.log(World.seconds);
 // console.log(banana.x);
}



function live()
{
  
   if(banana.x ===400){
    
    next.visible = true;
    if(mousePressedOver(next)){
    next.destroy();
    livingr.visible=true;
    mouse.visible = true;
     
      
   }
    
    }
}