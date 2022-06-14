// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryItemsMarkup = document.querySelector(".gallery");

createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  const newGalleryMarkup = galleryItems.map(({preview, original, description}) =>
        `<div><a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" alt="${description}"/>
        </a>
        </div>`
    )
    .join("");
  galleryItemsMarkup.insertAdjacentHTML("beforeend", newGalleryMarkup);
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});