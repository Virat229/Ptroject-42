var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var star1,starImg,star;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
  starImg = loadImage("Star.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  spacecraft = createSprite(windowWidth/2 - 50,windowHeight/2 + 200);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.3;
  
  iss = createSprite(windowWidth/2,windowHeight/2 - 100);
  iss.addImage(issimg);
  iss.scale = 0.4;

  

  //star.scale = 0.25


}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  
    star1 = new Star;
    console.log(spacecraft.y)
    
   
    
  
      
    
  if(!hasDocked){

    // spacecraft = spacecraftx + random(-1,1);
    // spacecraft.x = spacecraft.x + Random(-1,1);
    // spacecraft.x = spacecraft.x + randomNumbers(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
    spacecraft.addImage(scimg1)
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3)
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
      spacecraft.y = spacecraft.y + 2;
  }
}

  // if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);
  // }

  // if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);
  // }

  // if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking UnSuccessful!", 200, 300);
  // }

   if(spacecraft.y <= 350 && spacecraft.x <= 590){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!",windowWidth/2,2*windowHeight/3);
   }

  drawSprites();
}

