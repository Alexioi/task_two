import "./pagination.scss";

const paginationList = document.querySelectorAll(".pagination__item");

let dotsLeft = document.createElement("span");
dotsLeft.className = "pagination__dots";
dotsLeft.innerHTML = "...";

let dotsRight = document.createElement("span");
dotsRight.className = "pagination__dots";
dotsRight.innerHTML = "...";

let btnLast = document.createElement("button");
btnLast.className = "pagination__next-btn material-icons";
btnLast.innerHTML = "arrow_back";
btnLast.onclick = function () {
  let target = document.querySelector(".pagination__item_focus").innerText - 1;
  hidePaginationItems(target);
};

let btnNext = document.createElement("button");
btnNext.className = "pagination__next-btn material-icons";
btnNext.innerHTML = "arrow_forward";
btnNext.onclick = function () {
  let target =
    Number(document.querySelector(".pagination__item_focus").innerText) + 1;
  hidePaginationItems(target);
};

function hidePaginationItems(target) {
  let itemsVisible = [];

  for (let i = 2; i < paginationList.length; i++) {
    if (
      i != target &&
      i != target - 1 &&
      i != target - 2 &&
      i != Number(target) + 1 &&
      i != Number(target) + 2
    ) {
      itemsVisible.push(i);
    }
  }

  if (itemsVisible[itemsVisible.length - 1] == 14) {
    paginationList[paginationList.length - 1].before(dotsRight);
  } else {
    dotsRight.remove();
  }

  if (itemsVisible[0] == 2) {
    paginationList[0].after(dotsLeft);
  } else {
    dotsLeft.remove();
  }

  for (let i = 0; i < paginationList.length; i++) {
    paginationList[i].classList.remove("pagination__item_hiden");
    paginationList[i].classList.remove("pagination__item_focus");
  }

  paginationList[target - 1].classList.add("pagination__item_focus");

  for (let j of itemsVisible) {
    paginationList[j - 1].classList.add("pagination__item_hiden");
  }

  if (target != 1) {
    paginationList[0].before(btnLast);
  } else {
    btnLast.remove();
  }

  if (target != 15) {
    paginationList[14].after(btnNext);
  } else {
    btnNext.remove();
  }
}

if (paginationList.length > 0) {
  window.onload = function () {
    let target = paginationList[0].innerText;
    hidePaginationItems(target);
  };
}

for (let i = 0; i < paginationList.length; i++) {
  paginationList[i].onclick = function () {
    let target = paginationList[i].innerText;
    hidePaginationItems(target);
  };
}
