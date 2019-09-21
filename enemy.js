const directions = [[-1, 0], [-1, -1], [0, 1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]]


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
	dodge: function(x, y, playerx, playery, difficulty, bulletArr, size)
	{
		let velocity = difficulty;
		let xmove = x < playerx ? velocity : -1 * velocity;
		let ymove = y < playery ? velocity : -1 * velocity;
		let homein = true;

		for (let i = 0; i < bulletArr.length; i ++)
		{
			let bullet = bulletArr[i];
			if (Math.max(bullet.x + bullet.tx, x + xmove) <= Math.min(bullet.x + bullet.tx + 7, x + xmove + size) 
	        &&  Math.max(bullet.y + bullet.ty, y + ymove) <= Math.min(bullet.y + bullet.ty + 7, y + ymove + size))
			{
				homein = false;
			}
		}
		if (homein)
		{
			return [xmove * .1, ymove * .1];
		}


		for (let i = 0; i < 8; i ++)
		{
			xmove = directions[i][0] * velocity;
			ymove = directions[i][1] * velocity;
			dodge = true;

			for (let p = 0; p < bulletArr.length; p ++)
			{
				dodge = true;
				let bullet = bulletArr[p];
				if (Math.max(bullet.x + bullet.tx, x + xmove) <= Math.min(bullet.x + bullet.tx + 7, x + xmove + size) 
	            && Math.max(bullet.y + bullet.ty, y + ymove) <= Math.min(bullet.y + bullet.ty + 7, y + ymove + size))
				{
					dodge = false;
					break;
				}
			}
			if (dodge)
			{
				return [xmove, ymove];
			}
		}
			return [xmove, ymove];
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
		this.dead = false;
	}

	//return spaces it will be in 
	makeMove(playerx, playery)
	{
		let move = variant[this.variant](this.x, this.y, playerx, playery, this.difficulty, bulletArr, this.size);
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