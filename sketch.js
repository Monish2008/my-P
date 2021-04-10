var people
var peoplegroup,gamestate=0
var playsound, plays
var nextslide,ns
var owlrules,or


function preload(){


  people=loadImage("im.jpg") ;
  plays=loadSound("sound.mp3");
  ns=loadImage("Check.jpeg") ;
  or=loadImage("rules.jpeg") ;
  
  
  
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);
  
  peoplegroup=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  peoplegroup.visible=false
  peoplegroup.addImage(people)
  peoplegroup.scale=3
  nextslide=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  //nextslide.visible=false
  nextslide.addImage(ns)
  owlrules=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  owlrules.addImage(or)
  owlrules.visible=false

  plays.play()
}



function draw() {
  background(255,255,255);  

  if(gamestate==0){
    if(mousePressedOver(nextslide)){
      gamestate=1
    
    }
    peoplegroup.visible=true
  }
  if(gamestate==1){
    nextslide.destroy()
    peoplegroup.destroy()
    owlrules.visible= true;
    if(mousePressedOver(owlrules)){
      owlrules.destroy()
    }
  }

  drawSprites();
}