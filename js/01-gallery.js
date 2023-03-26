// import * as basicLightbox from 'basiclightbox';
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGallaryMarkup(items) {
    return items
    .map(
        (item) => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${image.description}"
            />
            </a>
        </li>`
    )
    .join("");
}

const addGallaryMarkup = createGallaryMarkup(galleryItems);

divRef.insertAdjacentHTML = ('beforeend' , addGallaryMarkup);

divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
    blocStandartAction(evt);

    if (evt.target.nodeName !== "IMG") {
    return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        instance.close();
        }
    });
}

function blocStandartAction(evt) {
    evt.preventDefault();
}
