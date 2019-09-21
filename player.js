class Player{

    constructor(color, sizex, sizey, speed){
        this.color = color;
        this.sizex = sizex;
        this.sizey = sizey;
        this.speed = speed;
    }

    getColor(){
        return this.color;
    }
    getSize(){
        return {sx:this.sizex, sy:this.sizey};
    }
    setColor(color){
        this.color = color;
    }

    shrink(){

    }

    shoot(px, py){
        
    }

    getSpeed(){
        return this.speed;
    }
}