var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var rand;
var cloud;





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage  = loadImage("cloud.png")




  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200);

  rand= Math.round(random(100,500));

  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background("black");
  text(mouseX+","+mouseY,mouseX,mouseY)

 // console.log(trex.y);
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnClouds();
  drawSprites();
  
}

function spawnClouds(){
         
  if(frameCount%60===0){
    cloud=createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.scale = 0.4
    cloud.y=Math.round(random(10,60))
    cloud.depth=trex.depth
    trex.depth++     
    cloud.velocityX=-3;
  }

}

