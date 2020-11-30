const newYears = "1 Jan 2021";

const dayTxt = document.getElementById("days")
const hourTxt = document.getElementById("hours")
const minsTxt = document.getElementById("mins")
const secsTxt = document.getElementById("secs")

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    
    
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    dayTxt.innerHTML = days;
    hourTxt.innerHTML = hours;
    minsTxt.innerHTML = minutes;
    secsTxt.innerHTML = seconds;
}



countdown();

setInterval(countdown, 1000);