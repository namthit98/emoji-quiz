import { elements, textClass } from "../base";

export const showToView = (ans) => {
  const length = ans.length;
  elements.mainAnswer.innerHTML = '';
  
  for(let i = 0; i < length; i++) {
    const button = document.createElement("button");
    button.className = "textbox";

    elements.mainAnswer.insertAdjacentElement("afterbegin", button);
  }
};

export const notChoose = (el) => {
  if(el.textContent) {
    el.textContent = '';
  }
}

export const insertCharToAnswer = (char) => {
  const ans = document.querySelectorAll(textClass.textboxAnswer);

  const firstElement = Array.from(ans).find((el) => el.textContent === '');

  if(firstElement) {
    firstElement.textContent = char;
    return true;
  } else {
    return false;
  }
};

export const checkFullAnswer = () => {
  const el = document.querySelectorAll(textClass.textboxAnswer);

  if(Array.from(el).filter(el => el.textContent === '').length === 0) {
    return true;
  }

  return false;
}

export const getAns = () => {
  let ans = '';
  document.querySelectorAll(textClass.textboxAnswer).forEach(el => {
    ans += el.textContent;
  });

  return ans;
}

export const showError = () => {
  document.querySelectorAll(textClass.textboxAnswer).forEach(el => {
    el.classList.add("textbox--wrong");
  })
}

export const showSuccess = () => {
  document.querySelectorAll(textClass.textboxAnswer).forEach(el => {
    el.classList.add("textbox--right");
  })
}

export const clearNotifi = () => {
  document.querySelectorAll(textClass.textboxAnswer).forEach(el => {
    el.className = "textbox";
  })
}

export const clearAllChar = () => {
  document.querySelectorAll(textClass.textboxAnswer).forEach(el => el.textContent = '');
}

export const showOriginAnswer = (ans) => {
  const arr = Array.from(ans);
  
  document.querySelectorAll(textClass.textboxAnswer).forEach((el, index) => {
    el.textContent = arr[index];
  })
}