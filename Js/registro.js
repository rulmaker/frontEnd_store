const form = document.forms['Registro'];

/* form.onsubmit = (event) => {
    event.preventDefault();
    console.log(nameForm());
} */

function nameForm() {
    const user = {};

    Array.from(form.elements).forEach(element => {
        if (element.name)
            user[element.name] = element.value
    })
    return user;
}


const forma = document.getElementById('forma');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const contraseña2 = document.getElementById('contraseña2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nombreValue = nombre.value.trim();
    const correoValue = correo.value.trim();
    const contraseñaValue = contraseña.value.trim();
    const contraseña2Value = contraseña2.value.trim();

    if (nombreValue === '') {
        return setErrorFor(nombre, 'Espacio en blanco.');
    } else {
        setSuccessFor(nombre);
    }

    if (correoValue === '') {
        return setErrorFor(correo, 'Espacio en blanco.');
    } else if (!isEmail(correoValue)) {
        return setErrorFor(correo, 'No ingreso un email válido');
    } else {
        setSuccessFor(correo);
    }

    if (contraseñaValue === '') {
        return setErrorFor(contraseña, 'Espacio en blanco.');
    } else {
        setSuccessFor(contraseña);
    }

    if (contraseña2Value === '') {
        return setErrorFor(contraseña2, 'Espacio en blanco.');
    } else if (contraseñaValue !== contraseña2Value) {
        return setErrorFor(contraseña2, 'Las contraseñas no coinciden');
    } else {
        setSuccessFor(contraseña2);
    }

    nameForm();
    console.log(nameForm());
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(correo) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}