import { galleryItems } from './gallery-items.js';

const ul = document.querySelector('ul');

const liInUl = galleryItems.map(item =>
    `
        <li class="gallery__item">
    <a class="gallery__link" href='${item.original}'>
    <img
        class="gallery__image"
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'
    />
    </a>
</li>
    `).join('');

ul.insertAdjacentHTML('beforeend' , liInUl);

ul.addEventListener('click' , onImageClick);

function onImageClick(evt) {
    const prevDefaul = evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
    return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    ul.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        instance.close();
        }
    });
}

console.log(galleryItems);




