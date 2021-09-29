function addItem(item) {
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
        '    <h4 class="card-text">' +
        item.description +
        "</h4>\n" +
        "    </div>\n" +
        '<a href="#" class="btn btn-primary">Añadir al carrito</a>\n' +
        "</div>" +
        "</div>";
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
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
});