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
        this.sizex -= 1;
        this.sizey -= 1;
        if (this.sizex <7){
            this.sizex = 7;
            this.sizey =7;
        }
        this.speed = 700 / this.sizex;
        if(this.speed >20)
            this.speed = 20;
        
    }

    getSpeed(){
        return this.speed;
    }
}