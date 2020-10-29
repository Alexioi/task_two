const dropdownButtons = document.querySelectorAll(".dropdown__button-visible")
const dropdownVisible = document.querySelectorAll(".dropdown__visible")
const dropdownButtonsMinus = document.querySelectorAll(".dropdown__button-minus")
const dropdownButtonsPlus = document.querySelectorAll(".dropdown__button-plus")
const dropdownNumbers = document.querySelectorAll(".dropdown__number")
const dropdownInput = document.querySelectorAll(".dropdown__info")

for (let i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].onclick = function() {
    if (dropdownVisible[i].style.display == 'block') {
      dropdownVisible[i].style.display = 'none';
    } else {
      dropdownVisible[i].style.display = 'block';
    }
  }
}

for (let i = 0; i < dropdownButtonsMinus.length; i++) {
  dropdownButtonsMinus[i].onclick = function() {
    let value = dropdownNumbers[i].innerText
    if (value > 0){
      dropdownNumbers[i].innerHTML = value - 1
      value1 = dropdownNumbers[Math.floor(i/3)*3].innerText
      value2 = dropdownNumbers[Math.floor(i/3)*3 + 1].innerText
      value3 = dropdownNumbers[Math.floor(i/3)*3 + 2].innerText
      dropdownInput[Math.floor(i/3)].value = Number(value1) + Number(value2) + Number(value3) + ' гостя'
    }
  }
}

for (let i = 0; i < dropdownButtonsPlus.length; i++) {
  dropdownButtonsPlus[i].onclick = function() {
    let value = dropdownNumbers[i].innerText
    dropdownNumbers[i].innerHTML = Number(value) + 1
    value1 = dropdownNumbers[Math.floor(i/3)*3].innerText
    value2 = dropdownNumbers[Math.floor(i/3)*3 + 1].innerText
    value3 = dropdownNumbers[Math.floor(i/3)*3 + 2].innerText
    dropdownInput[Math.floor(i/3)].value = Number(value1) + Number(value2) + Number(value3) + ' гостя'
  }
}