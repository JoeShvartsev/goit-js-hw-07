import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery")
const createItem = createItemCard(galleryItems)

function createItemCard(galleryItems){
    return galleryItems.map(({preview,original,description})=>
    `<li class="gallery__item">
        <a class="gallery__link" href= "${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
).join('')}
galleryEl.insertAdjacentHTML("beforeend", createItem)

galleryEl.addEventListener("click", onOpenModal)

let instance = null;

function onOpenModal(e) {
    e.preventDefault()
    const{dataset: {source},nodeName} = e.target
    if (nodeName !== "IMG") {
        return;
    }
    console.log(e.target)
    instance = basicLightbox.create(`<img width="1400" height="900" src="${source}">`);
    instance.show();
    
    galleryEl.addEventListener("keydown", onCloseModal);
}

function onCloseModal(e) {
    if (e.code === "Escape") {
        instance.close();
        galleryEl.removeEventListener("keydown", onCloseModal);
        instance = null;
    }
}













