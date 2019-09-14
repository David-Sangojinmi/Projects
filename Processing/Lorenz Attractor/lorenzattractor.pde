import peasy.*;

PeasyCam cam;
float rV = 0.001;

Axis axis = new Axis();
Point[] pt = new Point[100];

void setup() {
  size(800, 800, P3D);
  colorMode(HSB);
  cam = new PeasyCam(this, 700);
  cam.setResetOnDoubleClick(true);
  //cam.setYawRotationMode();   // like spinning a globe
  //cam.setPitchRotationMode(); // like a somersault
  //cam.setRollRotationMode();  // like a radio knob
  for (int i = 0; i < pt.length; i++) {
    pt[i] = new Point();
  }
}

void draw() {
  background(0);
  
  axis.showAxis();

  translate(0, 0, -80);
  for (int i = 0; i < pt.length; i++) {
    pt[i].update();
    pt[i].showPoint();
    pt[i].showTrail();
  }
  
  if ((keyPressed) && (key == 'p')) {
    rV = 0;
  } else {
    rV = 0.001;
  }
  //cam.rotateX(rV);
  //cam.rotateY(rV);
  //cam.rotateZ(rV);
}