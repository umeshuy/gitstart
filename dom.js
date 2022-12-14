// Traversing the DOM
var = itemList = document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstElementChild);
itemList.lastElementChild.innerHTML = 'hello';

console.log(itemList.nextElementSibling);

// create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'bye';

newDiv.setAttribute('title','hello div');
var divText = document.createTextNode('heelo my frnds');

newDiv.appendChild(divText);
var conatiner = document.querySelector('header .contanier');
var h1 = document.querySelector('header h1');
console.log(newDiv);
 conatiner.insertBefore(newDiv,h1);