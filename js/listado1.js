const inpAñadir = document.getElementById('inpAñadir');
const list_enlace = document.getElementById('list_enlace');


document.addEventListener('DOMContentLoaded', () => {
    pintarHtmlWebs()
});

inpAñadir.addEventListener('click', () => {
    comprobarDatos()
});

// Función comprobar datos: 
function comprobarDatos() {
    let inpDescrip = document.getElementById('inpDescrip').value;
    let inpNombre = document.getElementById('inpNombre').value;

    if ((inpDescrip == '') || (inpNombre == '')) {
        window.alert('Algun campo está vacio');
    } else {
        console.log('funciona');
        guardarDatos();
    }
}

function guardarDatos() {
    let tituloWeb = document.getElementById('inpDescrip').value;
    let direcWeb = document.getElementById('inpNombre').value;

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

    document.getElementById('inpDescrip').value = '';
    document.getElementById('inpNombre').value = '';

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
        list_enlace.innerHTML = '';
        //document.getElementById('list_enlace').innerHTML = '';

        arrObjWebs.forEach((item, i) => {
            // Recojo cada valor del obj 

            let pintarDes = item.descripcion;
            let pintarWeb = item.direccionWeb;

            // pinto en el HTML

            //document.getElementById('list_enlace').innerHTML += `
            list_enlace.innerHTML += `
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