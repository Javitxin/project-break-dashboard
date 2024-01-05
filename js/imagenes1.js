const arrImgFondo = ['./assets/img/Aston-Martin.jpg', './assets/img/Camaro-Amarillo.jpg', './assets/img/Dodge.jpg',
    './assets/img/Ford-Mustang.jpg', './assets/img/Gt500.jpg', './assets/img/GTR-R35.jpg',
    './assets/img/Mclaren.jpg', './assets/img/Porsche911.jpg', './assets/img/Subaru.jpg', './assets/img/TtRs.jpg'
];
const body = document.body;

const cambioFondo = () => {
    const numeroImagen = Math.floor((Math.random() * arrImgFondo.length));
    body.style.backgroundImage = `url('${arrImgFondo[numeroImagen]}')`;
}
setInterval(() => {
    cambioFondo()
}, 15000)
cambioFondo()