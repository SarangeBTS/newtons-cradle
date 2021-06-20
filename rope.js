class ROPE{
    constructor(bodyA,bodyB,offsetX,offsetY){

          this.offsetX = offsetX;
          this.offsety = offsetY;

        var options = {
            bodyA:bodyA, 
            bodyB:bodyB,
            length:100,
            pointB: {x:this.offsetX , y:this.offsetY}

            
        }
        this.rope = Constraint.create(options);
        
        World.add(world,this.rope); 
    }

    display(){

     var pointA = this.rope.bodyA.position;
     var pointB = this.rope.bodyB.position;
     var a=pointA.x+this.offsetX
     var b=pointA.y+this.offsetY
     strokeWeight(4);
     line( a,b,pointB.x,pointB.y);

    }
}