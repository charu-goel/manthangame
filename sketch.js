var bg,bg2,form,system,code,security;
var score = 0;
var key;
var gs=0

function preload() {
 
  
  bg = loadImage("bheem.png");
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1600,1000);
  security = new Security();
  system = new System();
  
  key=createSprite(950,600,50,50);
  key.visible=false;
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("red");
  text("Score: " + score, 450, 50);
  
  
  
  if(score===3) {
    //clear()
    background(bg2);
    key.visible=true;
    fill("black")
    textSize(35);
    text("TREASURE LADOO UNLOCKED",750, 550);

    
    
       if(mousePressedOver(key)){
          playlevel2()
        }
  }

  drawSprites()
}


function playlevel2(){
  clear()
  text("new level",800,400)

}