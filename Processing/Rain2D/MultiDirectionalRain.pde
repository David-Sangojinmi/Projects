Dropdown[] dDown = new Dropdown[500];
Dropup[] dUp = new Dropup[500];
Dropleft[] dLeft = new Dropleft[500];
Dropright[] dRight = new Dropright[500];

boolean Left;
boolean Right;
boolean Up;

void setup() {
  size(800, 600);
  
  for (int i = 0; i < dUp.length; i++) {
    dUp[i] = new Dropup();
    dDown[i] = new Dropdown();
    dLeft[i] = new Dropleft();
    dRight[i] = new Dropright();
  }
  
}

void draw() {
  background(0);
  
  for (int i = 0; i < dDown.length; i++) {
    dDown[i].show();
    dDown[i].fall();
  }
  
  if (Up == true) {
    loop();
        for (int i = 0; i < dUp.length; i++) {
        dUp[i].show();
        dUp[i].fall();
      }
  } else if (Up == false) {
    for (int i = 0; i < dUp.length; i++) {
        dUp[i].hide();
      }
  }
  
  if (Right == true) {
    loop();
        for (int i = 0; i < dRight.length; i++) {
        dRight[i].show();
        dRight[i].fall();
      }
  } else if (Right == false) {
    for (int i = 0; i < dRight.length; i++) {
        dRight[i].hide();
      }
  }
  
  if (Left == true) {
    loop();
        for (int i = 0; i < dLeft.length; i++) {
        dLeft[i].show();
        dLeft[i].fall();
      }
  } else if (Left == false) {
    for (int i = 0; i < dLeft.length; i++) {
        dLeft[i].hide();
      }
  }
  
  if (keyPressed == true) {
    if (key == 'w') {
      Up = true;
    } else if (key == 'e') {
      Up = false;
    }
  
    if (key == 'a') {
      Left = true;
    } else if (key == 's') {
      Left = false;
    }
    
    if (key == 'dUp') {
      Right = true;
    } else if (key == 'f') {
      Right = false;
    }
  }
}