class slingshot{
constructor(bodyA,pointB){
var options = {
 bodyA:bodyA,
 pointB:pointB,
 stiffness:0.0004,
 length:10
}
this.pointB=pointB
this.sling=Constraint.create(options)
World.add(world,this.sling)
}

fly(){
    this.sling.bodyA=null  

}

 display() {
     if(this.sling.bodyA){
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
     }
}



}
