const paginationList = document.querySelectorAll('.pagination__item')
let paginationArr = [1, 2, 3, '...', 15]

function addClass(el, i, target) {
  if (i == target) {
    el.className = 'pagination__item_target'
  }
  // } else {
  //   el.classList.toggle('hide')
  // } 
}

function setPaginationArr() {

}

function addText(el, i) {
  el.innerHTML = paginationArr[i]
}

function changePaginationArr(target) {
  paginationArr = [1]
  for (let i = -2; i < 3; i++) {
    let item = Number(target) + i
    if (1 < item) {
      paginationArr.push(item)
    }
  }
  paginationArr.push()
  // if (target == '1') {
  //   paginationArr = ['1', '2', '3', '...', '15']
  // } else if (target == '2') {
  //   paginationArr = ['1', '2', '3', '4', '...', '15']
  // } else if (target == '3') {
  //   paginationArr = ['1', '2', '3', '4', '5', '...', '15']
  // } else if (target == '3') {
  //   paginationArr = ['...', '2', '3', '4', '5', '6', '...', '15']
  // } else if (target == '3') {
  //   paginationArr = ['...', '2', '3', '4', '5', '6', '...', '15']
  // }
  console.log(paginationArr)
}

window.onload = function() {
  for (let i = 0; i < paginationArr.length; i++) { 
    addClass(paginationList[i], i, 0)
    addText(paginationList[i], i)
  }
}

for (let i = 0; i < paginationList.length; i++) { 
  paginationList[i].onclick = function() {
    target = paginationList[i].innerHTML
    changePaginationArr(target)
    for (let i = 0; i < paginationArr.length; i++) { 
      addClass(paginationList[i], i, target - 1)
      addText(paginationList[i], i)
    }

  }
}
// let paginationArr = createPaginationArr(15)

// function createPaginationArr(maxNamber) {
//   let arr = []
//   for (let i = 1; i < maxNamber + 1; i++) { 
//     arr.push(i)
//   }
//   return arr
// }

// function test() {
//   for (let i = 0; i < paginationArr[paginationArr.length-1]; i++) { 
//     let paginationItem = document.createElement('div')
//     paginationItem.className = 'pagination__item'
//     paginationItem.innerHTML = i + 1
//     paginationList.append(paginationItem)
//   }
// }

// window.onload = function() {
//   test()
// }

