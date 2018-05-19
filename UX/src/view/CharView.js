import { elements, textClass } from "../base";

export const showToView = (ans) => {
  ans = Array.from(ans);

  elements.manage.innerHTML = '';

  ans.forEach(el => {
    const button = document.createElement("button");
    button.className = "textbox";
    button.textContent = el;

    elements.manage.insertAdjacentElement("beforeend", button);
  });
};

export const hiddenChoose = (el) => {
  el.classList.add("textbox--hidden");
};

export const showCharAgain = (char) => {
  let textHidden = document.querySelectorAll(".textbox--hidden");

  textHidden = Array.from(textHidden);

  let text = textHidden.find(el => el.textContent === char);
  if(text) {
    text.classList.remove("textbox--hidden");
  }
}

export const showAllCharAgain = () => {
  document.querySelectorAll(".textbox--hidden").forEach(el => el.classList.remove("textbox--hidden"));
}

export const hiddenChooseByKeyboard = (char) => {
  let els = document.querySelectorAll(textClass.textboxManage);
  let el = Array.from(els).find(el => el.textContent === char && !el.classList.contains("textbox--hidden"));
  if(el) {
    el.classList.add("textbox--hidden");
  }
}

export const checkChar = (char) => {
  // document.querySelectorAll(textClass.textboxManage).forEach(el => {
  //   if(!el.classList.contains("textbox--hidden") && el.textContent === char) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  return Array.from(document.querySelectorAll(textClass.textboxManage)).some(el => el.textContent === char && !el.classList.contains("textbox--hidden"));
}