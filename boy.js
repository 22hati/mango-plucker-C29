class boy{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        World.remove(world, this.body);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}