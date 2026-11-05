(async function() {
    try{
        const chiste = document.getElementById('chiste-texto');
        const respuesta = await fetch('https://v2.jokeapi.dev/joke/Any?lang=en&type=single');
        const datos = await respuesta.json();

        chiste.textContent = datos.joke;
    }
    catch{
        console.log('No se pudo obtener el chiste :(')
    }
})();