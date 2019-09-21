const variant = 
{
	//fast but unreliable
	spaz : function(x, y, playerx, playery, difficulty)
	{
		let velocity = difficulty;
		let threshold = (difficulty * .1) >= 1 ? .7 : (difficulty * .10); 
		let xsign = Math.random() > threshold ? -1 : 1;
		let ysign = Math.random() > threshold ? -1 : 1;
		let xmove = xsign * (x < playerx ? velocity : -1 * velocity);
		let ymove = ysign * (y < playery ? velocity : -1 * velocity);
		return [xmove, ymove];
	},
	//slow but steady
	charge : function(x, y, playerx, playery, difficulty)
	{
		let velocity = .5 * difficulty;
		let xmove =  (x < playerx ? velocity : -1 * velocity);
		let ymove =  (y < playery ? velocity : -1 * velocity);
		return [xmove, ymove];
	},

	//skilled
	dodge: function()
	{

		//harry does this
	}

}



class Enemy
{ 
	//difficulty affects frequency of movement, and movement speed, variant is type of movement 
	constructor(difficulty, color, size, positionx, positiony, variant)
	{
		this.difficulty = difficulty;
		this.color = color;
		this.size = size;
		this.variant = variant;
		this.x = Math.floor(Math.random() * 500);
		this.y = Math.floor(Math.random() * 500);
	}

	//return spaces it will be in 
	makeMove(playerx, playery)
	{
		let move = variant[this.variant](this.x, this.y, playerx, playery, this.difficulty);
		//return arguments to ctx.fillstyle
		//posx, posy, sizex, sizey
		return [this.x + move[0], this.y + move[1], this.size, this.size];
	}

	//set coordinates
	move(x, y)
	{
		this.x = x;
		this.y = y;
	}

}