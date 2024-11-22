// Configuration object for the bio page
const config = {
  pageTitle: "bio",
  displayName: "local",
  description: "me",
  backgroundVideo: "default.mp4",
  blurIntensity: "5px", // Add blur intensity here (e.g., '10px' for a Gaussian blur)
};

// Apply configuration to the page
document.title = config.pageTitle;
document.getElementById("page-title").textContent = config.pageTitle;
document.getElementById("display-name").textContent = config.displayName;
document.getElementById("description").textContent = config.description;

// Update the background video
const bgVideo = document.getElementById("bg-video");
bgVideo.src = config.backgroundVideo;

// Apply blur intensity
bgVideo.style.filter = `blur(${config.blurIntensity})`;
