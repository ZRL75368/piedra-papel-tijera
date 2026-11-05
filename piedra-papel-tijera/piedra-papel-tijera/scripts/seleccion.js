let seleccion = "";

const elegirPiedra = document.getElementById("boton-piedra");

elegirPiedra.onclick = function(){
    localStorage.setItem("seleccion", "piedra");
    console.log('Has elegido piedra');
    setTimeout(()=> {
        window.location.href = 'resultado.html';
        }, 750);
    };

const elegirPapel = document.getElementById("boton-papel");

elegirPapel.onclick = function(){
    localStorage.setItem("seleccion", "papel");
    console.log('Has elegido papel');
        setTimeout(()=> {
        window.location.href = 'resultado.html';
        }, 750);
    };

const elegirTijera = document.getElementById("boton-tijera");

elegirTijera.onclick = function(){
    localStorage.setItem("seleccion", "tijera");
    console.log('Has elegido tijera');
    setTimeout(()=> {
        window.location.href = 'resultado.html';
        }, 750);
    };

const botonMenu = document.getElementById("volver-menu");
botonMenu.onclick = ()=> {
       
            window.location.href = 'index.html'
    }