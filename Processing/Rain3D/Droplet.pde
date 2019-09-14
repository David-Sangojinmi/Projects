class Droplet {
  float x = random(-148, 148);
  float y = random(-200, -160);
  float z = random(-148, 148);
  float dropLength = random(4, 13);
  float dropSpeed = random(3, 7);  
  boolean matrix = false;
  
  void show() {
    strokeWeight(random(1, 4));
    stroke(0, 170, 200);
    line(x, y, z, x, y + dropLength, z);
  }
  
  void rain() {
    if (matrix == true) {
      y += 0;
      rotateY = 0.01;
    } else {
      y += dropSpeed;
    }
    if (y >= 125) {
      x = random(-148, 148);
      y = -160;
      z = random(-148, 148);
      dropLength = random(4, 13);
      dropSpeed = random(3, 7);
    }
  }
}