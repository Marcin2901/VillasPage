const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const galleryImages = document.getElementsByClassName('img-box');

let currentImageIndex = 0;
const firstImageIndex = 0;
const lastImageIndex = galleryImages.length - 1;


function hideCurrentImage() {
    galleryImages[currentImageIndex].classList.remove('active')
}

nextBtn.addEventListener('click', () => {
    hideCurrentImage()
    if(currentImageIndex === lastImageIndex) {
        currentImageIndex = firstImageIndex;
    } else {
        currentImageIndex++;
    }
    galleryImages[currentImageIndex].classList.add('active')
})

prevBtn.addEventListener('click', () => {
    hideCurrentImage()
    if(currentImageIndex === firstImageIndex) {
        currentImageIndex = lastImageIndex;
    } else {
        currentImageIndex--;
    }
    galleryImages[currentImageIndex].classList.add('active')
})
