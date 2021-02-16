var background;
var backgroundImg;

var cat;
var catImg1;
var catImg2;
var catImg3;

var mouse;
var mouseImg1;
var mouseImg2;
var mouseImg3;


function preload() {
    backgroundImg = loadImage("garden.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    catImg3 = loadImage("cat4.png")

    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseImg2 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    background = createSprite(500, 400, 1000, 800);
    background.addImage("garden", backgroundImg);

    cat = createSprite(800, 600);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addImage("")
  }


}
