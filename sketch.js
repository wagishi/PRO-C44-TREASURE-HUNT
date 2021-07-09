var bg,bg2,form,system,code,security;
var score=0;
var button1,button3,button2;
var check , code;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();;

  // Add code to display score in the middle of the screen
  textSize(20);
  fill("White");
  text("Score : " + score, 450, 50);

  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg2);
    fill ("black");
    textSize(40);
    text("Treasure Unlocked !!",250,200);
  }

  drawSprites()
}