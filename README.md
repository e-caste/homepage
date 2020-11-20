## My browser homepage

![screenshot](readme/screenshot.png)

This minimal browser homepage works based on the fact that, since the background video is stored on the local machine, it does not need to be optimized at all.  
As an example, here I am using a DJI Mavic Air 100Mbps 4K video.

### Features

This homepage now provides auto-updating videos based on the current hour of the day. If it is between sunrise and sunset, you can choose brighter videos, while you can set darker videos for the night.  

#### Usage
Just set the videoPaths, lat(itude), and lon(gitude) variables in `js/script.js`.  
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
}
const lat = 66.545181;
const lon = 25.847215;
```