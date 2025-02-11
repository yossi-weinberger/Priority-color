chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("Priority Color extension installed successfully!");
  } else if (details.reason === "update") {
    console.log(`Priority Color extension updated to version ${chrome.runtime.getManifest().version}`);
  }
});