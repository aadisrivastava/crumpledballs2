class paperClass{
    constructor(x,y,radius) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false

        }
        this.body = Bodies.circle(x,y, radius, options);
        this.image=loadImage("paper.png");
       
        World.add(world, this.body);
      }
    
    display(){

     var paperSprite=this.body.position;
      push()
      translate(paperSprite.x,paperSprite.y);
      ellipseMode(RADIUS);
       
      strokeWeight(3);
      fill(255,0,255)
      ellipse(0,0,50,50);

      pop();




    }
}