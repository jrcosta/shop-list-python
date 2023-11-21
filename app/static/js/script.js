/**
 * Searches the shopping list based on the input value and filters the displayed items.
 */
function searchList() {
    var input = document.getElementById('searchBox');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById('shoppingList');
    var li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        var txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

document.getElementById('searchBox').addEventListener('submit', function (event) {
    event.preventDefault();
    searchList();
});

/**
 * Adds an item to the shopping list.
 */
function addItemToList() {
    var itemName = document.getElementById('itemName').value;
    var itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName && itemQuantity && itemQuantity > 0) {
        var shoppingList = document.getElementById('shoppingList');
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = itemName + ' - Quantidade: ' + itemQuantity;
        shoppingList.appendChild(listItem);

        document.getElementById('itemName').value = '';
        document.getElementById('itemQuantity').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

$(document).ready(function(){
    $('.nav-tabs a').click(function(){
        $(this).tab('show');
    });
});

/**
 * Truncates the value of an input if it exceeds the maximum length.
 *
 * @param {HTMLInputElement} input - The input element.
 * @param {number} maxLength - The maximum length allowed for the input value.
 */
function truncateInput(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}
