const mostrarContraseña = document.getElementById('mostrarContraseña');
const btn_contraseña = document.getElementById('btn_contraseña');



const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";
const simbolos = "!@#$%^&*()-_=+";

let numCaracteres = document.getElementById('num_contraseñas').value;
// función generar contraseña:
const generarContraseña = (numCaracteres) => {
    let contraseña = '';
    const num_contraseñas = document.getElementById('num_contraseñas').value;

    for (i = 1; i <= numCaracteres; i++) {
        let opcion = Math.floor(Math.random() * 4 + 1);
        if (opcion == 1) {
            let caracter1 = minus.charAt(Math.floor(Math.random() * minus.length));
            contraseña += caracter1;

        } else if (opcion == 2) {
            let caracter2 = mayus.charAt(Math.floor(Math.random() * mayus.length));
            contraseña += caracter2;

        } else if (opcion == 3) {
            let caracter3 = simbolos.charAt(Math.floor(Math.random() * simbolos.length));
            contraseña += caracter3;

        } else {
            let numeros = Math.floor(Math.random() * 10);
            contraseña += numeros;
        }
    }
    mostrarContraseña.style = 'display: block '
    mostrarContraseña.value = contraseña;
    if (numCaracteres == '') {
        mostrarContraseña.style = 'display: none';
        window.alert('Introduca Caracteres');
    }
    if ((num_contraseñas >= '45') && (num_contraseñas <= '50')) {
        mostrarContraseña.style.width = '400px';
    } else if ((num_contraseñas >= '40') && (num_contraseñas < '45')) {
        mostrarContraseña.style.width = '360px';
    } else if ((num_contraseñas >= '35') && (num_contraseñas < '40')) {
        mostrarContraseña.style.width = '290px';
    } else if ((num_contraseñas >= '30') && (num_contraseñas < '35')) {
        mostrarContraseña.style.width = '260px';
    } else if ((num_contraseñas >= '25') && (num_contraseñas < '30')) {
        mostrarContraseña.style.width = '220px';
    } else if ((num_contraseñas >= '20') && (num_contraseñas < '25')) {
        mostrarContraseña.style.width = '185px';
    } else {
        mostrarContraseña.style.width = '150px';
    }

}
btn_contraseña.addEventListener('click', () => generarContraseña(document.getElementById('num_contraseñas').value));
//generarContraseña(num_contraseñas);