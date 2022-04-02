var ship,ship1;
var sea,sea1;

function preload(){
  seaImg = loadAnimation("ship-1.png","sgip-2.png","ship-3.png","ship-4.png");
  shipImg1=loadAnimation("sea.png")

}

function setup(){
  createCanvas(600,500);

  // creating the sea
  sea=createSprite(600,300);
  sea.addAnimation("running",sea1);
  sea.scale=0.5;
sea.velocityX=-1;

  // creating ship
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges = createEdgesSprite();

  //adding scale and position to ship
  ship.scale =0.25;
  ship.x=90;
  ship.y=300;
}

function draw() {
  background(blue);
  if(keyDown("enter")){
    ship.velocityX = 5;
  }
  if(keyDown("Left")){
    ship.velocityX = -5;
  }
  if(keyDown("space")){
    ship.velocityX = 0;
  }
  //stop ship from falling down
    ship.collide(edges[3])
  drawSprites();
}
