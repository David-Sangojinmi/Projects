import peasy.*;
PeasyCam cam;

Sandbox sandbox = new Sandbox();
Droplet[] drop = new Droplet[500];

float rotateY = 0.005;
float rotateX = 0.1;
float xCent = 0;
float yCent = 0;
float zCent = 0;
float a = 1;

void setup() {
  size(800, 600, P3D);
  colorMode(RGB);
  rectMode(CENTER);
  
  cam = new PeasyCam(this, 500);
  cam.setResetOnDoubleClick(true);
  cam.setYawRotationMode();
  
  for (int i = 0; i < drop.length; i++) {
    drop[i] = new Droplet();
  } 
}

void draw() {
  background(0);
  
  if ((keyPressed) && (key == 'a')) {
    sandbox.show();
    sandbox.showAxis();
  } else {
    sandbox.show();
    sandbox.hideAxis();
  }
  
  translate(0, -125, 0);
  for (int i = 0; i < drop.length; i++) {
    drop[i].show();
  }
  if ((keyPressed) && (key == 'p')) {
    for (int i = 0; i < drop.length; i++) {
      drop[i].matrix();
    }
  } else {
    for (int i = 0; i < drop.length; i++) {
      drop[i].rain();
    }
  }
  
  cam.rotateY(rotateY);
}