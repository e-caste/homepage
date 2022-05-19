// fill with your custom info
const videoPaths = {
    day: [],
    night: [],
};
const lat = -1;
const lon = -1;
const name = "";
const videoChangeFrequency = 15;  // minutes
const urlHeimdall = "";
const urlGitHub = "";
const urlNextcloud = "";
const urlJitsi = "";
const urlGrafana = "";


const timeSpan = document.getElementById("time");
const video = document.getElementById("video");
const updateVideosButton = document.getElementById("update-videos");
const hello = document.getElementById("hello");
const aHeimdall = document.getElementById("link-heimdall");
const aGitHub = document.getElementById("link-github");
const aNextcloud = document.getElementById("link-nextcloud");
const aJitsi = document.getElementById("link-jitsi");
const aGrafana = document.getElementById("link-grafana");

const updateVideosMessage = "This button will download all the Apple Aerial videos.\n⚠️ It could require ~40 GBs! ⚠️\n" +
    "For an easier download experience, in Safari, go to Preferences -> Websites -> Downloads " +
    "and set Allow until finished.";

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

const updateVideos = async () => {

    const download = async (filename, videoURL) => {
        const video = await fetch(videoURL);
        const videoBlob = await video.blob();
        const downloadURL = URL.createObjectURL(videoBlob);

        const a = document.createElement("a");
        a.href = downloadURL;
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadURL);
    }

    let json;
    try {
        json = await (await fetch("https://bzamayo.com/extras/apple-tv-screensavers.json")).json();
        console.log(json);
    } catch {
        alert("The Apple Aerials metadata could not be retrieved.\nIn Safari, please tick:\nDevelop -> " +
            "Disable Local File Restrictions\nand reload the page.");
        return;
    }

    let videosNumber = 0;
    for (let item of json.data) {
        videosNumber += item.screensavers.length;
    }

    const hasConfirmedDownload = confirm(`${updateVideosMessage}\n You are trying to download ${videosNumber} videos. Proceed?`);

    if (hasConfirmedDownload) {
        alert("Initiating download...")
        let downloadedVideosNumber = 0;
        for (let item of json.data) {
            console.log(item.name);
            // download all the screensavers
            for (let [index, screensaver] of item.screensavers.entries()) {
                downloadedVideosNumber++;
                console.log(`${downloadedVideosNumber} / ${videosNumber}`, screensaver);
                // console.log(screensaver);
                await download(`${item.name.replaceAll(" ", "_")}_${index}.mov`, screensaver.videoURL);
            }
        }
        alert("Download finished! You will find all the videos in your ~/Downloads folder.")
    } else {
        alert("Download has been aborted as asked.")
    }
}

// call immediately
updateVideosButton.title = updateVideosMessage;
hello.innerText = `Hello ${name || "there"}`;
aHeimdall.href = urlHeimdall;
aGitHub.href = urlGitHub;
aNextcloud.href = urlNextcloud;
// aJitsi.href = urlJitsi;
aGrafana.href = urlGrafana;

callSetTime();
setVideo();

// call repeatedly
setInterval(() => location.reload(true), videoChangeFrequency * 60 * 1000);
// setTime is also called every minute