// Toggle profile dropdown
const profileLink = document.getElementById('profile-link');
const profileDropdown = document.getElementById('profile-dropdown');

profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(event) {
    if (!profileLink.contains(event.target) && !profileDropdown.contains(event.target)) {
        profileDropdown.style.display = 'none';
    }
});

// Load Upload Document Page Content dynamically
const uploadDocumentLink = document.getElementById('upload-document-link');
uploadDocumentLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadPageContent('upload.html', loadUploadScript);
});

// Function to load external page content dynamically
function loadPageContent(pageUrl, callback = null) {
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-area').innerHTML = data;
            if (callback) callback(); // Reinitialize scripts if needed
        })
        .catch(error => console.error('Error loading page:', error));
}

// Toggle sidebar visibility
const sidebar = document.querySelector('.sidebar');

profileLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Check if the sidebar is currently visible
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !profileLink.contains(event.target)) {
        sidebar.style.display = 'none';
    }
});
