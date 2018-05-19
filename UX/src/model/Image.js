export default class Image {
  constructor() {
    this.begin = 1;
    this.end = 20;
    this.images = [];
    this.currentImage;
  };

  generateImages() {
    for(let i = this.begin; i <= this.end; i++) {
      this.images.push(i);
    }
  }

  mixImages() {
    this.images = this.shuffle(this.images);
  }

  getImages() {
    return this.images;
  }

  getCurrentImage() {
    return this.currentImage;
  }

  shuffle(array) {
    var length = array.length,
        temp,
        i;
    
    while (length) {
       i = Math.floor(Math.random() * length--);

       temp = array[length];
       array[length] = array[i];
       array[i] = temp;
    }
    return array;
  }
}