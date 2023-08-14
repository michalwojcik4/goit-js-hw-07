import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGallery(){

    for(const galleryItem of galleryItems){
        const li = document.createElement('li');

        const a = document.createElement('a');
        a.classList.add('gallery__item');
        a.href = galleryItem.original;
        
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = galleryItem.preview;
        img.alt = galleryItem.description;

        a.appendChild(img);
        li.appendChild(a);
        gallery.appendChild(li);
    }; 
}

createGallery();

new SimpleLightbox('.gallery__item', {
    nav: false,
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
    swipeClose: false,
});




 
         
  




