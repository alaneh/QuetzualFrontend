function aceptar() {
    document.getElementById('enviar').submit;
    var correo = document.getElementById('correo').value;
    var contra = document.getElementById('contrasena').value;
    if (validarcorreo(correo) && validarcontrasena(contra)) {
        Swal.fire(
            '¡Excelente!',
            '¡El registro ha sido existoso!',
            'success'
        )
        setTimeout(function() {
            location.reload();
            //location.href=´direccion de la otra página´
        }, 1000);
    }
}

function validarIS() {
    document.getElementById('IniciarSesion').submit;
    var correo = document.getElementById('IScorreo').value;
    var contra = document.getElementById('IScontra').value;
    if (validarcorreo(correo) && validarcontrasena(contra)) {
        Swal.fire(
            '¡Bienvenido!',
            '¡Los datos coinciden!',
            'success'
        )
        setTimeout(function() {
            distribucion();
            //location.href=´direccion de la otra página´
        }, 1000);
    }
}

function distribucion() {
    location.href = './distribución.html';
}

function enviarConfirmacion() {
    location.href = './confirmacionUsuario.html';
}

function enviarModificarPregunta() {
    location.href = './modificarPregunta.html';
}