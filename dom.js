console.dir(document);
var items = document.getElementsByClassName('list-gruop-items');
items[0].textContent = 'Hello';
items[2].style.backgroundColor = 'green';
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

var items1 = document.getElementsByTagName('li');
items1[3].textContent = 'edited';

items[1].style.backgroundColor = 'green';
items[2].style.visibility = "hidden";

 var li2 = documnet.querySelectorAll('li:nth-child(2)');
 li2.style.fontColor = 'green';

 var odd = documnet.querySelectorAll('li: nth-child(odd)');
 for(var i =0; i< odd.length; i++){
    odd[i].style.backgroundColor = 'green';
 }