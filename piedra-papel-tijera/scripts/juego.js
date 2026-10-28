const seleccionUsuario = localStorage.getItem("seleccion");

const opciones = ['piedra', 'papel', 'tijera'];
const aleatorioRival = opciones[Math.floor(Math.random() * opciones.length)];

console.log(seleccionUsuario);
console.log(aleatorioRival);

const tuSeleccion = document.querySelector('#span-tu-eleccion');
tuSeleccion.textContent = seleccionUsuario;

const SeleccionRival = document.querySelector('#span-eleccion-rival');
SeleccionRival.textContent = aleatorioRival;

const ganadorPerdedor = document.querySelector('#resultado-final');
if(tuSeleccion.textContent === SeleccionRival.textContent){
    ganadorPerdedor.textContent = "EMPATE";
    ganadorPerdedor.classList.add("mensaje-empate");
}
else if((tuSeleccion.textContent === "piedra")&&(SeleccionRival.textContent === "papel")){
    ganadorPerdedor.textContent = "PERDISTE";
    ganadorPerdedor.classList.add("mensaje-perdiste");
}
else if((tuSeleccion.textContent === "piedra")&&(SeleccionRival.textContent === "tijera")){
    ganadorPerdedor.textContent = "GANASTE";
    ganadorPerdedor.classList.add("mensaje-ganaste");
}
else if((tuSeleccion.textContent === "papel")&&(SeleccionRival.textContent === "piedra")){
    ganadorPerdedor.textContent = "GANASTE";
    ganadorPerdedor.classList.add("mensaje-ganaste");
}
else if((tuSeleccion.textContent === "papel")&&(SeleccionRival.textContent === "tijera")){
    ganadorPerdedor.textContent = "PERDISTE";
    ganadorPerdedor.classList.add("mensaje-perdiste");
}
else if((tuSeleccion.textContent === "tijera")&&(SeleccionRival.textContent === "piedra")){
    ganadorPerdedor.textContent = "PERDISTE";
    ganadorPerdedor.classList.add("mensaje-perdiste");
}
else if((tuSeleccion.textContent === "tijera")&&(SeleccionRival.textContent === "papel")){
    ganadorPerdedor.textContent = "GANASTE";
    ganadorPerdedor.classList.add("mensaje-ganaste");
}


const botonOtra = document.getElementById("volver-a-jugar");
botonOtra.onclick = ()=> {
       
            window.location.href = 'juego.html'
    }