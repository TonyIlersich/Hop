//This is the constructor for a player-controlled ship
function player(game, pos)
{
	this.name = "player";
	this.radius = PLAYER_RADIUS * game.dimensions.y;;
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