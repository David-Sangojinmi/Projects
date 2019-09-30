class Terrain {
  Block[][] blocks;
  Block start;
  Block end;
  
  Terrain(int size){
    blocks = new Block[size][size];
    
    for (int i=0; i<size; i++){
      for (int j=0; j<size; j++){
        float x = i*5;
        float y = 0;
        float z = j*5;
        blocks[i][j] = new Block(x, y, z, 5, 5, 5);
      }
    }
    
    int row = int(random(1, size-1));
    int col = int(random(1, size-1));
    start = blocks[row][col];
  }
  
  void update(){
    for (int i=0; i<blocks.length; i++){
      for (int j=0; j<blocks[i].length; j++){
        blocks[i][j].update();
      }
    }
  }
  
  void display(){
    for (int i=0; i<blocks.length; i++){
      for (int j=0; j<blocks[i].length; j++){
        blocks[i][j].display();
      }
    }
  }
  
  void setSpriteAtStart(Sprite sprite){
    sprite.position = PVector.add(start.position, new PVector(0, -20, 0));
  }
}