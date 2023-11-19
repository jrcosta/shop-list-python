function searchList() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById('shoppingList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}


document.getElementById('searchBox').addEventListener('submit', function(event) {
    event.preventDefault();
    searchList();
});
