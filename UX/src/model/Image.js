export default class Image {
  constructor() {
    this.begin = 1;
    this.end = 10;
    this.images = [];
    this.currentImage;
  };

  generateImages() {
    for(let i = this.begin; i <= this.end; i++) {
      this.images.push(i);
    }
  }

  mixImages() {
    this.images = this.images.sort(function() {
      return Math.random() - 0.5;
    });
  }

  getImages() {
    return this.images;
  }

  getCurrentImage() {
    return this.currentImage;
  }
}