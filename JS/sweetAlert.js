function aceptar() {
    document.getElementById('enviar').submit;
    var correo = document.getElementById('correo').value;
    var nombre = document.getElementById('nom_usu').value;
    var fecha = document.getElementById('fecha').value;
    registrarr()
    if (validarcorreo(correo)) {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        setTimeout(function() {
            location.reload();
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