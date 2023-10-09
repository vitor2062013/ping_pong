let raqueteJogador;
let raqueteComputador;
let bola;
let bola_img;
let raqueteComputadorimg;
let raqueteJogadorimg;
let rede

function preload() {
  bola_img=loadImage("bola.png");
  raqueteComputadorimg=loadImage("raqueteCptd.png");
  raqueteJogadorimg=loadImage("raquete.png");
}

function setup() {
  createCanvas(1366, 619);


  raqueteJogador=createSprite(1330, 300,20,100);
  raqueteJogador.addImage(raqueteJogadorimg);
  raqueteJogador.scale=0.09;

  raqueteComputador=createSprite(30,300,20,100);
  raqueteComputador.addImage(raqueteComputadorimg);
  raqueteComputador.scale=0.09;

  raqueteJogador.debug=false

  raqueteComputador.debug=false

  raqueteJogador.setCollider("rectangle",0,0,150,150)

  raqueteComputador.setCollider("rectangle",0,0,150,150)

  rede=createSprite(665,309,30,619);
  rede.shapeColor="#8B4513";

  bola=createSprite(665,300,35,35);
  bola.addImage(bola_img);
  bola.scale=0.06;
  bola.velocityX=5;
  bola.velocityY=5;

  bola.debug=false

  edges=createEdgeSprites();
  
}

function draw() {
   background("#3CB371");

   //bola.bounceOff(topedge);

   bola.bounceOff(edges.bottomEdge);

   bola.bounceOff(raqueteComputador);

   bola.bounceOff(raqueteJogador);

   if(keyDown("up")){
    raqueteJogador.y -=20;
   }
 if(keyDown("down")){
    raqueteJogador.y +=20;
   }

 if(keyDown("w")){
    raqueteComputador.y -=20;
   }
 if(keyDown("s")){
    raqueteComputador.y +=20;
   }

  drawSprites();
}




