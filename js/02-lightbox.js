import { galleryItems } from './gallery-items.js';

const ul = document.querySelector('.gallery');

const liInUl = galleryItems
    .map(
    ({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `
).join('');

ul.insertAdjacentHTML('beforeend', liInUl);

const lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
