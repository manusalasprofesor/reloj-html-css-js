// Detectar los elementos del DOM
const hourElement = document.querySelector('#hour');
const minuteElement = document.querySelector('#minute');
const secondElement = document.querySelector('#second');
const dateElement = document.querySelector('#date');
const dayElement = document.querySelector('#day');

// Array con datos de la semana y el mes
let dayWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let monthWord = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Inicializar el tiempo cuando se cargue la ventana
window.addEventListener('load', () =>{
    setInterval(updateTime, 1000);
});


// Actualización de los datos de hora/fecha
const updateTime = () =>{
    // Detectamos la fecha del sistema
    let dateSystem = new Date();

    // Función del reloj
    let hours = dateSystem.getHours();
    let minutes = dateSystem.getMinutes();
    let seconds = dateSystem.getSeconds();
    
    // Condicional que evalúa el argumento si tiene dos cifras o no
    const condicional = (argumento) =>{
        if (argumento >= 0 && argumento <= 9){
            return('0' + argumento);
        }else{
            return(argumento);
        }
    }

    hourElement.innerHTML = condicional(hours);
    minuteElement.innerHTML = condicional(minutes);
    secondElement.innerHTML = condicional(seconds);

    // Función del calendario
    let date = dateSystem.getDate();
    let month = dateSystem.getMonth();
    let year = dateSystem.getFullYear();


    dateElement.innerHTML = `${condicional(date)} de ${monthWord[month]} de ${year}`;

    // Día de la semana
    let dayNumber = dateSystem.getDay();
    dayElement.innerHTML = dayWeek[dayNumber];
};

