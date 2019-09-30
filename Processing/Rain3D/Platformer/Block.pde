class Block {
  PVector position;
  PVector dimensions;
  color fillColor;
  boolean visited;
  
  Block(float x, float y, float z, float w, float h, float d){
    position = new PVector(x, y, z);
    dimensions = new PVector(w, h, d);
    fillColor = color(200);
    visited = false;
  }
  
  void update(){
    float playerLeft = sprite.position.x - sprite.dimensions.x/2;
    float playerRight = sprite.position.x + sprite.dimensions.x/2;
    float playerTop = sprite.position.y - sprite.dimensions.y/2;
    float playerBottom = sprite.position.y + sprite.dimensions.y/2;
    float playerFront = sprite.position.z - sprite.dimensions.z/2;
    float playerBack = sprite.position.z + sprite.dimensions.z/2;
    
    float boxLeft = position.x - dimensions.x/2;
    float boxRight = position.x + dimensions.x/2;
    float boxTop = position.y - dimensions.y/2;
    float boxBottom = position.y + dimensions.y/2;
    float boxFront = position.z - dimensions.z/2;
    float boxBack = position.z + dimensions.z/2;
    
    float boxLeftOverlap = playerRight - boxLeft;
    float boxRightOverlap = boxRight - playerLeft;
    float boxTopOverlap = playerBottom - boxTop;
    float boxBottomOverlap = boxBottom - playerTop;
    float boxFrontOverlap = playerBack - boxFront;
    float boxBackOverlap = boxBack - playerFront;
    
    if (((playerLeft > boxLeft && playerLeft < boxRight || (playerRight > boxLeft && playerRight < boxRight)) && ((playerTop > boxTop && playerTop < boxBottom) || (playerBottom > boxTop && playerBottom < boxBottom)) && ((playerFront > boxFront && playerFront < boxBack) || (playerBack > boxFront && playerBack < boxBack)))){
      float xOverlap = max(min(boxLeftOverlap, boxRightOverlap), 0);
      float yOverlap = max(min(boxTopOverlap, boxBottomOverlap), 0);
      float zOverlap = max(min(boxFrontOverlap, boxBackOverlap), 0);
      
      if (xOverlap < yOverlap && xOverlap < zOverlap){
        if (boxLeftOverlap < boxRightOverlap){
          sprite.position.x = boxLeft - sprite.dimensions.x/2;
        } else {
          sprite.position.x = boxRight + sprite.dimensions.x/2;
        }
      }
      
      else if (yOverlap < xOverlap && yOverlap < zOverlap){
        if (boxTopOverlap < boxBottomOverlap){
          sprite.position.y = boxTop - sprite.dimensions.y/2;
          sprite.velocity.y = 0;
          sprite.onGround = true;
        } else {
          sprite.position.y = boxBottom + sprite.dimensions.y/2;
        }
      }
      
      else if (zOverlap < xOverlap && zOverlap < yOverlap){
        if (boxFrontOverlap < boxBackOverlap){
          sprite.position.z = boxFront - sprite.dimensions.x/2;
        } else {
          sprite.position.z = boxBack + sprite.dimensions.x/2;
        }
      }
    }
  }
  
  void display(){
    pushMatrix();
    translate(position.x, position.y, position.z);
    fill(fillColor, 200);
    stroke(30);
    box(dimensions.x, dimensions.y, dimensions.z);
    popMatrix();
  }
}