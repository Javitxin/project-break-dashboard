const btn_añadir_enlace = document.getElementById('btn_añadir_enlace');
const list_enlace = document.getElementById('list_enlace');

// función guardar datos 
/*
const guardarDatos = (datos) => {
}*/
let listado = [];
btn_añadir_enlace.addEventListener('click', function() {
    const enlcDesc = document.getElementById('enlcDesc').value;
    const enlcNombre = document.getElementById('enlcNombre').value;

    console.log(enlcDesc);
    console.log(enlcNombre);
    listado.push(enlcDesc, enlcNombre);
    console.log(listado);
    localStorage.setItem('dato', JSON.stringify(listado));
    list_enlace.innerHTML += `<li class=hidden> ${enlcDesc} </li>`;
    let descripcion = JSON.parse(localStorage.getItem('dato'));
    console.log(descripcion);
    document.getElementById('enlcDesc').value = '';
    document.getElementById('enlcNombre').value = '';

})