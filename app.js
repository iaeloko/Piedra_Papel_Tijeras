
document.getElementById("boton").addEventListener("click", logica);
document.getElementById("reiniciar").addEventListener("click", reiniciar);



function logica () {

    let jugador = prompt("Escoge una opción:  1 para Piedra, 2 para Papel, 3 para Tijera");
    let maquina = Math.floor(Math.random() * 3) + 1;

        if (jugador == 1){
            alert("Escogiste: Piedra");;
            } else if (jugador == 2){
                alert("Escogiste: Papel");
            } else if (jugador == 3){
                alert("Escogiste: Tijera");
            } else {
                alert("No has escogido ninguna opción");
                logica();
        }

        if (maquina == 1){
            alert("Tu rival escogió: Piedra");
            } else if (maquina == 2){
                alert("Tu rival escogió: Papel");
            } else if (maquina == 3){
                alert("Tu rival escogió: Tijera");
        }


        if (jugador == maquina) {
            alert("Empate");
            } else if (jugador == 1 && maquina == 3) {
                alert("Ganaste");
            } else if (jugador == 2 && maquina == 1) {
                alert("Ganaste");
            } else if (jugador == 3 && maquina == 2) {
                alert("Ganaste");
            } else {
                alert("Perdiste");
                
        }

    }       
    


    
   
    