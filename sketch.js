var navio, navio_andando, mar, mar_parado;

function preload(){
  
  mar_parado = loadAnimation ("sea.png");
  navio_andando = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(800,340);

  mar = createSprite (400,170,200,155);
  mar.addAnimation ("parado", mar_parado);
  mar.scale = 0.2;

  navio = createSprite (350,250,50,50);
  navio.addAnimation ("running", navio_andando);
  navio.scale = 0.2;
  navio.velocityX = 2;
  
}

function draw() {
  background("lavender");

  if (navio.x > 795){
    navio.x = 5;
  }
  
  drawSprites();
}
