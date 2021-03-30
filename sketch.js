var bg;
var tom;
var jerry;
var jerryImg1,jerryImg2,jerryImg3;
var tomImg1,tomImg2,tomImg3;

function preload() {
    //load the images here
   jerryImg1 = loadAnimation("images/mouse1.png");
   jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImg3 = loadAnimation("images/mouse4.png");
   tomImg1 = loadAnimation("images/cat1.png");
   tomImg2 = loadAnimation('images/cat2.png','images/cat3.png');
   tomImg3 = loadAnimation('images/cat4.png');
   bg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(770,710,20,20);
    tom.addAnimation("tomWalk",tomImg1);
    tom.scale = 0.2

    jerry = createSprite(100,700,20,20);
    jerry.addAnimation("jerryWalk",jerryImg1);
    jerry.scale = 0.2


}   

function draw() {
    background(bg);
    console.log("differance"+tom.x - jerry.x);
    console.log("second"+tom.width/2 + jerry.width/2);
    if(tom.x - jerry.x < (jerry.width + tom.width)/2){
      tom.addAnimation('tomHappy',tomImg3);
      tom.changeAnimation('tomHappy');

      jerry.addAnimation('jerryHappy',jerryImg3);
      jerry.changeAnimation('jerryHappy');
    }

    if(keyDown('LEFT_ARROW')){
    tom.velocityX = -3;
    tom.addAnimation('tomGetsUp',tomImg2);
    tom.changeAnimation('tomGetsUp');
   
    jerry.addAnimation('jerryTeases',jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation('jerryTeases');
}

    if(keyWentUp('LEFT_ARROW')){
        tom.velocityX = 0;
        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
