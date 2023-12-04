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

let slideIndex = 1;

function plusSlides(n, event) {
    // Prevent event propagation to avoid triggering the openLightbox function
    event.stopPropagation();

    // Save the current gallery state
    const galleryState = saveGalleryState();

    // Update the slide index
    slideIndex += n;

    // Restore the gallery state
    restoreGalleryState(galleryState);

    // Show the slides
    showSlides(slideIndex);
}

function saveGalleryState() {
    const slides = document.querySelectorAll('.gallery-item');
    const state = [];

    for (let i = 0; i < slides.length; i++) {
        state.push(slides[i].style.display);
    }

    return state;
}

function restoreGalleryState(state) {
    const slides = document.querySelectorAll('.gallery-item');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = state[i];
    }
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.gallery-item');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Update the lightbox image source
    const currentImage = slides[slideIndex - 1].getAttribute('href');
    document.getElementById('lightbox-image').src = currentImage;
}




