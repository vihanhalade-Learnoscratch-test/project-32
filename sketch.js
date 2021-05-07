const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, g1, g2, g3, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, p1, s1, bg;
var backgroundImg;
bg = "sprites/bg.jpg";

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  g1 = new Ground(400, 400, 800, 5);
  g2 = new Ground(350, 270, 210, 5);
  g3 = new Ground(650, 200, 150, 5);
  b1 = new Block(260, 252, 30, 40);
  b2 = new Block(290, 252, 30, 40);
  b3 = new Block(320, 252, 30, 40);
  b4 = new Block(350, 252, 30, 40);
  b5 = new Block(380, 252, 30, 40);
  b6 = new Block(410, 252, 30, 40);
  b7 = new Block(440, 252, 30, 40);
  b8 = new Block(290, 212, 30, 40);
  b9 = new Block(320, 212, 30, 40);
  b10 = new Block(350, 212, 30, 40);
  b11 = new Block(380, 212, 30, 40);
  b12 = new Block(410, 212, 30, 40);
  b13 = new Block(320, 172, 30, 40);
  b14 = new Block(350, 172, 30, 40);
  b15 = new Block(380, 172, 30, 40);
  b16 = new Block(350, 132, 30, 40);
  b17 = new Block(590, 180, 30, 40);
  b18 = new Block(620, 180, 30, 40);
  b19 = new Block(650, 180, 30, 40);
  b20 = new Block(680, 180, 30, 40);
  b21 = new Block(710, 180, 30, 40);
  b22 = new Block(620, 140, 30, 40);
  b23 = new Block(650, 140, 30, 40);
  b24 = new Block(680, 140, 30, 40);
  b25 = new Block(650, 100, 30, 40);
  // p1 = new Polygon(70, 180, 6, 10);
  //p1 = Bodies.circle(50, 200, 20);
  //p1.shapeColor = "red";
  //World.add(world,p1)
  tint(255, 126); // Apply transparency without 

  p1 = new Polygon(150, 200, 20);

  s1 = new Slingshot(p1.body, { x: 150, y: 200 });

  backgroundImg = loadImage(bg);
}

function draw() {
  Engine.update(engine);
  getTime();
  // console.log(bg);
  background(backgroundImg);
  
  g1.display();
  g2.display();
  g3.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  p1.display();
  s1.display();
  
}

function mouseDragged() {
  Matter.Body.setPosition(p1.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  s1.fly();
}
function keyPressed() {
  if (keyCode === 32)
    s1.attach(p1.body);
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
  var responseJSON = await response.json();
  //console.log(responseJSON)
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11, 13);
  //console.log(dateTime+"----"+hour)
  if (hour >= 06 && hour < 18) {
       bg = "sprites/bg.jpg";  
  }else {
       bg = "sprites/bg2.jpg"; 
      } 
      
  backgroundImg = loadImage(bg);
  //console.log(bg);
  
}