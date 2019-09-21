class Bullet {

    constructor(color, currentx, currenty,tx, ty){
        this.color = color;
        this.x = currentx;
        this.y = currenty;
        this.tx = tx; //x coord movement
        this.ty = ty; //y coord movement
        this.grace = 60; //since bullet is originating from the center, there is a grace period where it doesnt count as touching player
        this.bounce = 0; // dies on 5th bounce
    }

    getColor(){
        return this.color;
    }

    makeMove(){
        return [this.x+this.tx, this.y+this.ty];
    }

    move(x,y){
        this.x = x;
        this.y = y;
    }
}