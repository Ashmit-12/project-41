
  class Drop{
    constructor(x,y,r){
        var options ={
            restituition:0.1
            
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        var angle = this.body.angle;
  
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    update(){
      if(this.body.position.y>400){
         Matter.Body.setPosition(this.body,{x: random(0,400),
         y: random(-10,0)
         });
       }
      }
  };

  