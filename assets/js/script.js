
const boton1 = document.getElementById('btn1');

boton1.addEventListener('click', function () {
    var partidas = +prompt("Seleccione cuantas partidas quiere jugar: ");
    for (var i = 1; i <= partidas; i++) {
        play();
        if (partidas == i) {
            alert("GAME OVER")
        }
    }
});

function play() {

    // generamos un numero aleatoreo entre 1 y 3 invocando la funcion decodificadora
    // y asignamos la jugada a la variable cpu
    var cpu = decodifica(Math.floor(Math.random() * 3) + 1);
    console.log("opcion cpu ", cpu)

    // capturamos la jugada del P1 con funcion jugadaP1
    var jugada = jugadaP1();
    console.log("valor de var jugada: ", jugada);

    var p1 = decodifica(jugada);
    console.log("opcion P1 desde funcion play = ", p1)

    //defino el empate 
    if (p1 == cpu) {
        alert(`Haz empatado con la CPU !! Resultado p1: ${p1} V/S CPU: ${cpu}`);

        // defino los escenarios en que pierde el jugador p1 
    } else if ((p1 == "Tijera" && cpu == "Piedra") ||
        (p1 == "Piedra" && cpu == "Papel") ||
        (p1 == "Papel" && cpu == "Tijera")
    ) {
        alert(`Haz perdido contra la CPU!!! Resultado p1: ${p1} V/S CPU: ${cpu}`)
    }
       //defino el escenario en que gana el jugador p1
    else if ((p1 == "Papel" && cpu == "Piedra") ||
        (p1 == "Piedra" && cpu == "Tijera") ||
        (p1 == "Tijera" && cpu == "Papel")
    ) {
        alert(`Felicitaciones!! Le ganaste a la CPU!! Resultado p1: ${p1} V/S CPU: ${cpu}`)
    }
}


function decodifica(dato) {
    console.log("parametro entrada funcion decodificadora: ", dato);
    if (typeof (dato) == "number") {
        if (dato == 1) {
            return "Piedra"
        } else if (dato == 2) {
            return "Papel"
        } else if (dato == 3) {
            return "Tijera"
        }
    }
}

function jugadaP1() {
    var opcionJugador = +prompt("Seleccione una opcion para su jugada: 1.Piedra, 2.Papel, 3.Tijera");
    console.log("opcion jugador desde funcion jugadaP1 = ", opcionJugador);
    return (opcionJugador)
}
