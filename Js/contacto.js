const $form = document.querySelector('#form');
const $nombre = document.querySelector('#name');
const $tel = document.querySelector('#phone');
const $email = document.querySelector('#email');
const $mensaje = document.querySelector('#message');
const $parr = document.querySelector('#advertencia');
const $enviar = document.querySelector('#enviar');




$form.addEventListener('keydown', e => {
    if ($nombre.value.length >= 1) {
        $enviar.removeAttribute("disabled");

    } else if ($nombre.value.length < 1) {
        $enviar.setAttribute("disabled", "");
    }

})

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