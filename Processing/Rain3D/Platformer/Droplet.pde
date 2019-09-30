class Droplet {
  float drop_x = random(0, 250);
  float drop_y = random(-200, -160);
  float drop_z = random(0, 250);
  float dropLength = random(0.9, 3);
  float dropSpeed = random(3, 7);  
  boolean matrix = false;
  
  void show() {
    stroke(0, 170, 200);
    line(drop_x, drop_y, drop_z, drop_x, drop_y + dropLength, drop_z);
  }
  
  void rain() {
    if (matrix == true) {
      drop_y += 0;
    } else {
      drop_y += dropSpeed;
    }
    if (drop_y >= 5) {
      drop_x = random(0, 250);
      drop_y = -160;
      drop_z = random(0, 250);
      dropLength = random(0.9, 3);
      dropSpeed = random(3, 7);
    }
  }
}