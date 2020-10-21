import gallery from "./gallery.js";

const galleryUl = document.querySelector(".js-gallery");
const modalDiv = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector(".lightbox__button");

gallery.forEach((elem) => {
  galleryUl.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />

</li>`
  );
});

galleryUl.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    modalDiv.classList.add("is-open");
    modalImg.src = event.target.dataset.source;
  }
});

closeModalBtn.addEventListener("click", onCloseBtn);
function onCloseBtn() {
  modalDiv.classList.remove("is-open");
}
