class Dropup {
  float x = random(width);
  float y = random(600, 700);
  float z = random(0, 20);
  float h = map(z, 0, 20, 10, 20);
  float yspeed = map(z, 0, 20, 1, 20);
  
  void fall() {
    y = y - yspeed;
    //yspeed = yspeed + 0.2;
    
    if (y < 0) {
      y = random(600, 700);
      yspeed = map(z, 0, 20, 4, 10);
    }
  }
  
  void show() {
    noStroke();
    float opacity = map(z, 0, 20, 175, 255);
    fill(255, 74, 3, opacity);
    rect(x, y, 2, h);
  }
  
  void hide() {
    noStroke();
    noFill();
  } 
}
  