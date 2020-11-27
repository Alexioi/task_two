import './like-button.scss'

const likeButtons = document.querySelectorAll('.like-button')
const likeButtonIcons = document.querySelectorAll('.like-button__icon')
const likeButtonCounters = document.querySelectorAll('.like-button__counter')

function setCheckedStyle(btn, icon, counter) {
  btn.classList.toggle('like-button_checked')
  icon.classList.toggle('like-button__icon_checked')
  counter.classList.toggle('like-button__counter_checked')
}

function setCounter(btn, counter) {
  if (btn.classList.contains('like-button_checked')) {
    counter.innerText = Number(counter.innerText) + 1
  } else {
    counter.innerText = Number(counter.innerText) - 1
  }
}

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].onclick = function() {
    setCheckedStyle(likeButtons[i], likeButtonIcons[i], likeButtonCounters[i])
    setCounter(likeButtons[i], likeButtonCounters[i])
  }
}