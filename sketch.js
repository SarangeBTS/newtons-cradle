const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roofObj,bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	roofObj = new ROOF(750,150,500,30);

	bobObj1 = new BOB(650,400);
	bobObj2 = new BOB(710,400);
	bobObj3 = new BOB(770,400);
	bobObj4 = new BOB(830,400);
	bobObj5 = new BOB(890,400);

	rope1 = new ROPE(roofObj.body,bobObj1.body,-50,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
roofObj.display();

bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

rope1.display();
  
  drawSprites();
 
}



