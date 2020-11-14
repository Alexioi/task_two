import "./expandable-checkbox-list.sass";

const expandableCheckboxListButtons = document.querySelectorAll(
  ".js-expandable-checkbox-list__button"
);
const expandableCheckboxListItems = document.querySelectorAll(
  ".js-expandable-checkbox-list__items"
);

function toggleVisibleExpandableCheckboxListItem(element) {
  element.classList.toggle("js-expandable-checkbox-list__items_hidden");
}

function setContentExpandableCheckboxButton(element) {
  element.classList.toggle("js-expandable-checkbox-list__button_close");
  if (element.innerText == "open") {
    element.innerText = "close";
  } else {
    element.innerText = "open";
  }
}

for (let i = 0; i < expandableCheckboxListButtons.length; i++) {
  expandableCheckboxListButtons[i].onclick = function () {
    toggleVisibleExpandableCheckboxListItem(expandableCheckboxListItems[i]);
    setContentExpandableCheckboxButton(expandableCheckboxListButtons[i]);
  };
}
