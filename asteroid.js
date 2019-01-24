//This is the constructor for asteroids
function Asteroid(game, pos)
{
	this.name = "asteroid";
	this.mass = ASTEROID_MASS * game.dimensions.y;
	this.radius = ASTEROID_RADIUS * game.dimensions.y;
	this.game = game;
	this.pos = pos;
	this.collider = new Collider("round");
	this.collider.setRadius(this.radius);
	this.velocity = new Vector().random(this.radius * .2);
	
	this.move = function()
	{
		this.pos =
			this.pos
				.add(this.velocity.mult(FRAME_DELTA_TIME))
				.wrap(this.game.dimensions);
	}
	
	this.onCollide = function(gameObject)
	{
		console.log(this.name + " hit: " + gameObject.name);
		
		switch (gameObject.name)
		{
			//TODO: handle "asteroid" (bounce), player (?? hmmm), enemy (?? hmmm)
			
			//...
			
			default:
				console.log(this.name + " onCollide not implemented for: " + gameObject.name);
		}
	}
	
	this.draw = function()
	{
		for (var dx = -1; dx <= 1; dx++)
		{
			for (var dy = -1; dy <= 1; dy++)
			{
				this.game.context.fillStyle = "#808080";
				this.game.context.beginPath();
				this.game.context.arc(
					this.pos.x + dx * this.game.dimensions.x,
					this.pos.y + dy * this.game.dimensions.y,
					this.radius, 0, TAU);
				this.game.context.fill();
			}
		}
	}
}