// File: HTML/formularios.js
let control = 0;
let contrasena = '1234';

function verificar(){
    let clave = document.getElementById("contrasena").value;
    if (clave != contrasena) {
        alert("Clave incorrecta");
        control++;
        comprobar();
    }else if (clave === '') {
        alert("Debe ingresar una clave");
        control++;
        comprobar();
    }
    else {
        window.open("https://www.google.com", "_blank");
        control = 0;
    }
    return clave;
}

function comprobar(){
    if (control >= 3) {
        alert("Ha superado el número de intentos permitidos\nContacte al administrador");
        const errorWindow = window.open('', '_self', 'width=400, height=200');
        errorWindow.document.writeln('<h1>¡Error!</h1>');
        errorWindow.document.writeln('<p>Hubo un problema con la solicitud. Por favor, intente más tarde.</p>');

}
}
