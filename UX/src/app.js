// import { elements } from "./base";

import LocalStorage from "./model/LocalStorage";
import Image from "./model/Image";
import Char from "./model/Char";
import Answer from "./model/Answer";

import * as localStorageView from "./view/LocalStorageView";
import * as imageView from "./view/ImageView";
import * as charView from "./view/CharView";
import * as answerView from "./view/AnswerView";

import { elements, textClass } from "./base";


/**
 * LocalStorage Object
 * Image Object
 * Char Object
 * Answer Object
 */
const state = {};
state.localStorage = new LocalStorage();
state.image = new Image();
state.char = new Char();
state.answer = new Answer();


const insertDataToStorage = () => {
  //Get data 
  const data = state.localStorage.getData();

  // Insert data to localStorage
  if(localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify(data));
  }
};

const setupImageQuiz = () => {
  //generate images
  state.image.generateImages();

  //Mix images
  state.image.mixImages();

  //Get images
  const images = state.image.getImages();

  //Get current image
  state.image.currentImage = images.shift();

  //Show to UI
  imageView.showCurrentImage(state.image.getCurrentImage());
};

const setupChar = () => {
  //Get current image
  const ans = state.image.getCurrentImage();
  
  // Get ans from localStorage
  state.char.answer = localStorageView.getAns(ans);

  //Mix answer
  state.char.mixAnswer();

  //Show to view
  charView.showToView(state.char.getMixAnswer());
}

const setupAnswer = () => {
  //Get answer
  state.answer.answer = state.char.getAnswer();

  //show to view
  answerView.showToView(state.answer.getAnswer());
}

const chooseChar = (e, input="click") => {
  //Get char
  if(input === "click") {
    state.answer.chooseChar(e.target.textContent);

    //Insert char to answer
    let check = answerView.insertCharToAnswer(state.answer.getChar());
    if (check === true) {
      //hide choosen
      if(input === "click") {
        charView.hiddenChoose(e.target);
      } else if (input === "keyboard") {
        charView.hiddenChooseByKeyboard(e);
      }
      
    }

    //Check ans
    let check2 = answerView.checkFullAnswer();
    
    if(check2) {
      checkAns();
    }
  } else if (input === "keyboard") {
    let check = charView.checkChar(e);

    if(check == true) {
      state.answer.chooseChar(e);

      //Insert char to answer
      let check = answerView.insertCharToAnswer(state.answer.getChar());
      if (check === true) {
        //hide choosen
        if(input === "click") {
          charView.hiddenChoose(e.target);
        } else if (input === "keyboard") {
          charView.hiddenChooseByKeyboard(e);
        }
        
      }

      //Check ans
      let check2 = answerView.checkFullAnswer();
      
      if(check2) {
        checkAns();
      }
    }
  }
}

const checkAns = () => {
  //Get ans
  const ans = answerView.getAns();

  //Check ans
  if(ans === state.char.getRemovedAnswer()) {
    //Show result to view
    answerView.showSuccess();
    answerView.showOriginAnswer(state.answer.getAnswer());
    setTimeout(() => {
      changeNextLevel();
    }, 2000);
  } else {
    //Show result to view
    answerView.showError();
  }
}

const notChoose = (e) => {
  //Clear notifi
  answerView.clearNotifi();

  //show char again in char
  charView.showCharAgain(e.target.textContent);

  //remove char from answer
  answerView.notChoose(e.target);
}

const addListener = () => {
  document.querySelectorAll(textClass.textboxManage).forEach((el) => {
    el.addEventListener("click", chooseChar);
  });

  document.querySelectorAll(textClass.textboxAnswer).forEach((el) => {
    el.addEventListener("click", notChoose);
  });

  document.addEventListener("keydown", typeKeyboard);
}

const typeKeyboard = (e) => {
  e.preventDefault();
  let charCode = (typeof e.which == "number") ? e.which : e.keyCode;

  if(charCode === 8) {
    //Clear char
    answerView.clearAllChar();

    //Clear notifi
    answerView.clearNotifi();

    //Show all char again
    charView.showAllCharAgain();
  } else if (charCode >= 97 && charCode <= 122) {
    charCode -= 32;
    charCode = String.fromCharCode(charCode);
    chooseChar(charCode, "keyboard");
  } else if (charCode >= 65 && charCode <= 90) {
    charCode = String.fromCharCode(charCode);
    chooseChar(charCode, "keyboard");
  }
}

const changeNextLevel = () => {
  //Get current image
  state.image.currentImage = state.image.getImages().shift();

  if(!state.image.currentImage) {
    alert("You're winner !!!!!!!!!!!!!");
    location.reload();
    initial();
  } else {
    //Show to UI
    imageView.showCurrentImage(state.image.getCurrentImage());

    //Setup char
    setupChar();

    //Setup Answer
    setupAnswer();

    //Add listener
    addListener();
  }
}


//Initial function of App
const initial = () => {
  insertDataToStorage();
  setupImageQuiz();
  setupChar();
  setupAnswer();
  addListener()
};

//Run 
initial();

