class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 2
        }
        this.chain1 = loadImage('sprites/sling1.png');
        this.chain2 = loadImage('sprites/sling2.png');
        this.chain3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        image(this.chain1,200,20);
        image(this.chain2,170,20);
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
}
}