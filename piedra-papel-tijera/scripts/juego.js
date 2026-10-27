const opciones = ['piedra', 'papel', 'tijera'];
const eleccionRival = opciones[Math.floor(Math.random() * opciones.length)];
const seleccion = localStorage.getItem(selccion);

console.log(eleccionRival);

const resultado = document.querySelector('#span-tu-eleccion');
resultado.textContent = seleccion;