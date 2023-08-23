
//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let raio = dBolinha / 2;

//váriaveis velocidade da bolinha
let xVelocidade = 5;
let yVelocidade = 5;

//variáveis da minha raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150;

//variáveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variáveis de ambas raquetes
let larguraRaquete = 10;
let alturaRaquete = 80;

//colisão da raquete com bolinha
let colidiu = false;  

//variáveis do placar
let meusPontos = 0;
let pontosOponente = 0;
let yPontos = 25;
let xMeusPontos = 280;
let xPontosOponente = 320;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBorda(); 
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  colisaoRaqueteEBolinha(xMinhaRaquete, yMinhaRaquete);
  colisaoRaqueteEBolinha(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  mostraPlacar(meusPontos, xMeusPontos);
  mostraPlacar(pontosOponente, xPontosOponente);
  marcaPontos();
}


function mostraBolinha(){
  circle(xBolinha,yBolinha,dBolinha)
}

function movimentoBolinha(){
  xBolinha += xVelocidade
  yBolinha += yVelocidade
}

function colisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    xVelocidade *= -1
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    yVelocidade *= -1
  }
}

function mostraRaquete(x,y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function colisaoRaqueteEBolinha(x,y){
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    xVelocidade *= -1;
  }
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yMinhaRaquete +=10;
  }
  yMinhaRaquete = constrain(yMinhaRaquete, 5, 315);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete/2 -30;
  yRaqueteOponente += velocidadeYOponente;
  yRaqueteOponente = constrain(yRaqueteOponente, 5, 315);
}

function mostraPlacar(n,x){
  fill(255);
  text(n, x, yPontos)
}

function marcaPontos(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosOponente += 1;
  }
}