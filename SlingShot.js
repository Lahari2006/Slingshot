class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,  // anything can replace a
            pointB : pointB,  // anything can replace b
            stiffness : 0.04,
            length : 10
        }
        this.pointB = pointB ;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        
    }

    fly(){
    this.sling.bodyA = null;
    }
      
    display(){
          if(this.sling.bodyA){
          var pointA = this.sling.bodyA.position; // to type less
          var pointB = this.pointB; // to type less
          strokeWeight(3);   //thickness of line
          line(pointA.x, pointA.y, pointB.x, pointB.y); //to draw a line to connect 2 bodies
          }
      }

}

//bodyA = bird
//pointB = point where the rope is attached 