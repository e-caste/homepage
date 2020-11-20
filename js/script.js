const timeSpan = document.getElementById("time");
const videoSource = document.getElementById("video");

const videoPaths = {
    day: [],
    night: [],
}

const d = new Date();

const setTime = () => {
    let m = d.getMinutes();
    let h = d.getHours();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    timeSpan.textContent = `${h}:${m}`;
}

// change video every hour
const setVideo = () => {
    let h = d.getHours();
    if (h <)
}

// call immediately
setTime();
setVideo();

// call repeatedly
setInterval(setTime, 1000);
setInterval(setVideo, 60 * 1000);