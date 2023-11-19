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


document.getElementById('searchBox').addEventListener('submit', function (event) {
    event.preventDefault();
    searchList();
});

function addItemToList() {
    var itemName = document.getElementById('itemName').value;
    var itemQuantity = document.getElementById('itemQuantity').value;

    // Validar se os campos estão preenchidos
    if (itemName && itemQuantity) {
        // Adicionar o item à lista
        var shoppingList = document.getElementById('shoppingList');
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = itemName + ' - Quantidade: ' + itemQuantity;
        shoppingList.appendChild(listItem);

        // Limpar os campos do formulário
        document.getElementById('itemName').value = '';
        document.getElementById('itemQuantity').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}