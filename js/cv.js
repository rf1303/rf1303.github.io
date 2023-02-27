
async function datosCurriculum() {
    const datos = await fetch("https://randomuser.me/api/?inc=gender,name,nat,email,phone,picture")
        .then(response => response.json()) 
        .then(data => mostrarDatos(data))
        .catch(error => console.log(error));
}

function mostrarDatos(datos) {
    const foto = document.getElementById('imagen-frontend');
    
    document.getElementById('nombre-cv').innerHTML = datos.results[0].name.first + " " + datos.results[0].name.last;
    foto.src = datos.results[0].picture.large;
}
function enviarMail() {
    window.location = "mailto:pulgaramiro@gmail.com";
}

const botonMail = document.getElementById('boton-mail');
botonMail.addEventListener('click', enviarMail);

const botonTrabajos = document.getElementById('boton-trabajo');
botonTrabajos.addEventListener('click', function() {
    window.open('https://github.com/');
});

document.addEventListener('DOMContentLoaded', datosCurriculum());




