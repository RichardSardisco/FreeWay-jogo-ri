
//sons

let somDaTrilha;
let somDaColisao;
let somDoPonto;

// imagens

let imagemAtor;
let imagemDaEstrada;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarros =[imagemDoCarro,imagemDoCarro2,imagemDoCarro3,imagemDoCarro,imagemDoCarro2,imagemDoCarro3 ];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}

function setup() {
  createCanvas(600,400);
  somDaTrilha.loop();
}

function draw(){
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentaAtor();
  possicaoInicial();
  verificaColisao();
  pontos();
  marcaPonto();
}


