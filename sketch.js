
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var roof;
var ball1, ball2, ball3, ball4, ball5;
var string1,strin2,strin3,string4,string5;
var bobDia;


function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

roof= new Ground(400,20,800,50)
	Engine.run(engine);

	ball1= new ball(200,500,50);
	ball2= new ball(300,500,50);
	ball3= new ball(400,500,50);
	ball4= new ball(500,500,50);
	bobDia=100;
	ball5= new ball(600,500,50);
	
   string1 =  new SlingShot(ball3.body, roof.body,0,0);
   string2=  new SlingShot(ball2.body, roof.body,-bobDia,0);
   string3=  new SlingShot(ball4.body, roof.body,bobDia,0);
   string4=  new SlingShot(ball1.body, roof.body,-bobDia*2,0);
   string5=  new SlingShot(ball5.body, roof.body,bobDia*2,0);

  
}


function draw() {
  rectMode(CENTER);
  background("green");
  roof.display(); 

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();


}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-200,y:-200}); } 
} 


