class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=200;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(560,620,20,this.dustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(670,620,20,this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			
			
			fill(255)
			
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			
			
			fill(255)
			
			
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}