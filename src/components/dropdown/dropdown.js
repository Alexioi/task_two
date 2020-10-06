const dropdownButton = document.getElementsByClassName("dropdown__button-visible")[0]
const dropdownVisible = document.getElementsByClassName("dropdown__visible")[0]

dropdownButton.onclick = function() {
    let target = event.target;

    if (dropdownVisible.classList.contains('dropdown__visible_hide')) {
        dropdownVisible.classList.add('dropdown__visible_show');
        dropdownVisible.classList.remove('dropdown__visible_hide');
    } else {
        dropdownVisible.classList.add('dropdown__visible_hide');
        dropdownVisible.classList.remove('dropdown__visible_show');
    }
}