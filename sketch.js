const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;

var engine;
var world;

var bg, bgImg;
var wall, wall1Image, initialWall, wall2Image, wall3Image, wall4Image; 
var brick1, coinBrickImage, brick2, bigBrickImage, smallBrickImage, initialCoinBrick, initialSmallBrick1, initialSmallBrick2;
var cloud, cloud1Image, cloud2Image, cloud3Image, cloud4Image, cloud5Image, cloud6Image, cloud7Image, cloud8Image;
var mario, marioImage;
var invisibleGround;

function preload(){

  bgImg = loadImage("17.PNG");
  wall1Image = loadImage("12.PNG");
  wall3Image = loadImage("13.PNG");
  wall4Image = loadImage("15.PNG");
  coinBrickImage = loadImage("coin brick.PNG");
  wall2Image = loadImage("14.PNG");
  smallBrickImage = loadImage("small brick.PNG");
  cloud1Image = loadImage("c1.PNG");
  cloud2Image = loadImage("c2.PNG");
  cloud3Image = loadImage("c3.PNG");
  cloud4Image = loadImage("c4.PNG");
  cloud5Image = loadImage("c5.PNG");
  cloud6Image = loadImage("c6.PNG");
  cloud7Image = loadImage("c7.PNG");
  cloud8Image = loadImage("c8.PNG");
  marioImage = loadAnimation("marina1.PNG","marina2.PNG","marina3.PNG");
  bigBrickImage = loadImage("big brick.PNG");

}

function setup() {

createCanvas(1160,600);
engine = Engine.create();
world = engine.world;

bg = createSprite(200,250,2600,600);
bg.addImage(bgImg);
bg.scale = 2.5;
bg.velocityX = -2;

initialWall = createSprite(1000,463,50,50);
initialWall.velocityX = -2;
initialWall.addImage(wall2Image);
initialWall.scale = 0.5;

initialCoinBrick = createSprite(600,300,20,20);
initialCoinBrick.addImage(coinBrickImage);
initialCoinBrick.velocityX = -2;

initialSmallBrick1 = createSprite(650,300,20,20);
initialSmallBrick1.addImage(smallBrickImage);
initialSmallBrick1.velocityX = -2;

initialSmallBrick2 = createSprite(550,300,20,20);
initialSmallBrick2.addImage(smallBrickImage);
initialSmallBrick2.velocityX = -2;

mario = createSprite(200,470,50,50);
mario.addAnimation("marina_running",marioImage);
mario.scale = 1;

invisibleGround = createSprite(530,533,1160,20);
invisibleGround.visible = false;


}

function draw() {

  background("teal");
  Engine.update(engine);
  
  if(bg.x<0){
  bg.x = bg.width/2;
  }  
  if(keyDown("UP_ARROW")&& mario.y>230){
  mario.velocityY = -2;
  }
  if(keyDown("DOWN_ARROW")){
  mario.velocityY = 2;
  }
  mario.velocityY = mario.velocityY+0.5;
  if(keyDown("RIGHT_ARROW")){
    mario.velocityX = 2;
  }
  if(keyDown("LEFT_ARROW")){
    mario.velocityX = -2;
  }
  mario.collide(invisibleGround);
  drawSprites();
  spawnWall();
  spawnBrick();
  spawnCloud();
}
function spawnWall(){

  if(frameCount%Math.round(random(500,800)) == 0){
    wall = createSprite(1350,455,50,50);
    wall.velocityX = -2;
   
    var rand = Math.round(random(1,4))
   
    switch(rand){
      case 1: wall.addImage(wall1Image);
      wall.scale = 0.75;
      break;
      case 2: wall.addImage(wall2Image);
      wall.scale = 0.5;
      break;
      case 3: wall.addImage(wall3Image);
      wall.scale = 0.40;
      break;
      case 4: wall.addImage(wall4Image);
      wall.scale = 0.35;
      wall.y = 445;
      break;

      default: break;
    }
  }
}

function spawnBrick(){
 
  if(frameCount%Math.round(random(150,200)) == 0){
    brick1 = createSprite(1350,300,20,20);
    brick1.velocityX = -2;

    var rand = Math.round(random(1,3))
    switch(rand){
      case 1: brick1.addImage(coinBrickImage);
      break;
      case 2: brick1.addImage(smallBrickImage);
      break;
      case 3: brick1.addImage(bigBrickImage);
      break;

      default: break;
    }
  }
 
}

function spawnCloud(){
  if(frameCount%100 == 0){
    cloud = createSprite(1350,100,20,20);
    cloud.velocityX = -2;
    cloud.y = Math.round(random(0,150));
    var rand = Math.round(random(1,8))
   
switch(rand) {
case 1: cloud.addImage(cloud1Image);
    break;
case 2: cloud.addImage(cloud2Image);
    break;
case 3: cloud.addImage(cloud3Image);
    break;
case 4: cloud.addImage(cloud4Image);
    break;
case 5: cloud.addImage(cloud5Image);
    break;
case 6: cloud.addImage(cloud6Image);
    break;
case 7: cloud.addImage(cloud7Image);
break;
case 8: cloud.addImage(cloud8Image);
    break;

default: break;
}
cloud.lifetime = 1000;
  }
}
