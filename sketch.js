
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var top1;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1600 ,1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

top1 = new Log (350,150,500,20);
	
bob1 = new Bob(350,500,30);
bob2 = new Bob(290,500,30);
bob3 = new Bob(230,500,30);
bob4 = new Bob(410,500,30);
bob5 = new Bob(470,500,30);

chain1 = new Chain(top1.body,bob1.body,0,0);
chain2 = new Chain(bob2.body,top1.body,-60,0);
chain3 = new Chain(bob3.body,top1.body,-120,0);
chain4 = new Chain(bob4.body,top1.body,60,0);
chain5 = new Chain(bob5.body,top1.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  top1.display();

  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-300,y:200});
	}
  }


