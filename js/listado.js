const btn_añadir_enlace = document.getElementById('btn_añadir_enlace');
const list_enlace = document.getElementById('list_enlace');

document.addEventListener('DOMContentLoaded', () => {
    pintarHtmlWebs()
});

btn_añadir_enlace.addEventListener('click', () => {
    comprobarDatos()
});

function comprobarDatos() {

    // compruebo si están vacios: 
    let descWeb = document.getElementById('enlcDesc').value;
    let nomWeb = document.getElementById('enlcNombre').value;

    if ((descWeb == '') || (nomWeb == '')) {
        window.alert('Algun campo está vacio');
    } else {
        console.log('funciona');
        guardarDatos();
    }
}

function guardarDatos() {
    let tituloWeb = document.getElementById('enlcDesc').value;
    let direcWeb = document.getElementById('enlcNombre').value;

    let objWeb = {
        descripcion: tituloWeb,
        direccionWeb: direcWeb
    };
    console.log(objWeb);
    // compruebo si hay algo almacenado en local de  mi objWeb 

    if (localStorage.getItem('objWebs') == null) {
        let arrObjWebs = [];
        arrObjWebs.push(objWeb);
        localStorage.setItem('objWebs', JSON.stringify(arrObjWebs));
    } else {
        let arrObjWebs = JSON.parse(localStorage.getItem('objWebs'));
        arrObjWebs.push(objWeb);
        localStorage.setItem('objWebs', JSON.stringify(arrObjWebs));
    }
    // funcion de pintar en el html 
    pintarHtmlWebs();

    // limpio los cuadros de texto 

    document.getElementById('enlcDesc').value = '';
    document.getElementById('enlcNombre').value = '';

}

// función pintarHtmlWens 
function pintarHtmlWebs() {
    // recogo los datos del local
    if (localStorage.getItem('objWebs') == 'null') {
        let objWeb = {
            descripcion: tituloWeb,
            direccionWeb: direcWeb
        };
        let arrObjWebs = [];
        arrObjWebs.push(objWeb);
        localStorage.setItem('objWebs', JSON.stringify(arrObjWebs));
    } else {

        let arrObjWebs = JSON.parse(localStorage.getItem('objWebs'));
        document.getElementById('list_enlace').innerHTML = '';

        arrObjWebs.forEach((item, i) => {
            // Recojo cada valor del obj 

            let pintarDes = item.descripcion;
            let pintarWeb = item.direccionWeb;

            // pinto en el HTML 

            document.getElementById('list_enlace').innerHTML += `
                <li class=hidden> ${pintarDes}
                <img class=cerrar src='./assets/img/iconoCerrar.png' alt='cerrar ventana' onclick='borrarObjWeb(${i})' >
                </li>
                `;
        })
    }
}

// función Borrar 

function borrarObjWeb(posiciondElemento) {
    // obtengo la información
    let arrObjWebs = JSON.parse(localStorage.getItem('objWebs'));
    // borro la posición del arreglo que recibí del onclick 
    arrObjWebs.splice(posiciondElemento, 1);
    // guardo el nuevo arrObj con el elemento borrado 
    localStorage.setItem('objWebs', JSON.stringify(arrObjWebs));

    pintarHtmlWebs();
}