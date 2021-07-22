
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,background,polygon1,slingshot,polygon_img

function preload(){
    background = loadImage("background.jpg");
    polyogon_img = loadImage("polygon.png");
}

function setup(){
createCanvas(3000,800)
engine=Engine.create();
world=engine.world;
Engine.run(engine)
ground = new Ground(600,600,1200,20);
polygon1 = Bodies.circle(50,200,20);
World.add(world,polygon1);
slingshot = new Slingshot(this.polygon1,{x:100,y:200});
}
function draw(){
    Engine.update(engine);
imageMode(CENTER)
image(polygon_img,polygon1.position.x,polygon1.position.y,40,40)
slingshot.display();
background(background);
ground.display();

    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingshot.fly();
}
