import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';


const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// rendered items
function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
  <li class="gallery-item">
    <a class="gallery-link" href=${original}>
        <img 
            class="gallery-image" 
            src=${preview}
            alt=${description}
            />
    </a>
</li>
`
  }).join('');
}

// // use library SimpleLightbox
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
// });