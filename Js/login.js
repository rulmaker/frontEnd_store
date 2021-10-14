const form = document.forms['sesion'];

form.onsubmit = (event) => {
    event.preventDefault();
    console.log(nameForm());
}

function nameForm() {
    const user = {};

    Array.from(form.elements).forEach(element => {
        if (element.name)
            user[element.name] = element.value
    })
    return user;
}


const forma = document.getElementById('forma');

const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces

    const correoValue = correo.value.trim();
    const contraseñaValue = contraseña.value.trim();




    if (correoValue === '') {
        setErrorFor(correo, 'Espacio en blanco.');
    } else if (!isEmail(correoValue)) {
        setErrorFor(correo, 'No ingreso un email válido');
    } else {
        setSuccessFor(correo);
    }

    if (contraseñaValue === '') {
        setErrorFor(contraseña, 'Espacio en blanco.');
    } else {
        setSuccessFor(contraseña);
    }
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