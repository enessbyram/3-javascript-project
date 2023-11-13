//get varibles

const day = document.getElementById("days")
const hour = document.getElementById("hours")
const minute = document.getElementById("minutes")
const second = document.getElementById("seconds")

const weMet = "20 January 2024"

function countdown() {
    const ourMeetingDate = new Date(weMet);
    const currentDate = new Date();

    const totalSeconds = (ourMeetingDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds)

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);

