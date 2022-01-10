  //variáveis da Bolinha
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 22
  let raio = diametro / 2;

  //velocidade da Bolinha
  let velocidadexBolinha = 4;
  let velocidadeyBolinha = 4;

  //Minha Raquete 
  let xRaquete = 15;
  let yRaquete = 145;
  let larguraRaquete = 15;
  let alturaRaquete = 80;

  //Raquete Oponente
  let xRaqueteOponente = 570;
  let yRaqueteOponente = 145;
  let larguraRaqueteOponente = 15;
  let alturaRaqueteOponente = 80;
  let colidiu = false;
  let velocidadeYOponente;

  function setup() {
  createCanvas(600,400);
  }

  function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete();
  mostraRaqueteOponente();
  verificaColisaoBorda(); 
  movimentaARaquete();
  movimentaRaqueteOponente();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

  }

  function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  }

  function mostraRaquete(){
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
  }

  function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaqueteOponente,   alturaRaqueteOponente);
    
  }

  function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
  }

  function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
      xBolinha < 0 + raio){
  velocidadexBolinha *= -1;
    
  }
  
  if (yBolinha + raio > height ||
      yBolinha < 0 + raio){
  velocidadeyBolinha *= -1;
    
  }
  }
    
    function movimentaARaquete(){
   if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
     
   }
     
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;

    }
    }

    //function verificaColisaoRaquete(){
      if (xBolinha - raio < larguraRaquete + xRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
        velocidadexBolinha *= -1;
      }

    function verificaColisaoRaquete(x,y){
    colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio)
      if (colidiu){
        velocidadexBolinha *= -1;
      }
    }

    function movimentaRaqueteOponente(){
      velocidadeYOponente = (yBolinha - yRaqueteOponente - larguraRaquete / 2 - 50);
      yRaqueteOponente += velocidadeYOponente
    }
