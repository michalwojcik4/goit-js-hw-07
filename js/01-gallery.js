import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const addImgToGallery = galleryItems.map((galleryItem) => {
    const li = document.createElement('li')
    gallery.append(li)

    const div = document.createElement('div');
    div.classList.add('gallery__item');
    li.append(div)

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = galleryItem.original;
    div.append(a);

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = galleryItem.preview;
    img.dataset.source = galleryItem.original;
    img.alt = galleryItem.description;
    a.append(img);
}).join('');

gallery.insertAdjacentHTML("beforeend", addImgToGallery);

const items = document.querySelectorAll('.gallery__item');

for(const item of items){
    item.addEventListener("click", (e) =>{
        e.preventDefault();
        const imgOrginal = e.target.dataset.source;
    
        const instance = basicLightbox.create(
            `<div class="modal">
                <img width="900" height="500" src="${imgOrginal}"/>
            </div>`
        );
        instance.show();
    
        const imgOrginalClose = document.querySelector('.modal img');
        imgOrginalClose.addEventListener('click', () => {
            instance.close();
        });
        document.addEventListener('keydown', () => {
            instance.close();
        });
    });
}
