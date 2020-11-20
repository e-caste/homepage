const timeSpan = document.getElementById('time');

function time() {
    const d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    timeSpan.textContent = `${h}:${m}`;
}

setInterval(time, 1000);