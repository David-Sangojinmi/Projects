import peasy.*;

float x = 0.01;
float y = 0;
float z = 0;
float a = 10;
float b = 28;
float c = 8.0/3.0;
ArrayList<PVector> points = new ArrayList<PVector>();
float rY = 0.001;

PeasyCam cam;

void setup() {
  size(600, 600, P3D);
  colorMode(HSB);
  cam = new PeasyCam(this, 500);
  //cam.setYawRotationMode();
  cam.setResetOnDoubleClick(true);
}

void draw() {
  background(0);
  float dt = 0.01;
  float dx = (a * (y - x)) * dt;
  float dy = (x * (b - z) - y) * dt;
  float dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  
  points.add(new PVector(x, y, z));
  
  translate(0, 0, -80);
  scale(5);
  strokeWeight(0.3);
  stroke(255);
  noFill();
  
  float hu = 0;
  
  beginShape();
  for (PVector v : points) {
    stroke(hu, 255, 255);
    vertex(v.x, v.y, v.z);
    hu += 0.1;
    if (hu > 255) {
      hu = 0;
    }
  }
  endShape();
  
  if ((keyPressed) && (key == 'p')) {
    rY = 0;
  } else {
    rY = 0.001;
  }
  
  cam.rotateY(rY);
}