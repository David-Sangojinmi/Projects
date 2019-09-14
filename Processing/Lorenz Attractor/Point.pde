class Point {
  float x = random(0.011, 0.012);
  float y = 0;
  float z = 0;
  float a = 10;
  float b = 28;
  float c = 8.0/3.0;
  ArrayList<PVector> points = new ArrayList<PVector>();
  
  void update() {
    float dt = 0.01;
    float dx = (a * (y - x)) * dt;
    float dy = (x * (b - z) - y) * dt;
    float dz = (x * y - c * z) * dt;
    x = x + dx;
    y = y + dy;
    z = z + dz;
  }
  
  void showPoint() {
    strokeWeight(5);
    stroke(255);
    point(x*7, y*7, z*7);
  }
  
  void showTrail() {
    points.add(new PVector(x, y, z));
    float hu = 150;
    float br = 150;
    float sW = 0.01;
    stroke(255);
    noFill();
    beginShape();
    for (PVector v : points) {
      strokeWeight(sW);
      stroke(hu, 255, 255);
      vertex(v.x*7, v.y*7, v.z*7);
      hu += 8;
      br += 2;
      sW += 0.0598;
      if (hu > 255) {
        hu = 0;
      }
      if (br > 255) {
        br = 150;
      }
      if (sW > 3) {
        sW = 0.01;
      }
    }
    endShape();
    if (points.size() > 50) {
      points.remove(0);
    }
  }
}