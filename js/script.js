const timeSpan = document.getElementById("time");
const video = document.getElementById("video");

const videoPaths = {
    day: [],
    night: [],
}
const lat = -1;
const lon = -1;
const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const setTime = () => {
    const d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    timeSpan.textContent = `${h}:${m}`;
}

// change video every hour
const setVideo = () => {
    const d = new Date();
    const sunrise = d.sunrise(lat, lon);
    const sunset = d.sunset(lat, lon);
    if (d >= sunrise && d < sunset) video.src = getRandomElement(videoPaths.day);
    else video.src = getRandomElement(videoPaths.night);
}

// call immediately
setTime();
setVideo();

// call repeatedly
setInterval(setTime, 1000);
setInterval(setVideo, 15 * 60 * 1000);