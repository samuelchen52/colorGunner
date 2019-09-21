class Bullet {

    constructor(color, currentx, currenty,tx, ty){
        this.color = color;
        this.currentx = currentx;
        this.currenty = currenty;
        this.tx = tx; //x coord movement
        this.ty = ty; //y coord movement
        this.grace = true; //since bullet is originating from the center, there is a grace period where it doesnt count as touching player
        this.bounce = 0; // dies on 5th bounce
    }

    getColor(){
        return this.color;
    }

    makeMove(){
        return [this.currentx+this.tx, this.currenty+this.ty];
    }

    move(x,y){
        this.currentx = x;
        this.currenty = y;
    }
}