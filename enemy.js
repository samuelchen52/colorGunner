const variant = 
{




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
		//this.x = positionx;
		//this.y = positiony;

		this.x = Math.floor(Math.random() * 500);
		this.y = Math.floor(Math.random() * 500);
	}

	//return spaces it will be in 
	makeMove(playerx, playery)
	{
		let xsign = Math.random() < .5 ? -1 : 1;
		let ysign = Math.random() < .5 ? -1 : 1;
		let xmove = xsign * Math.floor((Math.random() + 1) * this.difficulty);
		let ymove = ysign * Math.floor((Math.random() + 1) * this.difficulty);
		//return arguments to ctx.fillstyle
		//posx, posy, sizex, sizey
		return [this.x + xmove, this.y + ymove, this.size, this.size];
	}

	//set coordinates
	move(x, y)
	{
		this.x = x;
		this.y = y;
	}

}