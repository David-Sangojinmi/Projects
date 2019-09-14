class Axis {
  void showAxis() {
    strokeWeight(2);
    stroke(0, 255, 255);
    line(-280, 0, 0, 280, 0, 0);
    text("x-axis", 283, 3, 0);
    strokeWeight(2);
    stroke(85, 255, 255);
    line(0, -280, 0, 0, 280, 0);
    text("y-axis", -17, -285, 0);
    strokeWeight(2);
    stroke(170, 255, 255);
    line(0, 0, -280, 0, 0, 280);
    text("z-axis", -17, 0, 283);
  }
}