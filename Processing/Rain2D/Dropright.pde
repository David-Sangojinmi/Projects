class Dropright {
  float x = random(1300, 850);
  float y = random(height);
  float z = random(0, 20);
  float w = map(z, 0, 20, 10, 20);
  float xspeed = map(z, 0, 20, 1, 20);
  
  void fall() {
    x = x - xspeed;
    //yspeed = yspeed + 0.2;
    
    if (x < 0) {
      x = random(1300, 850);
      xspeed = map(z, 0, 20, 1, 20);
    }
  }
  
  void show() {
    noStroke();
    float opacity = map(z, 0, 20, 175, 255);
    fill(127, 127, 127, opacity);
    rect(x, y, w, 2);
  }
  
  void hide() {
    noStroke();
    noFill();
  }
}