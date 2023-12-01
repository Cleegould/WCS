function openLightbox(element) {
    // Get the image source from the clicked element
    var imageUrl = element.href;

    // Set the lightbox image source
    document.getElementById('lightbox-image').src = imageUrl;

    // Display the lightbox
    document.getElementById('lightbox').style.display = 'flex';

    // Prevent default link behavior
    event.preventDefault();
}

function closeLightbox() {
    // Hide the lightbox
    document.getElementById('lightbox').style.display = 'none';
}
// Add this function to your JavaScript file
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
