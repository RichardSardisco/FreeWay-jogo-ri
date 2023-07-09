
let yAtor = 370
let xAtor = 130
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
   }
  if(keyIsDown(LEFT_ARROW)){
    if(podeEsquerda()){
       xAtor -= 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(podeDireita()){
      xAtor += 3;
    }
  }
}
  
function verificaColisao(){
  for (let i = 0; i < imagemDoCarros.length; i++){
      colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,                         alturaCarro,xAtor, yAtor,15)
      if(colisao){
        colidiu();
        somDaColisao.play();
        if(pontosMaiorQueZero()){
          meusPontos -=1;
      }
    }     
  }                 
}

function colidiu(){
  yAtor = 366;
}

function pontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(meusPontos, width / 5, 25);
}

function marcaPonto(){
  if(yAtor < 22){
    meusPontos += 1;
    colidiu();
    somDoPonto.play();
  }  
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  print(yAtor < 370);
  return yAtor < 370  
}

function podeEsquerda(){
   if(xAtor > 0){
     return true
   }else {
     return false
   }
}

function podeDireita(){
  if(xAtor < 570){
    return true
  }else {
    return false
  }
}
