var els = document.getElementsByClassName('test');
for (var i in els) {
    els[i].addEventListener("click", function() {
        document.getElementsByTagName('dropdown_hiden').class = 'testred'
    })
}