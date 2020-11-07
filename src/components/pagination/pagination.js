import "./pagination.sass";

const paginationList = document.querySelectorAll(".pagination__item");

let spanl = document.createElement("span");
spanl.className = "pagination__dots";
spanl.innerHTML = "...";

let spanr = document.createElement("span");
spanr.className = "pagination__dots";
spanr.innerHTML = "...";

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
    paginationList[paginationList.length - 1].before(spanr);
  } else {
    spanr.remove();
  }

  if (itemsVisible[0] == 2) {
    paginationList[0].after(spanl);
  } else {
    spanl.remove();
  }

  for (let i = 0; i < paginationList.length; i++) {
    paginationList[i].classList.remove("pagination__item_hiden");
  }

  for (let j of itemsVisible) {
    paginationList[j - 1].classList.toggle("pagination__item_hiden");
  }
  console.log(itemsVisible);
}

if (paginationList.length > 0) {
  console.log(paginationList.length);
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
