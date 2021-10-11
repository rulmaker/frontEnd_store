let arrayProductos = [];//almacena elementos que seran guardados en loca

class Product {
    constructor(name, image, description, talla, price,) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.talla = talla;
        this.price = price;

    }

}

class UI {
    //pintar elemento en dom
    /* addProduct(product) {
        const productList = document.getElementById('list-items');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="mb-4" id="${}">
        <div class="producto">
        <img src="${product.image}" class="producto__imagen" alt="imagen">
        <div class="card-body justify-content-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p><strong>Talla</strong>; ${product.talla}</p>
        <p><strong>Precio</strong>: $${product.price}</p>
        
        <button class="btn btn-danger" name="delete">Borrar</button>
        <button class="btn btn-primary" onclick="showID()" name="prueba">Prueba</button>

        </div>
        </div>
        </div>`;
        productList.appendChild(element);

    } */

    //crea objeto con datos del producto
    crearItem(product) {
        let item = {
            nombre: product.name,
            imagen: product.image,
            descripcion: product.description,
            talla: product.talla,
            precio: product.price,
            ID: this.newID()

        }

        arrayProductos.push(item);

        return arrayProductos;
    }



    newID() {
        let lastID = localStorage.getItem("lastID") || "-1";
        let newNumberID = JSON.parse(lastID) + 1;
        localStorage.setItem("lastID", JSON.stringify(newNumberID));
        return newNumberID
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto borrado exitosamente', 'info');

        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //SHOWING IN DOM
        const container = document.querySelector('.mensaje-contenedor');
        const app = document.querySelector('container');
        container.insertBefore(div, app);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 1500);
    }
}


//FUNCTIONS




//guarda objeto Item en local storage



const guardarDB = () => {
    localStorage.setItem('productos', JSON.stringify(arrayProductos));

}

function showID() {

    const num = JSON.parse(localStorage.getItem('productos'));
    console.log(num[e.target.dataSet.ID]);
}

//pintar solo el ultimo elemento de DB
const agregarDB = () => {
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    let count = 0;
    for (i = 0; i < arrayProductos.length; i++) {
        count = i;

    }
    console.log(arrayProductos[count])


    let lastElement = arrayProductos[count];
    const productList = document.getElementById('list-items');
    const element = document.createElement('div');
    element.innerHTML = `
             <div class="mb-4" id="${lastElement.ID}" >
             <div class="producto">
             <img src="${lastElement.imagen}" class="producto__imagen" alt="imagen">
             <div class="card-body justify-content-center">
             <h5 class="card-title">Nombre: ${lastElement.nombre}</h5>
             <p class="card-text">Descripción: ${lastElement.descripcion}</p>
             <p><strong>Talla</strong>Talla: ${lastElement.talla}</p>
             <p><strong>Precio</strong>Precio: $${lastElement.precio}</p>
             
             <button class="btn btn-danger" name="delete">Borrar</button>
             <button class="btn btn-primary" onclick="showID()" name="prueba">Prueba</button>
             
             </div>
             </div>
             </div>`;
    productList.appendChild(element);


}

//Funcion que pinta datos al recargar
const pintarDB = () => {
    arrayProductos = JSON.parse(localStorage.getItem('productos'));


    arrayProductos.forEach(el => {
        const productList = document.getElementById('list-items');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="mb-4" id="${el.ID}" >
            <div class="producto">
            <img src="${el.imagen}" class="producto__imagen" alt="imagen">
            <div class="card-body justify-content-center">
            <h5 class="card-title">Nombre: ${el.nombre}</h5>
            <p class="card-text">Descripción: ${el.descripcion}</p>
            <p><strong>Talla</strong>Talla: ${el.talla}</p>
            <p><strong>Precio</strong>Precio: $${el.precio}</p>
            
            <button class="btn btn-danger" name="delete">Borrar</button>
            <button class="btn btn-primary" onclick="showID()" name="prueba">Prueba</button>
            
            </div>
            </div>
            </div>`;
        productList.appendChild(element);
    })

}


//DOM EVENTS
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').value;
        const description = document.getElementById('description').value;
        const talla = document.getElementById('talla').value;
        const price = document.getElementById('price').value;


        const product = new Product(name, image, description, talla, price);

        const ui = new UI();

        if (name === "" || price === "" || image === "" || description === "" || talla === "") {
            return ui.showMessage('Complete all fields', 'danger'), e.preventDefault();
        }

        console.log(name);
        console.log(image);
        console.log(description);
        console.log(talla);
        console.log(price);
        /* ui.addProduct(product); */

        ui.crearItem(product);

        guardarDB();

        agregarDB();

        ui.resetForm();

        ui.showMessage('Product added successfully', 'success');

        e.preventDefault();
    });

document.getElementById('list-items').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
})

//pintar datos de localStorage al recargar
document.addEventListener('DOMContentLoaded', pintarDB);
