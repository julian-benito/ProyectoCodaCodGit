const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

// Mostrar error
function mostrarError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form__control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Mostrar validez
function mostrarValidez(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
}

/*-------------Validacion Email-----------*/

function checkEmail(input) {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (regex.test(input.value.trim())) {
        mostrarValidez(input);
    } else {
        mostrarError(input, 'Email no es válido');
    }
}

/*-------------Validacion campos requeridos-----------*/

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            mostrarError(input, `${getFieldName(input)} es requerido`);
        } else {
            mostrarValidez(input);
        }
    });
}

/*-------------Validacion caracteres-----------*/

function checkLength(input, min, max) {
    if (input.value.length < min) {
        mostrarError(input, `${getFieldName(input)} debe tener al menos ${min} caracteres`);
    } else if (input.value.length > max) {
        mostrarError(input, `${getFieldName(input)} debe tener menos de ${max} caracteres`);
    } else {
        mostrarValidez(input);
    }
}

/*-------------Validacion telefono-----------*/

function checkTelefono(input) {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(input.value.trim())) {
        mostrarError(input, 'Teléfono no es válido');
    } else {
        mostrarValidez(input);
    }
}

// Nombre de los items formularios
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([nombre, email, telefono, mensaje]);
    checkLength(nombre, 3, 15);
    checkEmail(email);
    checkTelefono(telefono);
    checkLength(mensaje, 1, 300);
});