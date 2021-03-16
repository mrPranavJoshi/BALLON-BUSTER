var background3
var background2
var redbaloon
var redbaloon2
var bballon
var bballon2 
var pballon 
var pballon2 
var gballon
var gballon2
var bow
var bow2
var arrow
var arrow2
var temp_arrow
var q
var score=0

function preload(){
 //load your images here 
  background3=loadImage("background0.png")
 redbaloon=loadImage("red_balloon0.png")
  bballon=loadImage("blue_balloon0.png")
  pballon=loadImage("pink_balloon0.png")
  gballon=loadImage("green_balloon0.png")
  bow=loadImage("bow0.png")
  arrow=loadImage("arrow0.png")
  
}

function setup() {
  createCanvas(600, 600);
  background2=createSprite(0,0,600,600)
  background2.addImage("p",background3)
  background2.scale=3
  
 
 
  
  
  
   
 
  
  bow2=createSprite(470,200,20,20)
  bow2.addImage(bow)
 
 
    
  
 
  
  
  //add code here
  // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow
    
    playsound("sound://category_slide/whoosh_4.mp3")
    arrow.y=bow.y;
    
  }

} 

function draw() {
  background("")
  
  //moving ground
  background2.velocityX=-3
  
  if(background2.x<0){
    background2.x=background2.width/2
  }
  
    //moving bow
  bow2.y=World.mouseY
    
  if(keyDown("space")){
    createArrow()
  }
  q=Math.round(random(1,4))
  if(frameCount%60===0){
     switch(q){
    case 1:createRedballon3()
      break
      case 2:createBballon3()
      break
      case 3:createPballon3()
      break
      case 4: createGballon3()
      break
  }
  }
 
 
  
  

 
  drawSprites()
    text("score" + score,540,50)
  
}
function createArrow(){
    arrow2=createSprite(360,100,5,10)
    arrow2.addImage(arrow)
    arrow2.velocityX=-6
    arrow2.scale=0.3
  arrow2.y=bow2.y
    return arrow2
  }

 
 function createRedballon3(){
   
     redbaloon2=createSprite(0,50,20,20)
      redbaloon2.y=Math.round(random(10,350)) 
  redbaloon2.addImage(redbaloon)
  redbaloon2.scale=0.09  
   redbaloon2.velocityX=5
   redbaloon2.lifetime=120
  
   

  }
function createBballon3(){
 
    bballon2=createSprite(0,50,20,20)
     bballon2.y=Math.round(random(10,370))  
  bballon2.addImage(bballon)
  bballon2.scale=0.09
  bballon2.velocityX=5
  bballon2.lifetime=120
 
  
}
function createPballon3(){

       pballon2=createSprite(0,100,20,20)
    pballon2.y=Math.round(random(10,360))
  pballon2.addImage(pballon)
    pballon2.velocityX=5
  pballon2.lifetime=120
    

  
  
}
function createGballon3(){
    
   
     gballon2=createSprite(0,200,10,10)
       gballon2.y=Math.round(random(10,390))
  gballon2.addImage(gballon)
  gballon2.scale=0.09
      gballon2.velocityX=5
  gballon2.lifetime=120
     
    
  
}













 
