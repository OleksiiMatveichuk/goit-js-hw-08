// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const arrItems = galleryItems.map(el => {
  const item = `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
      title="${el.description}"
    />
  </a>
</li>`;
  return item;
});

const list = document.querySelector('.gallery');
list.innerHTML = arrItems.join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
