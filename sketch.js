var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	BoxPosition= width/2 - 100;
	BoxY= 610;
	BoxLeftSprite= createSprite(BoxPosition,BoxY,20,100);
	BoxLeftSprite.shapeColor=("red");
	BoxLeftBody= Bodies.rectangle(BoxPosition+20,BoxY, 20,100,{isStatic:true});
	World.add(world,BoxLeftBody);

	BoxBaseSprite= createSprite(BoxPosition+100,BoxY+40,200,20);
	BoxBaseSprite.shapeColor=("red");
	BoxBaseBody= Bodies.rectangle(BoxPosition+100,BoxY+45-20, 200,20,{isStatic:true});
	World.add(world,BoxBaseBody);

	BoxRightSprite= createSprite(BoxPosition+200,BoxY,20,100);
	BoxRightSprite.shapeColor=("red");
	BoxRightBody= Bodies.rectangle(BoxPosition+200-20,BoxY, 20,100,{isStatic:true});
	World.add(world,BoxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x=helicopterSprite.x-20;
		translation={x:-20,y:0};
		Matter.Body.translate(packageBody,translation);
	  }
	
	else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:+20,y:0};
		Matter.Body.translate(packageBody,translation);
	  }
	
	
	
	 else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



