class SlingShot{

    constructor(body1, body2, offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
    
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

    this.slingshot= Constraint.create(options);
    World.add(world,this.slingshot);
    }
    
    display(){
var ptAx= this.slingshot.bodyA.position.x;
var ptAy= this.slingshot.bodyA.position.y;
var ptBx= this.slingshot.bodyB.position.x + this.offsetX;
var ptBy= this.slingshot.bodyB.position.y + this.offsetY;

strokeWeight(4);

line(ptAx, ptAy, ptBx, ptBy);
}
    
}