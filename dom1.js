console.dir(document);
var items = document.getElementsByClassName('list-gruop-items');
items[0].textContent = 'Hello';
items[2].style.backgroundColor = 'green';
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

var items1 = document.getElementsByTagName('li');
items1[3].textContent = 'edited';
