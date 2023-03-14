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
	imgEL.src = preview
	imgEL.alt = description
	imgEL.classList = 'gallery__image'
	imgEL.dataset.sourse= original
	linkEl.classList = 'gallery__link'
	linkEl.href = original
	linkEl.append(imgEL)
	liEl.append(linkEl)
	return liEl
})
galleryItemsRef.append(...items)
gallery.append(galleryItemsRef)



gallery.addEventListener('click', onGallery)

function onGallery(e) {
	e.preventDefault()
	if (e.target.nodeName === 'IMG') {
		const instance = basicLightbox.create(`
		<img src="${e.target.dataset.sourse}" width="800" height="600">`)
		instance.show()
		document.addEventListener("keydown", e => {
			if (e.code === 'Escape') instance.close()
			
		}, {once:true})

		

		
	}
	
}

