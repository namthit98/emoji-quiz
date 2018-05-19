export default class LocalStorage{
  constructor() {
    this.data = [
      {image: "1", answer: "Kinh Độ"},
      {image: "2", answer: "Bao La"},
      {image: "3", answer: "Hứng Thú"},
      {image: "4", answer: "Tình Trường"},
      {image: "5", answer: "Bao Quát"},
      {image: "6", answer: "Cầu Mây"},
      {image: "7", answer: "Nhạc Cụ"},
      {image: "8", answer: "Tranh Thủ"},
      {image: "9", answer: "Nội Thất"},
      {image: "10", answer: "Đầu Thú"},
    ]
  }

  getData() {
    return this.data;
  }
}