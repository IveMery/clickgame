const player = document.querySelector('.player')
const puntaje = document.querySelector('#puntaje')
const tiempoDeJuego = document.querySelector('#tiempo')

let puntos = 0;
let tiempo = 30;
let necesarios =45 ;

player.onclick = () => {
    puntaje.textContent = necesarios + " Clicks Necesarios " + "/" + " Clicks: " + puntos++;
    randNUm = Math.round(Math.random() * 400);
    randNUm2 = Math.round(Math.random() * 400);
    player.style.marginTop = randNUm + "px"
    player.style.marginLeft = randNUm2 + "px"
   


}


let restarTiempo = () => {
    tiempoDeJuego.innerHTML = "Tiempo:" + tiempo--;
    if (tiempo == 0 && puntos >=45) {
        puntaje.textContent = "Ganaste!!"
        if(tiempo<=0){
            myStopFunction()
             tiempoDeJuego.textContent
             = "Tiempo: 0"
        }
    } else if (tiempo == 0 && puntos < 45) {
        puntaje.textContent = "Lo Siento Perdiste "
        if(tiempo<=0){
            myStopFunction()
             tiempoDeJuego.textContent
             = "Tiempo: 0"
        }
    }
    

}


var myVar =setInterval(restarTiempo, 1000);


function myStopFunction() {
    clearInterval(myVar);
  }