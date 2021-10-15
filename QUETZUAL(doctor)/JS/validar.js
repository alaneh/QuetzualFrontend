let expresioncorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let expresiontextnumber = /^[a-zA-Z0-9 ]+$/;
let expresioncontra = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
let expresionfecha = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;

function validarcorreo(correo) {
    var validar = expresioncorreo.test(correo);
    if (!validar) {
        alert("ingresen un correo valido")
    }
    return validar
}

function validarcontrasena(contrasena) {
    var validar = expresioncontra.test(contrasena);
    if (!validar) {
        alert("ingresen una contraseña valida La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. ")
    }
    return validar;
}

function validarnombre(nombre) {
    var validar = expresiononlytext.test(nombre);
    if (!validar) {
        alert("ingresen un nombre valido valida (solo letras)")
        return false;
    } else if (nombre.length > 20 || nombre.length == 0) {
        alert("El tamaño del nombre no es correcto")
        return false;
    } else {
        return true;
    }
}

function validarfecha(fecha) {
    var validar = expresionfecha.test(fecha);
    if (!validar) {
        alert("ingresen una fecha valida")
    }
    return validar;
}

function validarPregunta(pregunta) {
    var validar = expresiontextnumber.test(pregunta);
    if (!validar) {
        alert("solo puedes ingresar letras y numeros en el campo");
        return false;
    } else if (pregunta.length > 100 || pregunta.length == 0) {
        alert("solo puedes ingresar como maximos 100 caracteres");
        return false;
    } else {
        return true;
    }
}

function registrarr() {
    var fecha = document.registrar.fecha.value;
    var email = document.registrar.email.value;
    var nombre = document.registrar.nombre.value;
    var pass = document.registrar.pass.value;
    var confpas = document.registrar.confpass.value;
    if (pass != confpas) {
        alert("Las contraseñas no coinciden");
    } else if (validarfecha(fecha) && validarnombre(nombre) && validarcorreo(email) && validarcontrasena(pass)) {
        alert("has registrado una cuenta")
        document.registrar.submit;
    }
}

function iniciars() {
    var email = document.iniciar.email.value;
    var pass = document.iniciar.pass.value;
    if (validarcorreo(email) && validarcontrasena(pass)) {
        alert("Se ha iniciado Sesión")
        document.iniciar.submit;
    }
}

function modificarcuenta() {
    var fecha = document.modcuenta.fecha.value;
    var email = document.modcuenta.email.value;
    var nombre = document.modcuenta.nombre.value;
    if (validarfecha(fecha) && validarnombre(nombre) && validarcorreo(email)) {
        alert("has modificado tu cuenta")
        document.modcuenta.submit;
    }
}

function modificarContra() {
    var antpass = document.modcontra.antpass.value;
    var pass = document.modcontra.pass.value;
    var confpas = document.modcontra.confpass.value;
    if (pass != confpas) {
        alert("No coinciden las nuevas contraseñas");
    } else if (validarcontrasena(pass) && validarcontrasena(antpass)) {
        alert("Se ha modificado la contraseña correctamente");
        document.modcontra.submit;
    }
}

function HPregunta() {
    var pregunta = document.getElementById("pregunta").value;
    if (validarPregunta(pregunta)) {
        alert("se ha realizado la pregunta con exito");
    }
}

function MPregunta() {
    var pregunta = document.getElementById("Mpregunta").value;
    if (validarPregunta(pregunta)) {
        alert("se ha realizado la pregunta con exito");
    }
}

function RechaPregunta() {
    var razon = document.rechapre.razon.value;
    if (validarPregunta(razon)) {
        alert("se ha rechazado la pregunta con exito");
        document.rechapre.submit;
    }
}

function ResPregunta() {
    var pregunta = document.repre.pre.value;
    var respuesta = document.repre.res.value;
    if (validarPregunta(pregunta) && validarPregunta(respuesta)) {
        alert("Se ha respondido la respuesta con exito");
        document.repre.submit;
    }
}