const url = window.location.hostname;
let color = "";

if (url.startsWith("priority.")) {
    color = "rgba(255, 99, 71, 0.2)"; // Light red - Production
} else if (url.startsWith("dev.")) {
    color = "rgba(50, 205, 50, 0.2)"; // Green - Development
} else if (url.startsWith("test.")) {
    color = "rgba(255, 255, 0, 0.2)"; // Yellow - Testing
}

if (color) {
    document.body.style.backgroundColor = color;

    // Function to change header color
    function changeHeaderColor() {
        const header = document.querySelector(".bottomHeader");
        if (header) {
            header.style.backgroundColor = color;
            // If header is found, disconnect the observer
            observer.disconnect();
        }
    }

    // Check if header exists and change color immediately
    changeHeaderColor();

    // If header is not loaded immediately, observe DOM changes
    let timeout;
    const observer = new MutationObserver(() => {
        // Add debounce to prevent excessive calls
        clearTimeout(timeout);
        timeout = setTimeout(() => changeHeaderColor(), 100);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Stop observing after 15 seconds
    setTimeout(() => observer.disconnect(), 15000);
}