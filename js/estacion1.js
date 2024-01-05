const ciudaPais = document.getElementById('idCiudadPais');
const estadoClima = document.getElementById('idEstadoClima');
const imgCondicion = document.getElementById('idImgCondicion');
const iconoGrados = document.getElementById('idIconoGrados');

const grados = document.getElementById('idGrados');
const precipitaciones = document.getElementById('idPrecipitaciones');
const humedad = document.getElementById('idHumedad');
const viento = document.getElementById('idViento');
//const previsionHoras = document.getElementById('previsionHoras');

const list_horas = document.getElementById('idList-horas');
const list_img = document.getElementById('idList-img');
const list_grados = document.getElementById('idList-grados');

const apiKey = '9242d0ea9a694b13b49181411232112';
const apiCiudad = 'Leon Spain';

function getTiempo() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey} &q=${apiCiudad}&days=1&aqi=no&alerts=no`)
        .then((response) => response.json())
        .then(data => {
            const { location, current, forecast } = data;

            const ciudad = location.name;
            const pais = location.country;
            const clima = current.condition.text;
            const imgTemp = current.condition.icon;
            const urlImgTemp = `https:${imgTemp}`;
            const numGrados = current.temp_c;
            const lluvia = current.precip_in;
            const humed = current.humidity;
            const vientKmh = current.wind_kph;


            ciudaPais.textContent = `${ciudad}/${pais}`;
            estadoClima.textContent = `${clima}`;
            imgCondicion.setAttribute('src', urlImgTemp);
            imgCondicion.setAttribute('alt', current.condition.text);

            grados.textContent = `${numGrados}`;
            precipitaciones.textContent = `Precipitaciones: ${lluvia}%`;
            humedad.textContent = `Humedad: ${humed}%`;
            viento.textContent = `Viento: ${vientKmh}Kmh`;

            let arrForecast = [];
            arrForecast = forecast.forecastday[0].hour;

            for (i = 0; i < arrForecast.length; i++) {
                let fecha = arrForecast[i].time;
                let hora = fecha.slice(-5);

                list_horas.innerHTML += `<p>${hora}</p>`;
                list_img.innerHTML += `<img src=https:${arrForecast[i].condition.icon} alt='icono'/>`;
                list_grados.innerHTML += `<p>${arrForecast[i].temp_c}&#8451</p>`;
            }
        })
        .catch(error => {
            console.log('Error en la obteción de los datos', error)
        });
}
getTiempo();