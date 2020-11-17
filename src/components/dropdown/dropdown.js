import "./dropdown.sass";

















// const dropdownSwitchDisplayBtns = document.querySelectorAll(
//   ".dropdown__switch-display-button"
// );
// const dropdownMenu = document.querySelectorAll(".dropdown__menu");
// const dropdownMinusBtns = setTripleArray(
//   document.querySelectorAll(".dropdown__button-minus")
// );
// const dropdownPlusBtns = setTripleArray(
//   document.querySelectorAll(".dropdown__button-plus")
// );
// const dropdownNumbers = setTripleArray(
//   document.querySelectorAll(".dropdown__number")
// );
// const dropdownInputs = document.querySelectorAll(".dropdown__input");
// const dropdownResetBtns = document.querySelectorAll(".dropdown__reset");
// const dropdownApplyBtns = document.querySelectorAll(".dropdown__apply");

// function setTripleArray(list) {
//   let fullArray = [];
//   for (let i = 0; i < list.length; i = i + 3) {
//     let tripleArray = [];
//     for (let j = 0; j < list.length; j++) {
//       tripleArray.push(list[i + j]);
//     }
//     fullArray.push(tripleArray);
//   }
//   return fullArray;
// }

// function hideDropdownButtonReset(el) {
//   el.classList.toggle("hide");
// }

// function sumNumbers(i) {
//   let value = 0;
//   for (let j = 0; j < 3; j++) {
//     value = value + Number(dropdownNumbers[i][j].innerText);
//   }
//   return value;
// }
// if (dropdownInputs.length > 0) {
//   window.onload = function () {
//     for (let i = 0; i < dropdownInputs.length; i++) {
//       let value = sumNumbers(i);
//       if (value == 0) {
//         dropdownInputs[i].value = "Сколько гостей";
//         hideDropdownButtonReset(dropdownResetBtns[i]);
//       } else {
//         dropdownInputs[i].value = value + " гостя";
//       }
//     }
//   };
// }

// for (let i = 0; i < dropdownSwitchDisplayBtns.length; i++) {
//   dropdownSwitchDisplayBtns[i].onclick = function () {
//     hideDropdownButtonReset(dropdownMenu[i]);
//   };

//   dropdownResetBtns[i].onclick = function () {
//     dropdownInputs[i].value = "Сколько гостей";
//     for (let j = 0; j < 3; j++) {
//       dropdownNumbers[i][j].innerText = "0";
//     }
//     hideDropdownButtonReset(dropdownResetBtns[i]);
//   };

//   for (let j = 0; j < 3; j++) {
//     dropdownMinusBtns[i][j].onclick = function () {
//       let value = dropdownNumbers[i][j].innerText;
//       if (value > 0) {
//         dropdownNumbers[i][j].innerText = value - 1;
//         value = sumNumbers(i);
//         if (value == 0) {
//           dropdownInputs[i].value = "Сколько гостей";
//           hideDropdownButtonReset(dropdownResetBtns[i]);
//         } else {
//           dropdownInputs[i].value = value + " гостя";
//         }
//       }
//     };
//   }

//   for (let j = 0; j < 3; j++) {
//     dropdownPlusBtns[i][j].onclick = function () {
//       let value = dropdownNumbers[i][j].innerText;
//       dropdownNumbers[i][j].innerText = Number(value) + 1;
//       value = sumNumbers(i);
//       if (value == 1) {
//         hideDropdownButtonReset(dropdownResetBtns[i]);
//       }
//       dropdownInputs[i].value = value + " гостя";
//     };
//   }

//   dropdownApplyBtns[i].onclick = function () {
//     hideDropdownButtonReset(dropdownMenu[i]);
//   };
// }
