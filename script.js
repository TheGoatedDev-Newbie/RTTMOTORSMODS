// Add information about the website
const info = document.createElement("p");
info.textContent = `The Mod Developers specialize in creating high-quality Euro Truck Simulator 2 mods for an enhanced gaming experience.
We offer a wide range of mods, including trucks, buses, trailers, maps, and more.
The Developers are dedicated to providing the best possible mods for our users. Their mods are constantly being updated to ensure compatibility with the latest game versions and to add new features.`;
document.body.appendChild(info);

function moveSlide(button, direction) {
    const carousel = button.parentElement.querySelector('.carousel-images');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;

    // Get the current transform value
    const currentTransform = getComputedStyle(carousel).transform;
    const matrixValues = currentTransform.match(/matrix.*\((.+)\)/);
    const currentTranslateX = matrixValues ? parseFloat(matrixValues[1].split(', ')[4]) : 0;

    // Calculate the width of one image
    const imageWidth = images[0].clientWidth;

    // Calculate the new translateX value
    let newTranslateX = currentTranslateX + direction * imageWidth;

    // Prevent sliding beyond the first or last image
    const maxTranslateX = 0;
    const minTranslateX = -(imageWidth * (totalImages - 1));
    if (newTranslateX > maxTranslateX) newTranslateX = minTranslateX; // Loop to the last image
    if (newTranslateX < minTranslateX) newTranslateX = maxTranslateX; // Loop to the first image

    // Apply the new transform
    carousel.style.transform = `translateX(${newTranslateX}px)`;
}