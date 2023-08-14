import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery(){

    for(const galleryItem of galleryItems){
        const li = document.createElement('li');

        const div = document.createElement('div');
        div.classList.add('gallery__item');
        
        const a = document.createElement('a');
        a.classList.add('gallery__link');
        a.href = galleryItem.original;
        
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = galleryItem.preview;
        img.alt = galleryItem.description;
        img.dataset.source = galleryItem.original;

        a.appendChild(img);
        div.appendChild(a);
        li.appendChild(div);
        gallery.appendChild(li);
    }; 
}

createGallery();

gallery.addEventListener('click', showOrginalImg);

function showOrginalImg(e){
    e.preventDefault();
    const imgOrginal = e.target.dataset.source;
    if(!imgOrginal){return}
        
    const instance = basicLightbox.create(
        `<div class="modal">
            <img width="900" height="500" src="${imgOrginal}"/>
        </div>`
    );
    instance.show();

    const modal = document.querySelector('.modal img');

    const closeModal = () => {
        instance.close();
      };

    if(instance.visible() === true){
        modal.addEventListener('click', closeModal);
    }else{
        modal.removeEventListener('click', closeModal);
    }
}