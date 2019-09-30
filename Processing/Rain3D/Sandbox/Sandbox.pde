class Sandbox {
  boolean axis = false;
  float bxWgt = 3;
  float axWgt = 3;
  float trWgt = 0.5;
  
  void show() {
    //Drawing skeletal frame
    strokeWeight(bxWgt);
    stroke(255, 255, 255);
    noFill();
    translate(xCent, yCent, zCent);
    box(300, 300, 300);
    
    //Drawing the axis
    strokeWeight(axWgt);
    stroke(255, 0, 0);
    line(-150, 0, 0, 150, 0, 0); // x
    strokeWeight(axWgt);
    stroke(0, 255, 0);
    line(0, -150, 0, 0, 150, 0); // y
    strokeWeight(axWgt);
    stroke(0, 0, 255);
    line(0, 0, -150, 0, 0, 150); // z 
    
    //Drawing the terrain
    strokeWeight(trWgt);
    stroke(84, 26, 4);
    fill(94, 36, 3);
    translate(0, 125, 0);
    box(300, 50, 300);
  }
  
  void showAxis() {
    if (axis == true ) {
      axWgt = 3;
    } else {
      axWgt = 0;
    }
  }
}