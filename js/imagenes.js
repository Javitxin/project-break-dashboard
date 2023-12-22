// las direciones de cada img en u array
const arrImgFondo = ['./assets/img/Aston-Martin.jpg', './assets/img/Camaro-Amarillo.jpg', './assets/img/Dodge.jpg',
    './assets/img/Ford-Mustang.jpg', './assets/img/Gt500.jpg', './assets/img/GTR-R35.jpg',
    './assets/img/Mclaren.jpg', './assets/img/Porsche911.jpg', './assets/img/Subaru.jpg', './assets/img/TtRs.jpg'
];

// funcion cambiar el fondo:

const cambioFondo = () => {
    // generar el numero random del 0 al 9
    const numeroImagen = Math.floor((Math.random() * arrImgFondo.length));
    document.body.style.backgroundImage = `url('${arrImgFondo[numeroImagen]}')`;
}
onload = function() {
    cambioFondo();
    this.setInterval(cambioFondo, 15000);
}