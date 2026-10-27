let seleccion = "";

const elegirPiedra = document.getElementById("boton-piedra");

elegirPiedra.onclick = function(){
    seleccion = "piedra";
    console.log('Has elegido piedra');
    setTimeout(()=> {
        window.location.href = 'resultado.html';
        }, 750);
    };

const elegirPapel = document.getElementById("boton-papel");

elegirPapel.onclick = function(){
    seleccion = "papel";
    console.log('Has elegido papel');
        setTimeout(()=> {
        window.location.href = 'resultado.html';
        }, 750);
    };

const elegirTijera = document.getElementById("boton-tijera");

elegirTijera.onclick = function(){
    seleccion = "tijera";
    console.log('Has elegido tijera');
    setTimeout(()=> {
        window.location.href = 'resultado.html';
        }, 750);
    };

