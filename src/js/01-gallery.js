// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryBoxForCardImage = document.querySelector('.gallery');
const cardCollection = addCardWithImg(galleryItems);

galleryBoxForCardImage.addEventListener('click', addOpenOriginalSizeImage);

galleryBoxForCardImage.innerHTML = cardCollection;

function addCardWithImg(cards) {
  return cards
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
    )
    .join('');
}

function addOpenOriginalSizeImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) return;
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
