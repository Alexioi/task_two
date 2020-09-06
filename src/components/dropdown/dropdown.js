// const dropdown_hiden = document.getElementsByClassName("dropdown_hiden")[0];

// let selectedButton

// function changeVisibility(button) {
//     selectedButton = button;
//     if (dropdown_hiden.classList.contains('dropdown_hiden')) {
//         dropdown_hiden.classList.remove('dropdown_hiden')
//     } else {
//         dropdown_hiden.classList.add('dropdown_hiden')
//     }
// }

// document.onclick = function(event) {
//     let target = event.target;

//     if (target.classList.contains('test')) {
//         changeVisibility(target)
//     }
// };

const dropdownButton = document.getElementsByClassName("dropdown__button-visible")[0]
const dropdownVisible = document.getElementsByClassName("dropdown__visible")[0]

const li1 = document.getElementsByClassName("dropdown__item")[0]
const li2 = document.getElementsByClassName("dropdown__item")[1]
const li3 = document.getElementsByClassName("dropdown__item")[2]

dropdownButton.onclick = function() {
    let target = event.target;

    if (dropdownVisible.classList.contains('hide')) {
        dropdownVisible.classList.add('show');
        dropdownVisible.classList.remove('hide');
    } else {
        dropdownVisible.classList.add('hide');
        dropdownVisible.classList.remove('show');
    }
}