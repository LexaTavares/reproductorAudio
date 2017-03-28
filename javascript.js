var elemento = document.getElementById("musica");

function empiezaMusica(){
  elemento.play();
}
function pausar(){
  elemento.pause();
}
function parar(){
  elemento.pause();
  elemento.currentTime = 0
}
function avanzar(){
  elemento.currentTime++;
}
function retroceder(){
  elemento.currentTime--;
}
function volmas(){
  elemento.volume = document.getElementById("volumen").value;
}
function barraAudio(event){
  seek= elemento.duration * (document.getElementById("barra").value/100);
  elemento.currentTime = seek;

}
