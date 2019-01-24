//This is the constructor for an enemy alien
function Enemy(game, pos)
{
	this.name = "enemy";
	this.radius = ENEMY_RADIUS * game.dimensions.y;;
	this.collider = new Collider("round");
	this.collider.setRadius(this.radius);
	
	this.move = function()
	{
		//...
	}
	
	this.onCollide = function(gameObject)
	{
		//...
	}
	
	this.draw = function()
	{
		//...
	}
}