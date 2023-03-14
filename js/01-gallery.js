import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsRef = document.createElement("ul");
galleryItemsRef.classList = "gallery";

const items = galleryItems
  .map(({ preview, original, description }) => {
    const galleryItems = `
	<li class="gallery__item">
		<a 
		href="${original}"
		class="gallery__link">
			<img
			src="${preview}"
			alt="${description}"
			data-sourse="${original}"
			class="gallery__image"/>
		</a>
	</li>`;

    return galleryItems;
  })
  .join("");

console.log();
gallery.insertAdjacentHTML("afterbegin", items);

gallery.addEventListener("click", onGallery);

function onGallery(e) {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    lightBoxInit(e).show();
  }
}
function lightBoxInit(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.sourse}" width="800" height="600">`,
    { onShow: onKeyDownStart }
  );
  function onKeyDownStart() {
    document.addEventListener("keydown", onItemShow);
  }

  function onItemShow(e) {
    console.log(e.code);
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onItemShow);
    }
  }

  return instance;
}
