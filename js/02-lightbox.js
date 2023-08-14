import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map((galleryItem) => `
  <li>
    <a class ='gallery__item' href='${galleryItem.original}'>
        <img class = 'gallery__image' src='${galleryItem.preview}' alt = '${galleryItem.description}'/>
    </a>
  </li>`)
  .join("");

gallery.insertAdjacentHTML('beforeend', createGallery);

new SimpleLightbox('.gallery__item', {
    nav: false,
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
    swipeClose: false,
});




 
         
  




