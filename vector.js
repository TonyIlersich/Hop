//This is the constructor for a vector
function Vector(x = undefined, y = undefined)
{
	// these are the components of the vector
	this.x = x;
	this.y = y;
	
	// return the vector representing the displacement from this vector to another vector
	this.vectorTo = function(otherVector)
	{
		return new Vector(
			otherVector.x - this.x,
			otherVector.y - this.y);
	}
	
	// return the result of adding another vector to this vector
	this.add = function(otherVector)
	{
		return new Vector(
			this.x + otherVector.x,
			this.y + otherVector.y);
	}
	
	// return the result of subtracting another vector from this vector
	this.sub = function(otherVector)
	{
		return new Vector(
			this.x - otherVector.x,
			this.y - otherVector.y);
	}
	
	// return the result of multiplying this vector's components by another vector's components
	this.scale = function(otherVector)
	{
		return new Vector(
			this.x * otherVector.x,
			this.y * otherVector.y);
	}
	
	// return the result of dividing this vector's components by another vector's components
	this.descale = function(otherVector)
	{
		return new Vector(
			this.x / otherVector.x,
			this.y / otherVector.y);
	}
	
	// return the result of dividing this vector by a scalar
	this.mult = function(scalar)
	{
		return new Vector(
			this.x * scalar,
			this.y * scalar);
	}
	
	// return the result of dividing this vector by a scalar
	this.div = function(scalar)
	{
		return new Vector(
			this.x / scalar,
			this.y / scalar);
	}
	
	// return the dot product of this vector and another vector
	this.dot = function(otherVector)
	{
		return
			this.x * otherVector.x +
			this.y * otherVector.y;
	}
	
	// return the square magnitude of this vector
	this.sqrMagnitude = function()
	{
		return this.dot(this);
	}
	
	// return the magnitude of this vector
	this.magnitude = function()
	{
		return Math.sqrt(this.sqrMagnitude());
	}
	
	// return the square of the distance from this vector to another vector
	this.sqrDistance = function(otherVector)
	{
		return
			this.vectorTo(otherVector)
				.sqrMagnitude();
	}
	
	// return the distance from this vector to another vector
	this.distance = function(otherVector)
	{
		return Math.sqrt(this.sqrt(this.sqrDistance(otherVector)));
	}
	
	// return the normalized version of this vector
	this.normalized = function()
	{
		return this.divide(this.magnitude());
	}
	
	// return a scaled version of this vector that is a certain length
	this.toLength = function(length)
	{
		return this.normalized().mult(length);
	}
	
	// wrap a vector into a specific rectangle spanning form the origin to the given vector
	this.wrap = function(max)
	{
		return new Vector(
			(this.x % max.x + max.x) % max.x,
			(this.y % max.y + max.y) % max.y);
	}
	
	// return a random unit vector
	this.randomUnit = function()
	{
		var theta = Math.random() * TAU;
		return new Vector(Math.cos(theta), Math.sin(theta));
	}
	
	// return a random vector of a certain length
	this.random = function(length)
	{
		return this.randomUnit().mult(length);
	}
}