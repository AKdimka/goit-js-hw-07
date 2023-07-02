import { galleryItems } from './gallery-items.js'

const gallery = document.querySelector('ul.gallery')

gallery.innerHTML = markupGallery(galleryItems)

function markupGallery(items) {
	return items.map(({ preview, original, description }) => {
		return `
		<li class="gallery__item">
		<a class="gallery__link" href=${original} onClick='event.preventDefault()'>
			 <img class="gallery__image" src=${preview} alt=${description} />
		</a>
 </li>`
	}).join('')
}

new SimpleLightbox('.gallery__item a');






























/* import { galleryItems } from './gallery-items.js';
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

new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: '250' }); */