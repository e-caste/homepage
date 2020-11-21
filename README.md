## My browser homepage

![screenshot](readme/screenshot.png)

This minimal browser homepage works based on the fact that, since the background video is stored on the local machine, it does not need to be optimized.  
As an example, some of the videos I am using are 100 Mbps 4K DJI Mavic Air mp4s.

### Features

This homepage provides:
1. auto-updating videos based on the current hour of the day. If it is between sunrise and sunset, you can choose brighter videos, while you can set darker videos for the night.
2. the current time, for your timezone
3. a DuckDuckGo searchbar
4. some example icons with links to your frequently accessed websites (easily customizable in `index.html`) 

All in a minimal self-contained package, with no external libraries or API calls, granting a fully offline-compatible experience.

#### Usage
Just set the videoPaths, lat(itude), lon(gitude), name, and videoChangeFrequency variables in `js/script.js`.  
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