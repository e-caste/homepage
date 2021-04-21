const timeSpan = document.getElementById("time");
const video = document.getElementById("video");
const hello = document.getElementById("hello");

const videoPaths = {
    day: [],
    night: [],
};
const lat = -1;
const lon = -1;
const name = "";
const videoChangeFrequency = 15;  // minutes

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

// only set time every minute instead of every second
const callSetTime = () => {
    setTime();
    const s = new Date().getSeconds();
    setTimeout(() => {
        setTime();
        setInterval(setTime, 60 * 1000);
    }, (60 - s) * 1000);
}

const setTime = () => {
    const d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    timeSpan.textContent = `${h}:${m}`;
}

const setVideo = () => {
    const d = new Date();
    const sunrise = d.sunrise(lat, lon);
    const sunset = d.sunset(lat, lon);
    if (d >= sunrise && d < sunset) video.src = getRandomElement(videoPaths.day);
    else video.src = getRandomElement(videoPaths.night);
}

// call immediately
hello.innerText = `Hello ${name || "there"}`;
callSetTime();
setVideo();

// call repeatedly
setInterval(() => location.reload(true), videoChangeFrequency * 60 * 1000);
// setTime is also called every minute