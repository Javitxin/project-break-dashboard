let nowHours = new Date();
const date = document.getElementById('date');
const phraseOTDay = document.getElementById('phraseOTDay');

// Funcion reloj y frases
const relojDigital = () => {
    const reloj = document.getElementById('reloj');

    let hours = nowHours.getHours();
    let minutes = nowHours.getMinutes();
    let seconds = nowHours.getSeconds();

    hours = (hours <= 9) ? (`0${hours}`) : hours;
    minutes = (minutes <= 9) ? (`0${minutes}`) : minutes;
    seconds = (seconds <= 9) ? (`0${seconds}`) : seconds;

    let endHours = `${hours}:${minutes}:${seconds}`;


    let hoursMinutes = `${hours}:${minutes}`;

    if ((hoursMinutes >= '07:01') && (hoursMinutes <= '12:00')) {
        phraseOTDay.innerHTML = 'Buenos días, desayuna fuerte y a darle al código';
    } else if ((hoursMinutes >= '12:01') && (hoursMinutes <= '14:00')) {
        phraseOTDay.innerHTML = 'Echa un rato más pero no olvides comer';
    } else if ((hoursMinutes >= '14:01') && (hoursMinutes <= '16:00')) {
        phraseOTDay.innerHTML = 'Espero que hayas comido';
    } else if ((hoursMinutes >= '16:01') && (hoursMinutes <= '18:00')) {
        phraseOTDay.innerHTML = 'Buenas tardes, el último empujón';
    } else if ((hoursMinutes >= '18:01') && (hoursMinutes <= '22:00')) {
        phraseOTDay.innerHTML = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else if ((hoursMinutes >= '22:01') && (hoursMinutes <= '00:00')) {
        phraseOTDay.innerHTML = 'Buenas noches, es hora de pensar en parar y descansar';
    } else if ((hoursMinutes >= '00:01') && (hoursMinutes <= '07:00')) {
        phraseOTDay.innerHTML = 'Es hora de descansar. Apaga y sigue mañana';
    }
    reloj.innerHTML = endHours;
    setTimeout('relojDigital()', 1000);
}
relojDigital();
// Fecha:

let day = nowHours.getDay();
let month = nowHours.getMonth();
let year = nowHours.getFullYear();

day = (day <= 9) ? (`0${day}`) : day;
month = (month <= 9) ? (`0${month}`) : month;
let endDate = `${day}/${month}/${year}`;
date.innerHTML = endDate;