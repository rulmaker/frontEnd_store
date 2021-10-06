/* function addItem(item) {
    const itemHTML =
        "<div >" +
        '<div class="producto" ">\n' +
        '    <img src="' +
        item.img +
        '" class="procucto__imagen" alt="image">\n' +
        '    <div class="card-body">\n' +
        '    <h3 class="card-title">' +
        item.name +
        "</h5>\n" +
        '    <p class="card-text">' +
        item.description +
        "</p>\n" +
        "    </div>\n" +
        '<a href="#" class="btn btn-primary">Añadir al carrito</a>\n' +
        "</div>" +
        "</div>";
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
} */

/* addItem({
    name: "Camisa VUEJS",
    img: "img/1.jpg",
    description:
        "Demuestra tus habilidades de VueJs con esta camisa cool. Sé el alma de la oficina.",
});

addItem({
    name: "Camisa ANGULARJS",
    img: "img/2.jpg",
    description:
        "Sé la envidia de todos tus amigos con la playera ANGULARJS, que te hará parecer todo un hacker del pentágono.",
});

addItem({
    name: "Camisa REACTJS",
    img: "img/3.jpg",
    description:
        "Destaca entre la multitud con la playera REACT JS, que te hará parecer un genio.",
});

addItem({
    name: "Redux",
    img: "img/4.jpg",
    description:
        "Con nuestra playera Redux más de una persona se te quedará mirando en la calle.",
});

addItem({
    name: "NODEJS",
    img: "img/5.jpg",
    description:
        "Con nuestra playera NODEJS parecerás un desarrollador Senior, serás la envidia de toda la oficina.",
});

addItem({
    name: "HTML5",
    img: "img/7.jpg",
    description:
        "Si eres amante de HTML, esta playera es para ti. Apta para salir a la salir a las tortillas o a los XV de tu prima.",
});

addItem({
    name: "GitHub",
    img: "img/8.jpg",
    description:
        "Solo para desarrolladores hipsters. Se vale salir a lucirla.",
});

addItem({
    name: "TypeScript",
    img: "img/10.jpg",
    description: "Para los geeks que se atreven a mostrar su verdadero yo.",
});

addItem({
    name: "JavaScript",
    img: "img/12.jpg",
    description:
        "Para los que aman el front-end y el back-end por igual. Si la usas no pasarás desapercibido.",
});

addItem({
    name: "GraphQL",
    img: "img/13.jpg",
    description: "Se vale salir a la calle nomás para lucirla.",
}); */

class Product {
    constructor(name, image, description, talla, price,) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.talla = talla;
        this.price = price;

    }

}

/* <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product</strong>: ${product.name}
                <strong>Product Price</strong>: ${product.price}
                <strong>Product Year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        
        <div>
        <div class="producto">
        <img src="${product.image}" class="producto__imagen" alt="imagen">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        
        </div>
        </div>
        </div>*/

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

        ui.resetForm();

        ui.showMessage('Product added successfully', 'success');

        e.preventDefault();
    });

document.getElementById('list-items').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
})