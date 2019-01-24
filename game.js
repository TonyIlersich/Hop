const ASTEROID_COUNT = 10;

function Game(canvas, width, height)
{
	console.log("game constructor called");
	
	this.context = canvas.getContext("2d");
	this.dimensions = new Vector(width, height);
	this.gameObjects = [];
	
	this.aspect = function()
	{
		return dimensions.x / dimensions.y;
	}
	
	this.spawnObjects = function()
	{
		var spawnGrid = new Vector(7, 5);
		
		var asteroidPositions = [
			new Vector(3.5, 2.5),
			new Vector(2.5, 0.5),
			new Vector(4.5, 0.5),
			new Vector(1.5, 1.5),
			new Vector(5.5, 1.5),
			new Vector(1.5, 3.5),
			new Vector(5.5, 3.5),
			new Vector(2.5, 4.5),
			new Vector(4.5, 4.5)
		];
		
		for (var i = 0; i < asteroidPositions.length; i++)
		{
			this.gameObjects.push(
				new Asteroid(
					this,
					asteroidPositions[i]
						.scale(this.dimensions)
						.descale(spawnGrid)));
		}
		
		var enemyPositions = [
			new Vector(1.5, 0.5),
			new Vector(5.5, 0.5),
			new Vector(1.5, 4.5),
			new Vector(5.5, 4.5)
		];
		
		for (var i = 0; i < enemyPositions.length; i++)
		{
			this.gameObjects.push(
				new Enemy(
					this,
					enemyPositions[i]
						.scale(this.dimensions)
						.descale(spawnGrid)));
		}
		
		
	}
	
	this.init = function()
	{
		this.spawnObjects();
		
		//...
		
		setInterval(() => { this.update(); }, 10);
	}
	
	//This function moves each game object.
	this.move = function()
	{
		for (var gameObject of this.gameObjects)
		{
			gameObject.move();
		}
	}
	
	//This function checks collisions between each game object, and calls the collide event handler if necessary.
	this.checkCollisions = function()
	{
		//loop through each pair of game objects
		for (var i = 0; i < this.gameObjects.length; i++)
		{
			for (var j = 0; j < this.gameObjects.length; j++)
			{
				//grab game objects
				var gameObject0 = this.gameObjects[i];
				var gameObject1 = this.gameObjects[j];
				
				//if the game objects are different and colliding, call the collide event handler
				if (i != j &&
					gameObject0.collider.checkCollide(gameObject1.collider))
				{
					gameObject0.onCollide(gameObject1);
				}
			}
		}
	}
	
	//This function draws all the game objects onto the canvas
	this.draw = function()
	{
		this.context.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
		
		for (var gameObject of this.gameObjects)
		{
			gameObject.draw();
		}
	}
	
	//This function is called every frame the game is running
	this.update = function()
	{
		//get the time this function started
		var frameStart = Date.now();
		
		//...
		
		//update game objects
		this.move();
		this.checkCollisions();
		this.draw();
		
		//...
		
		//get the total time this function has been running
		var frameDeltaTime = Date.now() - frameStart;
		console.log("dt: " + frameDeltaTime);
	}
}
