class Sprite extends QueasyCam {
  PVector dimensions;
  PVector velocity;
  PVector gravity;
  boolean onGround;
  
  Sprite(PApplet applet){
    super(applet);
    speed = 0.2;
    dimensions = new PVector(1, 3, 1);
    velocity = new PVector(0, 0, 0);
    gravity = new PVector(0, 0.04, 0);
    onGround = false;
  }
  
  void update() {
    velocity.add(gravity);
    position.add(velocity);
    if (onGround && keyPressed && key==' ') {
      onGround = false;
      velocity.y = -0.5;
      position.y -= 0.1;
    }
  }
}