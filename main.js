let raqueteJogador;
let raqueteComputador;
let bola;
let bola_img;
let raqueteComputadorimg;
let raqueteJogadorimg;
let rede
let bordaCima
let bordaBaixo

function preload() {
  bola_img=loadImage("bola.png");
  raqueteComputadorimg=loadImage("raqueteCptd.png");
  raqueteJogadorimg=loadImage("raquete.png");
}

function setup() {
  createCanvas(1366, 619);

  bordaCima=createSprite(683,0,1366,10)
  bordaCima.visible=false;

  bordaBaixo=createSprite(683,619,1366,10)
  bordaBaixo.visible=false
  
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

  console.log("test")

  bola=createSprite(665,300,35,35);
  bola.addImage(bola_img);
  bola.scale=0.06;
  bola.velocityX=12;
  bola.velocityY=5;

  bola.debug=false

  edges=createEdgeSprites();
  
}

function draw() {
   background("#3CB371");

   bola.bounceOff(raqueteComputador);

   bola.bounceOff(raqueteJogador);

   bola.bounceOff(bordaCima)

   bola.bounceOff(bordaBaixo)

   if(keyDown("up")){
    raqueteJogador.y -=20;
   }
 if(keyDown("down")){
    raqueteJogador.y +=20;
   }

//  if(keyDown("w")){
//     raqueteComputador.y -=20;
//    }
//  if(keyDown("s")){
//     raqueteComputador.y +=20;
//    }
raqueteComputador.y=bola.y;

// if (raqueteJogador.y<0) {
//   raqueteJogador=0
// }

  drawSprites();
}





