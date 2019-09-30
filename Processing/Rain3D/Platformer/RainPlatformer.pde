import queasycam.*;

QueasyCam cam;
Terrain terrain;
Sprite sprite;
Droplet[] drop = new Droplet[500];

void setup() {
  size(800, 600, P3D);
  strokeWeight(2);
  
  cam = new QueasyCam(this);
  cam.speed = 1;
  cam.sensitivity = 50;
  
  terrain = new Terrain(50);
  sprite = new Sprite(this);
  terrain.setSpriteAtStart(sprite);
  
  for (int i = 0; i < drop.length; i++) {
    drop[i] = new Droplet();
  } 
}

void draw() {
  background(0);
  
  terrain.update();
  terrain.display();
  sprite.update();
  
  for (int i = 0; i < drop.length; i++) {
    drop[i].show();
    if ((keyPressed) && (key == 'p')) {
      drop[i].matrix = true;
    } else {
      drop[i].matrix = false;
    }
    drop[i].rain();
  }
}