import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onGalleryElClick)

function onGalleryElClick(e) {
	if (e.target.nodeName !== 'IMG') {
		return
	}
	window.addEventListener('keydown', onEscPress);

	const lageImg = e.target.dataset.source;

	const instance = basicLightbox.create(`
	<img src=${lageImg} width="800" height="600">
`);

	const modalClose = () => {
		instance.close()
		window.removeEventListener('keydown', onEscPress)
	};

	function onEscPress(e) {
		const keyName = e.key;
		console.log(keyName);
		if (keyName !== 'Escape') {
			return
		};
		modalClose();
	}

	instance.show();
}

function markupCreate(items) {
	return items.map(({ preview, original, description }) => {
		return `
		<li class="gallery__item">
		<a class="gallery__link" href=${original} onclick='event.preventDefault()'>
			<img
				class="gallery__image"
				src=${preview}
				data-source=${original}
				alt=${description}
			/>
		</a>
	</li>`
	}).join('');
}

galleryContainer.innerHTML = markupCreate(galleryItems);

























/* import { galleryItems } from './gallery-items.js';

const container = document.querySelector(".gallery");
const markupGallery = createGalleryMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markupGallery);
container.addEventListener('click', onContainerClick)

function createGalleryMarkup(gallery) {
	return gallery
		.map(({ preview, original, description }) => {
			return `
				<div class="gallery__item">
						<a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()">
								<img
								class="gallery__image"
								src="${preview}"
								data-source="${original}"
								alt="${description}"
								/>
						</a>
				</div>`;
		})
		.join("");
}

function onContainerClick(event) {
	if (!event.target.classList.contains("gallery__image")) {
		return;
	}
	const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
		`
	)
	instance.show()

	function onKeyboardEscAction(event) {
		const ESC_KEY_CODE = 'Escape';
		const isEscKey = event.code === ESC_KEY_CODE;
		if (isEscKey) {
			instance.close();
		}
	}

	window.addEventListener("keydown", onKeyboardEscAction);
} */