const $form = document.querySelector('#form');
const $nombre = document.querySelector('#name');
const $tel = document.querySelector('#phone');
const $email = document.querySelector('#email');
const $mensaje = document.querySelector('#message');
const $parr = document.querySelector('#advertencia');
const $enviar = document.querySelector('#enviar');


//validar formulario

$form.addEventListener('keydown', e => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (regexEmail.test($email.value) == true && $nombre.value.length >= 1 && $tel.value.length >= 1 && $mensaje.value.length >= 1) {
        $enviar.removeAttribute("disabled");

    } else if (regexEmail.test($email.value) == false || $nombre.value.length < 1 || $tel.value.length < 1 || $mensaje.value.length < 1) {
        $enviar.setAttribute("disabled", "");
    }

})

//enviar formulario

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        this.reset();
        alert('Gracias por contactarme, te escribiré pronto');
    }

}