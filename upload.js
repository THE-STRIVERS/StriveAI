function loadUploadScript() {
    const fileInput = document.getElementById("doc-upload");
    const dragArea = document.getElementById("upload-area");
    const verifyBtn = document.getElementById("verify-btn");
    const progressBar = document.getElementById("progress-bar");
    const fileNameDisplay = document.getElementById("file-name");
    const resultArea = document.getElementById('verification-result');
    const flowMessage = document.getElementById('flow-message');
    const loader = document.getElementById('loader');
    
    verifyBtn.addEventListener("click", () => fileInput.click());
  
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        fileNameDisplay.textContent = file.name;
        flowMessage.textContent = "File selected. Starting upload...";
        uploadFile(file);
      }
    });
  
    dragArea.addEventListener("dragover", (event) => {
      event.preventDefault();
      dragArea.classList.add("active");
    });
  
    dragArea.addEventListener("dragleave", () => dragArea.classList.remove("active"));
  
    dragArea.addEventListener("drop", (event) => {
      event.preventDefault();
      dragArea.classList.remove("active");
      const file = event.dataTransfer.files[0];
      if (file) {
        fileNameDisplay.textContent = file.name;
        flowMessage.textContent = "File dropped. Starting upload...";
        uploadFile(file);
      }
    });
  
    function uploadFile(file) {
      loader.style.display = 'block';
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
          loader.style.display = 'none';
          progressBar.style.width = '100%';
          flowMessage.textContent = "Upload complete. Verifying document...";
          setTimeout(() => {
            flowMessage.textContent = "Document Verified Successfully!";
          }, 2000);
        } else {
          progress += 10;
          progressBar.style.width = `${progress}%`;
          flowMessage.textContent = `Uploading... ${progress}%`;
        }
      }, 200);
    }
  }
  
