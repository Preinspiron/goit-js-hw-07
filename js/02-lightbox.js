import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemsRef = document.createElement('ul')
galleryItemsRef.classList = "gallery"

const items = galleryItems.map(({ preview, original, description }) => {
	const liEl = document.createElement('li')
	const imgEL = document.createElement('img')
	const linkEl = document.createElement('a')

	liEl.classList = 'gallery__item';
	linkEl.classList = 'gallery__link'
	linkEl.href = original
	
	imgEL.src = preview
	imgEL.dataset.sourse= original
	imgEL.alt = description
	imgEL.classList = 'gallery__image'

	linkEl.append(imgEL)
	liEl.append(linkEl)

	return liEl
})

galleryItemsRef.append(...items)
gallery.append(galleryItemsRef)

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
