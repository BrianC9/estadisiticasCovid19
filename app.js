window.onload = iniciar;
let inputFecha = document.getElementById("inputFecha");
inputFecha.max = new Date().toISOString().substring(0, 10);
function iniciar() {
    const btnCargar = document.getElementById("btnCargar");
    btnCargar.addEventListener("click", clickBtn)



}



async function cargarUrl(url) {
    let response = await fetch(url);
    return response.json();
}

async function clickBtn() {

    let paisSeleccionado = document.getElementById("selectPais").value;
    let fechaSeleccionada = document.getElementById("inputFecha").value;

    let url = `https://api.covid19tracking.narrativa.com/api/${fechaSeleccionada}/country/${paisSeleccionado}`
    let datosJson = await cargarUrl(url);


    let estadisticas = datosJson.dates[fechaSeleccionada].countries[paisSeleccionado];

    document.getElementById("today_confirmed").innerText = estadisticas.today_confirmed ??= "0";
    document.getElementById("today_deaths").innerText = estadisticas.today_deaths ??= "0";
    document.getElementById("today_intensive_care").innerText = estadisticas.today_intensive_care ??= "0";
    document.getElementById("today_new_confirmed").innerText = estadisticas.today_new_confirmed ??= "0";
    document.getElementById("today_new_deaths").innerText = estadisticas.today_new_deaths ??= "0";
    document.getElementById("today_new_intensive_care").innerText = estadisticas.today_new_intensive_care ??= "0";
    document.getElementById("today_new_open_cases").innerText = estadisticas.today_new_open_cases ??= "0";
    document.getElementById("today_new_recovered").innerText = estadisticas.today_new_recovered ??= "0";
    document.getElementById("today_new_total_hospitalised_patients").innerText = today_new_total_hospitalised_patients.today_confirmed ??= "0";
    document.getElementById("today_open_cases").innerText = estadisticas.today_open_cases ??= "0";
    document.getElementById("source").innerText = estadisticas.source ??= "0";
}