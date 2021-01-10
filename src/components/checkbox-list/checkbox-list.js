import "./checkbox-list.scss";

const CheckboxListButtons = document.querySelectorAll(
  ".js-checkbox-list__button"
);
const CheckboxListItems = document.querySelectorAll(
  ".js-checkbox-list__items"
);

function toggleVisibleCheckboxListItem(element) {
  element.classList.toggle("js-checkbox-list__items_hidden");
}

for (let i = 0; i < CheckboxListButtons.length; i++) {
  CheckboxListButtons[i].onclick = function () {
    toggleVisibleCheckboxListItem(CheckboxListItems[i]);
  };
}