import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map((galleryItem) => `
  <li>
    <div class='gallery__item'>
        <a class ='gallery__link' href='${galleryItem.original}'>
            <img class = 'gallery__image' src='${galleryItem.preview}' alt = '${galleryItem.description}' data-source = '${galleryItem.original}'/>
        </a>
    </div>
  </li>`)
  .join("");

gallery.insertAdjacentHTML('beforeend', createGallery);


gallery.addEventListener('click', showOrginalImg);

function showOrginalImg(e){
    e.preventDefault();
    const imgOrginal = e.target.dataset.source;
    const altImg = e.target.alt;
    if(!imgOrginal){return}
        
    const instance = basicLightbox.create(
        `<div class="modal">
            <img width="900" height="500" src="${imgOrginal}" alt="${altImg}"/>
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