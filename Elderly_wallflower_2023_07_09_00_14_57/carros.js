
// Codigos de Carros

let yCarros = [100,145,200,255,45,310];
let velocidadeCarros = [2, 2.3, 2.4, 3, 3.5, 5.3];
let xCarros = [ 600,600,600,600,600,600];
let comprimentoCarro = 60;
let alturaCarro = 40;

//


function mostraCarro(){
  for (let i = 0; i < imagemDoCarros.length; i++){
    image(imagemDoCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
  }
}

function movimentoCarro(){
  for (let i = 0; i <imagemDoCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }    
}

function possicaoInicial(){
  for (let i = 0; i < imagemDoCarros.length; i++){
    if (limiteDaTela(xCarros[i])){
        xCarros[i] = 600;  
    }
  }
}

function limiteDaTela(xCarros){
  return xCarros < -30;
  
}