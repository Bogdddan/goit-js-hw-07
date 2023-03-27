import { galleryItems } from './gallery-items.js';
// Change code below this line

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
        
    }

console.log(galleryItems);
