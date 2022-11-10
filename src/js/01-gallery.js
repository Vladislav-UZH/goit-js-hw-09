
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
function markup() {
    return galleryItems.map(({ description, preview, original }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `).join('');
}
function getImgMarkupToDom() {
    galleryDiv.insertAdjacentHTML('beforeend',markup())
}
getImgMarkupToDom()
// console.log();

const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay:'250ms'
});