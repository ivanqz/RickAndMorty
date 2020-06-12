/**
 * RICK AND MORTY
 * -----------------
 */

//  Definimos la URL de la api a la que le vamos a pedir la información
const API_URL = "https://rickandmortyapi.com/api/";
const PERSONAJES_URL = "character/:id";
const OPCIONES = { crossDomain : true };

// Creo una función para conseguir que me saque por pantalla los datos de los personajes.
const PERSONAJE = function (personaje) {
    document.write(`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, soy originario de ${personaje.origin.name}${"<br></br>"}`)
};

// Creo una función con el parámetro id 
function pedirPersonaje(id) {
    // Creo un prompt que solicite al usuario el número de id del personaje que quiere ver.
    var id = Number(prompt("Introduce el id del personaje que quieres ver:"));
    // Si el usuario introduce un número menor que 1 o mayor que 591, se devuelve por pantalla una frase de error.
    if (id < 1 || id > 591) {
        document.write(`Este id no corresponde a ningún personaje actual.`)
    } else {
    // Si el número que el usuario ha introducido es correcto, se reemplaza la palabra "id" de la URL de personajes
    const URL = `${API_URL}${PERSONAJES_URL.replace("id", id)}`;
    //get, nos permite llamar a la funcion personaje
    $.get(URL, OPCIONES, PERSONAJE);
    
    }
}

// Invocar a la función al abrir la página.
pedirPersonaje();