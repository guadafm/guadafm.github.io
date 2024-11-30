// Definir la fecha objetivo
const countDownDate = new Date("Dec 14, 2024 21:00:00").getTime();

// Actualizar la cuenta atrás cada segundo
const x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Cálculos de días, horas, minutos y segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar la cuenta atrás en la página
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta atrás termina, mostrar mensaje
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown h3").innerHTML = "¡Es hora de la fiesta!";
    }
}, 1000);

function setReminder() {
    alert("¡Recordatorio agendado!");
}