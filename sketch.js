
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var b;
var ballO;
var gO;
var ground;
var left, right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  background("white");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  gO = {
    isStatic:true
  }

  ballO = {
    restitution:0.8
  }
  
  ground = Bodies.rectangle(400,700,800,20,gO);
  left = Bodies.rectangle(700,700,20,140,gO);
  right = Bodies.rectangle(500,700,20,140,gO);
  b = Bodies.circle(200,200,40,ballO);
  World.add(world, b);
  World.add(world, ground);
  World.add(world, right);
  World.add(world, left);
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(b.position.x, b.position.y,40);
  
  rect(400,700,800,20,gO);
  rect(700,700,20,140,gO);
  rect(500,700,20,140,gO);
  if (keyDown("SPACE")){
    force();
  }
  drawSprites();
  Engine.update(engine);
}

function force(){
	Matter.Body.applyForce(b,{x:0,y:0},{x:0.03,y:-0.03});
  }



