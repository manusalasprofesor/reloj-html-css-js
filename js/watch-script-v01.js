// Inicializar el tiempo cuando se cargue la ventana
window.addEventListener('load', initTime);

function initTime(){
    setInterval(updateTime, 1000);
}


// Actualización de los datos de hora/fecha
function updateTime(){
    // Detectamos la fecha del sistema
    let dateSystem = new Date();

    // Detectar los elementos del DOM
    const hourElement = document.querySelector('#hour');
    const minuteElement = document.querySelector('#minute');
    const secondElement = document.querySelector('#second');
    const dateElement = document.querySelector('#date');
    const dayElement = document.querySelector('#day');

    // Función del reloj
    let hours = dateSystem.getHours();
    let minutes = dateSystem.getMinutes();
    let seconds = dateSystem.getSeconds();
    // Condicionales
    if (hours >= 0 && hours <= 9){
        hours = '0' + hours;
    }

    if (minutes >= 0 && minutes <= 9){
        minutes = '0' + minutes;
    }

    if (seconds >= 0 && seconds <= 9){
        seconds = '0' + seconds;
    }

    hourElement.innerHTML = hours;
    minuteElement.innerHTML = minutes;
    secondElement.innerHTML = seconds;

    // Función del calendario
    let date = dateSystem.getDate();
    let month = dateSystem.getMonth();
    let year = dateSystem.getFullYear();

    // Condicionales para el día y el mes
    if (date >= 0 && date <= 9){
        date = '0' + date;
    }
    if (month >= 0 && month <= 9){
        month = '0' + month;
    }

    dateElement.innerHTML = `${date} / ${month} / ${year}`;

    // Día de la semana
    let dayNumber = dateSystem.getDay();
    let dayWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    dayElement.innerHTML = dayWeek[dayNumber];
}