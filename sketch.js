var w4,windowsImg;
var bk1Image;
var s1,s2,s3,s4, swImage;
var g1,g2,g3,g1Image,g2Image,g3Image;
var civ1,civ2,civ1Image,civ2Image

function preload(){
// windowsImg = loadImage("Images/4Windows.png");
 bk1Image = loadImage("Images/RedBrickWall.webp");
 swImage = loadImage("Images/SingularWindow.png")
 g1Image = loadImage("Images/Pistol.png")
 civ1Image = loadImage("Images/Civ1.png")
 civ2Image = loadImage("Images/Civ2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
// w4= createSprite(width/2,height/2)
//w4.addImage(windowsImg)
// w4.scale = 1.7;

g1 = createSprite(width/2, height-160)
g1.addImage(g1Image)
g1.scale = 1;

s1 = createSprite(190,height/2)
s1.addImage(swImage)
s1.scale = 0.75;
s1.depth = g1.depth

s2 = createSprite(width/2-200,height/2)
s2.addImage(swImage)
s2.scale = 0.75;
s2.depth = g1.depth

s3 = createSprite(width/2+185,height/2)
s3.addImage(swImage)
s3.scale = 0.75;
s3.depth = g1.depth

s4 = createSprite(width-210,height/2)
s4.addImage(swImage)
s4.scale = 0.75;
s4.depth = g1.depth

civ1 = createSprite(190,height/2+12)
civ1.addImage(civ1Image)
civ1.scale = 0.35;
civ1.depth = g1.depth

g1.depth = g1.depth+1

}

function draw() {
  
 background(180);
 image (bk1Image,0,0,width,height)
  
 g1.x=mouseX

  drawSprites();
}
