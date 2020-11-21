## My browser homepage

![screenshot](readme/screenshot.png)

### Features

This homepage provides:
1. auto-updating videos based on the current hour of the day. If it is between sunrise and sunset, you can choose brighter videos, while you can set darker videos for the night.
2. the current time, for your timezone
3. a DuckDuckGo searchbar
4. some example icons with links to your frequently accessed websites (easily customizable in `index.html`) 

All in a minimal self-contained package, with no external libraries or API calls, granting a fully offline-compatible experience.

#### Usage
Just set the `videoPaths`, `lat`itude, `lon`gitude, `name`, and `videoChangeFrequency` variables in `js/script.js`.  
Example:
```javascript
const videoPaths = {
    day: [
        "/home/e-caste/videos/brightvideo.mp4",
        "brightvideo2.mp4",  // this video is inside this repo directory
    ],
    night: [
        "/home/e-caste/videos/darkvideo.mov",
    ],
};
const lat = 66.545181;
const lon = 25.847215;
const name = "Joe";
const videoChangeFrequency = 20;  // minutes
```

📼 You simply need to bring your own videos.  
Since these are supposed to be stored locally on your machine, you don't have to optimize them like you would if this was an Internet website.  
I have even tested 100 Mbps 4K videos with a very small impact on resource usage.