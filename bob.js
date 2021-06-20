class BOB {
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        
        
        this.body = Bodies.circle(x,y,30,options);
        this.r = 30;
        World.add(world,this.body);


    }

    display(){

       var bobpos = this.body.position;

       push()
       translate(bobpos.x,bobpos.y);
       ellipseMode(RADIUS);
       strokeWeight(3);
       fill(255,0,255);
       ellipse(0,0,this.r,this.r);
       pop()

    }


    
}