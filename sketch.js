
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var box1;
var box2;
var box3;
var ball;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670,width,20);
	box1 = new Box(width/2+660,610,20,100);
	box2 = new Box(width/2+550,650,200,20);
	box3 = new Box(width/2+450,610,20,100);
	ball = new Paper(200, 450, 40);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box2.display();
  box3.display();
  box1.display();
  ball.display();
}

function keyPressed()
    {
      if (keyCode === UP_ARROW)
      {
         Matter.Body.applyForce(ball.body, ball.body.position,{x:95,y:-95})
      }
    }

