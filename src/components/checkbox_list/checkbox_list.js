import './checkbox_list.sass'

const checkboxBtns = document.querySelectorAll('.checkbox_list__btn');
const checkboxVisible = document.querySelectorAll('.checkbox_list__visible');

for (let i = 0; i < checkboxBtns.length; i++) {
  let checkboxBtn = checkboxBtns[i];
  checkboxBtn.onclick = function() {
    if (checkboxVisible[i].style.display == 'block') {
      checkboxVisible[i].style.display = 'none';
      checkboxBtns[i].style.backgroundImage = 'url("./img/expand_more_on.svg")'
    } else {
      checkboxVisible[i].style.display = 'block';
      checkboxBtns[i].style.backgroundImage = 'url("./img/expand_more_off.svg")'
    }
  }
}
