export default class Answer {
  constructor() {
    this.answer = '';
    this.char = '';
  }

  chooseChar(char) {
    this.char = char;
  }

  getChar() {
    return this.char;
  }

  getAnswer() {
    return this.answer;
  }
}