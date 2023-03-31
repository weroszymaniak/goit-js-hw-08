// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallerySet = document.querySelector('.gallery');

const galleryProject = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}"> <img class = "gallery__image" src = "${image.preview}" 
      alt = "${image.description}" data-source = "${image.original}" /> </a> </div>`
  )
  .join('');

gallerySet.insertAdjacentHTML('afterbegin', galleryProject);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
