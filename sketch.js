var egg,eggsImage
var startButton
var hide
var gameState="buildState"
var bBackground
var startButtonImage
var backgroundImage
function preload() {
  backgroundImage=loadImage("yeet.jpeg");
eggsImage=loadImage("egg.png")
bBackgroundImage=loadImage("bBackground.jpeg")
startButtonImage=loadImage("button.jpg")
}

function setup() {
createCanvas(displayWidth,displayHeight)

}

function draw() {
  if(gameState==="buildState"){
    background(bBackgroundImage)
    startButton=createSprite(300,300)
    startButton.addImage(startButtonImage)
    startButton.scale=0.1
    if(mousePressedOver(startButton)){
      

      gameState="destroy"
      startButton.visible=false


    }
   /* startButton.mousePressed(function(){
     
      gameState="destroy"
    })*/
  }
  else if(gameState==="destroy"){
background(backgroundImage)
egg=createSprite(displayWidth-200,440)
egg.addImage(eggsImage)
egg.scale=0.5
  }
drawSprites();

}