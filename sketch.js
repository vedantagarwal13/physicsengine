const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,objectball,objectg;



function setup() {
  createCanvas(400,400);
  
engine=Engine.create();
world=engine.world;
var balloptions={
  restitution:1
}
var groundoptions={
  isStatic:true
}
objectball=Bodies.circle(200,200,10,balloptions);
objectg=Bodies.rectangle(200,390,400,20,groundoptions);

World.add(world,objectball);
World.add(world,objectg);
//console.log(object);



}

function draw() {
  background("black");
  Engine.update(engine);
  ellipseMode(RADIUS)  ;
  ellipse(objectball.position.x,objectball.position.y,20,20);
  rectMode(CENTER)
  rect(objectg.position.x,objectg.position.y,400,20);
}