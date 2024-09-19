// Reinitialize the upload functionality
function loadUploadScript() {
    const fileInput = document.getElementById("file-input");
    const dragArea = document.getElementById("drag-area");
    const browseBtn = document.getElementById("browse-btn");
    const progressBar = document.getElementById("progress");
    const fileNameDisplay = document.getElementById("file-name");

    browseBtn.addEventListener("click", () => {
        fileInput.click(); // Trigger file input
    });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            fileNameDisplay.textContent = file.name; // Show file name
            uploadFile(file); // Start upload process
        }
    });

    dragArea.addEventListener("dragover", (event) => {
        event.preventDefault(); // Prevent default behavior
        dragArea.classList.add("active"); // Add visual cue
    });

    dragArea.addEventListener("dragleave", () => {
        dragArea.classList.remove("active"); // Remove visual cue when dragging stops
    });

    dragArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dragArea.classList.remove("active"); // Remove visual cue after drop
        const file = event.dataTransfer.files[0]; // Get the dropped file
        if (file) {
            fileNameDisplay.textContent = file.name; // Show file name
            uploadFile(file); // Start upload process
        }
    });

    function uploadFile(file) {
        let progress = 0; // Initialize progress
        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval); // Stop when 100% is reached
            } else {
                progress += 10; // Increment progress by 10%
                progressBar.style.width = `${progress}%`; // Update progress bar width
            }
        }, 200); // Simulate every 200ms
    }
}
