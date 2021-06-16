const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball_option = {
        'restitution':1,
    }

    ball = Matter.Bodies.circle(400,100,50,ball_option);
    World.add(world,ball);


    ground = new Ground(600,height,1200,20);
    //console.log(ground);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    

    box3 = new Box(700,250,70,70);
    box4 = new Box(700,320,70,70);
    
    box5 = new Box(700,200,70,70);

    box6 = new Box(800,320,70,70);
    box7 = new Box(800,200,70,70);
    box8 = new Box(800,250,70,70);
    box9 = new Box(800,170,70,70);

    box10 = new Box(900,320,70,70);
    box11 = new Box(900,250,70,70);
    box12 = new Box(900,220,70,70);
   
    
    slingshot = new SlingShot(ball,{x:550, y:50});
}

function draw(){
    
        background("white");
    
    
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    

    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,50,50);
    

    
    slingshot.display();    

    

}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}


    


