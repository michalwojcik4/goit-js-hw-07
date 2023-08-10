import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const addImgToGallery = galleryItems.map((galleryItem) => {
    const li = document.createElement('li')
    gallery.append(li)

    const a = document.createElement('a');
    a.classList.add('gallery__item');
    a.href = galleryItem.original;
    li.append(a);

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    a.append(img);
}).join('');

gallery.insertAdjacentHTML("beforeend", addImgToGallery);

new SimpleLightbox('.gallery__item', {
    nav: false,
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
    swipeClose: false,
});




 
         
  




