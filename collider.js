//This is the constructor for a simple collider
function Collider(shape)
{
	this.shape = shape;
	this.pos = null;
	this.vertices = null;
	this.radius = undefined;
	
	this.setPosition = function(pos = null)
	{
		this.pos = pos;
	}
	
	this.setVertices = function(vertices = null)
	{
		this.vertices = vertices;
	}
	
	this.setRadius = function(radius = undefined)
	{
		this.radius = radius;
	}
	
	//This function returns the closest point in our collider to the argument.
	this.closestPointTo = function(point)
	{
		switch (this.shape)
		{
			case "round":
				var point = null;
				//TODO calc nearest point in circle...
				return point;
			case "polygon":
				var point = null;
				//TODO calc nearest point in polygon...
				return point;
			default:
				console.log("closestPointTo is not implemented for shape \"" + this.shape + "\"");
				return null;
		}
	}
	
	//This function returns true if the argument is inside our collider, false otherwise.
	this.isPointInside = function(point)
	{
		//TODO determine if point is inside collider, depending on shape...
	}
	
	//This function returns true if the argument overlaps our collider, false otherwise.
	this.checkCollide = function(otherCollider)
	{
		return this.isPointInside(otherCollider.closestPointTo(this.pos));
	}
}
