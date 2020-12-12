const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3;
var umbrella;
var thunder, thunderCreatedFrame = 0;
var man_image,manWalkingFrame=0;

var man2;
var man3;
var man4;
var man5;
var man6;
var man7;
var man8;

function preload(){

   man_image = loadImage("walking_1.png");
   man2 = loadImage("walking_2.png");
   man3 = loadImage("walking_3.png");
   man4 = loadImage("walking_4.png");
   man5 = loadImage("walking_5.png");
   man6 = loadImage("walking_6.png");
   man7 = loadImage("walking_7.png");
   man8 = loadImage("walking_8.png");
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
}

function setup(){
  var canvas = createCanvas(400,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%90===0){
   thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
              break;
     case 2 : thunder.addImage(thunder2);
              break;
     case 3 : thunder.addImage(thunder3);
              break;
     default : break;
   }
   
  }
    
   
    
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
  drawSprites();
}



