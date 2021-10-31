let expresioncorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let expresiontextnumber = /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ?¿,.]+$/;
let expresioncontra = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
let expresionfecha = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
let expresiononlytext = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u;



function validarcorreo(correo) {
    var validar = expresioncorreo.test(correo);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un correo valido'
        });
    }
    return validar;
}

function validarcontrasena(contrasena) {
    var validar = expresioncontra.test(contrasena);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese una contraseña valida',
            text: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
        });
    }
    return validar;
}

function validarnombre(nombre) {
    var validar = expresiononlytext.test(nombre);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un nombre valido (solo letras)'
        });
        return false;
    } else if (nombre.length > 30 || nombre.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'El tamaño del nombre no es correcto',
            text: 'El nombre tiene que medir entre 1 y 20 caracteres'
        });
        return false;
    } else {
        return true;
    }
}

function validarfecha(fecha) {
    var validar = expresionfecha.test(fecha);
    if (!validar) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese una fecha valida'
        });
    }
    return validar;
}

function registrardr() {
    var fecha = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("name").value;
    var pass = document.getElementById("password1").value;
    var confpass = document.getElementById("passwordConfirm1").value;
    if (validarnombre(nombre) && validarfecha(fecha) && validarcorreo(email) && validarcontrasena(pass) && (pass = confpass)) {
        Swal.fire({
            icon: 'success',
            title: 'Felicidades',
            text: 'Has registrado una cuenta'
        });
        setTimeout(function() {
            location.reload();
        }, 5000);
    } else if (pass != confpass) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden'
        });
    }
    //document.registrar.submit;

}

function modificarcuentadr() {
    var fecha = document.getElementById("fn").value;
    var email = document.getElementById("correo").value;
    var nombre = document.getElementById("nombre").value;
    var pass = document.getElementById("password").value;
    var confpass = document.getElementById("passwordConfirm").value;
    if (validarnombre(nombre) && validarfecha(fecha) && validarcorreo(email) && validarcontrasena(pass) && (pass = confpass)) {
        Swal.fire({
            icon: 'success',
            title: 'Felicidades',
            text: 'Has modificado una cuenta'
        });
        //document.registrar.submit;
        setTimeout(function() {
            location.reload();
        }, 5000);
    } else if (pass != confpass) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden'
        });
    }
}

function modificarcuentaAdmin() {
    var fecha = document.getElementById("fechaAdmin").value;
    var email = document.getElementById("correoadmin").value;
    var nombre = document.getElementById("nombreadmin").value;
    if (validarnombre(nombre) && validarfecha(fecha) && validarcorreo(email)) {
        document.getElementById("modalR").classList.add(isVisible);
    }
    //document.registrar.submit;

}

function modificarContra() {
    var antpass = document.getElementById("passwordact").value;
    var pass = document.getElementById("newpassword").value;
    var confpass = document.getElementById("newpasswordconfirm").value;
    if (validarcontrasena(pass) && validarcontrasena(antpass) && (pass = confpass)) {
        Swal.fire({
            icon: 'success',
            title: 'Perfecto',
            text: 'Se ha modificado la contraseña correctamente'
        });
        //document.modcontra.submit;
        setTimeout(function() {
            location.reload();
        }, 5000);
    } else if (pass != confpass) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No coinciden las nuevas contraseñas'
        });
    }
}