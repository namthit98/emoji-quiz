import { elements } from "../base";

export const showCurrentImage = (currentImage) => {
  elements.mainImage.src = `./images/${currentImage}.jpg`;
}