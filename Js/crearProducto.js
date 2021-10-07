let arrayProductos = [];

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
    addProduct(product) {
        const productList = document.getElementById('list-items');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="mb-4">
        <div class="producto">
        <img src="${product.image}" class="producto__imagen" alt="imagen">
        <div class="card-body justify-content-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p><strong>Talla</strong>; ${product.talla}</p>
        <p><strong>Precio</strong>: $${product.price}</p>
        
        <button class="btn btn-danger" name="delete">Borrar</button>
        
        </div>
        </div>
        </div>`;
        productList.appendChild(element);

    }

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

const guardarDB = () => {
    localStorage.setItem('productos', JSON.stringify(arrayProductos));
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

        ui.addProduct(product);

        ui.crearItem(product);

        guardarDB();

        ui.resetForm();

        ui.showMessage('Product added successfully', 'success');

        e.preventDefault();
    });

document.getElementById('list-items').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
})