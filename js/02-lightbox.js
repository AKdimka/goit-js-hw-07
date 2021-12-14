import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const markupGallery = createGalleryMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markupGallery);

function createGalleryMarkup(gallery) {
	return gallery
		.map(({ preview, original, description }) => {
			return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
		})
		.join("");
}

new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: '250' });