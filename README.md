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
Just set the `videoPaths`, `lat`itude, `lon`gitude, `name`, `videoChangeFrequency`, and `url*` variables in `js/script.js`.  
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
const urlHeimdall = "http://localhost:8080";
const urlGitHub = "https://github.com/e-caste/homepage";
const urlNextcloud = "https://cloud.nextcloud.com";
const urlJitsi = "https://jitsi.org";
const urlGrafana = "https://grafana.com";
```

📼 You simply need to bring your own videos.  
Since these are supposed to be stored locally on your machine, you don't have to optimize them like you would if this was an Internet website.  
I have even tested 100 Mbps 4K videos with a very small impact on resource usage.  
From 2022-05-19, you can also simply press the button in the top right to automatically download all Apple aerial videos. My split suggestion between videos for day and night is [here](#aerial-videos-split-suggestion).

✅ The final step is setting the `index.html` file contained in this repository as the homepage (some call it startpage) in your browser's settings. Now when you will open a new browser window or tab you will see this page!

##### Aerial videos split suggestion

```js
const videoPaths = {
    day: [
        "/path/to/Aerials/Alaskan_Jellies_0.mov",
        "/path/to/Aerials/Alaskan_Jellies_1.mov",
        "/path/to/Aerials/Barracuda_0.mov",
        "/path/to/Aerials/Bumpheads_0.mov",
        "/path/to/Aerials/California_Dolphins_0.mov",
        "/path/to/Aerials/California_Kelp_Forest_0.mov",
        "/path/to/Aerials/China_0.mov",
        "/path/to/Aerials/China_1.mov",
        "/path/to/Aerials/China_2.mov",
        "/path/to/Aerials/China_4.mov",
        "/path/to/Aerials/China_5.mov",
        "/path/to/Aerials/China_6.mov",
        "/path/to/Aerials/Costa_Rica_Dolphins_0.mov",
        "/path/to/Aerials/Cownose_Rays_0.mov",
        "/path/to/Aerials/Dubai_1.mov",
        "/path/to/Aerials/Dubai_2.mov",
        "/path/to/Aerials/Dubai_3.mov",
        "/path/to/Aerials/Dubai_4.mov",
        "/path/to/Aerials/Grand_Canyon_0.mov",
        "/path/to/Aerials/Grand_Canyon_1.mov",
        "/path/to/Aerials/Grand_Canyon_2.mov",
        "/path/to/Aerials/Grand_Canyon_3.mov",
        "/path/to/Aerials/Grand_Canyon_4.mov",
        "/path/to/Aerials/Gray_Reef_Sharks_0.mov",
        "/path/to/Aerials/Greenland_0.mov",
        "/path/to/Aerials/Greenland_1.mov",
        "/path/to/Aerials/Greenland_2.mov",
        "/path/to/Aerials/Hawaii_0.mov",
        "/path/to/Aerials/Hawaii_1.mov",
        "/path/to/Aerials/Hawaii_2.mov",
        "/path/to/Aerials/Hawaii_3.mov",
        "/path/to/Aerials/Hawaii_4.mov",
        "/path/to/Aerials/Hong_Kong_1.mov",
        "/path/to/Aerials/Hong_Kong_2.mov",
        "/path/to/Aerials/Hong_Kong_3.mov",
        "/path/to/Aerials/Humpback_Whale_0.mov",
        "/path/to/Aerials/Iceland_0.mov",
        "/path/to/Aerials/Iceland_1.mov",
        "/path/to/Aerials/Iceland_2.mov",
        "/path/to/Aerials/Iceland_3.mov",
        "/path/to/Aerials/Iceland_4.mov",
        "/path/to/Aerials/Iceland_5.mov",
        "/path/to/Aerials/Jacks_0.mov",
        "/path/to/Aerials/Liwa_0.mov",
        "/path/to/Aerials/Liwa_1.mov",
        "/path/to/Aerials/London_0.mov",
        "/path/to/Aerials/London_1.mov",
        "/path/to/Aerials/London_2.mov",
        "/path/to/Aerials/Los_Angeles_0.mov",
        "/path/to/Aerials/Los_Angeles_1.mov",
        "/path/to/Aerials/Los_Angeles_3.mov",
        "/path/to/Aerials/Los_Angeles_4.mov",
        "/path/to/Aerials/Los_Angeles_5.mov",
        "/path/to/Aerials/New_York_1.mov",
        "/path/to/Aerials/New_York_2.mov",
        "/path/to/Aerials/New_York_3.mov",
        "/path/to/Aerials/Nile_Delta_0.mov",
        "/path/to/Aerials/Palau_Coral_0.mov",
        "/path/to/Aerials/Palau_Jellies_0.mov",
        "/path/to/Aerials/Palau_Jellies_1.mov",
        "/path/to/Aerials/Palau_Jellies_2.mov",
        "/path/to/Aerials/Patagonia_0.mov",
        "/path/to/Aerials/Patagonia_1.mov",
        "/path/to/Aerials/Patagonia_2.mov",
        "/path/to/Aerials/Patagonia_3.mov",
        "/path/to/Aerials/Red_Sea_Coral_0.mov",
        "/path/to/Aerials/Sahara_and_Italy_0.mov",
        "/path/to/Aerials/San_Francisco_0.mov",
        "/path/to/Aerials/San_Francisco_2.mov",
        "/path/to/Aerials/San_Francisco_3.mov",
        "/path/to/Aerials/San_Francisco_4.mov",
        "/path/to/Aerials/San_Francisco_5.mov",
        "/path/to/Aerials/San_Francisco_6.mov",
        "/path/to/Aerials/Scotland_0.mov",
        "/path/to/Aerials/Scotland_1.mov",
        "/path/to/Aerials/Scotland_2.mov",
        "/path/to/Aerials/Sea_Stars_0.mov",
        "/path/to/Aerials/Seals_0.mov",
        "/path/to/Aerials/South_Africa_to_North_Asia_0.mov",
        "/path/to/Aerials/Southern_California_to_Baja_0.mov",
        "/path/to/Aerials/Tahiti_Waves_0.mov",
        "/path/to/Aerials/Tahiti_Waves_1.mov",
        "/path/to/Aerials/West_Africa_to_the_Alps_0.mov",
        "/path/to/Aerials/Yosemite_0.mov",
        "/path/to/Aerials/Yosemite_1.mov",
        "/path/to/Aerials/Yosemite_2.mov",
        "/path/to/Aerials/Yosemite_3.mov",
        "/path/to/Aerials/Yosemite_4.mov",
        "/path/to/Aerials/Yosemite_5.mov",
        "/path/to/Aerials/Yosemite_6.mov",
        ],
    night: [
        "/path/to/Aerials/Africa_Night_0.mov",
        "/path/to/Aerials/Africa_and_the_Middle_East_0.mov",
        "/path/to/Aerials/Antarctica_0.mov",
        "/path/to/Aerials/Atlantic_Ocean_to_Spain_and_France_0.mov",
        "/path/to/Aerials/Australia_0.mov",
        "/path/to/Aerials/California_to_Vegas_0.mov",
        "/path/to/Aerials/Caribbean_0.mov",
        "/path/to/Aerials/Caribbean_1.mov",
        "/path/to/Aerials/Caribbean_Day_0.mov",
        "/path/to/Aerials/China_3.mov",
        "/path/to/Aerials/Dubai_0.mov",
        "/path/to/Aerials/Hong_Kong_0.mov",
        "/path/to/Aerials/Iran_and_Afghanistan_0.mov",
        "/path/to/Aerials/Ireland_to_Asia_0.mov",
        "/path/to/Aerials/Italy_to_Asia_0.mov",
        "/path/to/Aerials/Kelp_0.mov",
        "/path/to/Aerials/Korea_and_Japan_Night_0.mov",
        "/path/to/Aerials/London_3.mov",
        "/path/to/Aerials/Los_Angeles_2.mov",
        "/path/to/Aerials/New_York_0.mov",
        "/path/to/Aerials/New_York_Night_0.mov",
        "/path/to/Aerials/New_Zealand_0.mov",
        "/path/to/Aerials/North_America_Aurora_0.mov",
        "/path/to/Aerials/San_Francisco_1.mov",
    ],
};
```