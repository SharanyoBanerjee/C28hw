class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 20
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            
            stroke('#301608');
            if(pointA.x<220){
            
             line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            
             strokeWeight(2);
            }
            else{
               
             line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
                
             strokeWeight(2);
            }
            
        }
    }
    
}