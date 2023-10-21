let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);


//NodeList를 반환하는데, line break 도 포함이 된다. !!!정확히는 배열이 아닌 반복 가능 한(iterable, 이터러블) 유사 배열 객체인 컬렉션이다. for of문 가능
//때문에 배열 메소드 사용 불가능하며 사용하려면 Array.from() 메서드를 사용해서 배열로 변환해주어야함.
val = list.childNodes;  
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;
// Node Type
//1 - Element(요소)
//2 - Attribute(속성) (deprecated) 예전엔 사용했다가 지금은 사용하지 않는, \
//3 - Text Node (line break)
//8 - Comment Node(주석)
//9 - Document itself
//10 - Doctype

//children element nodes 반환
val = list.children;    //HTML Collection 반환 (childNodes와는 다르게 linebreak 는 반환이 안된다)
val = list.children[1];
list.children[1].textContent = 'hi';

val = list.firstChild;
//list.firstChild === list.childNodes[0];

val = list.firstElementChild;   //element를 반환함

val = list.lastChild;
//list.lastChild === list.childeNodes[list.childNodes.length - 1];

val = list.lastElementChild;

//child 요소 count
val = list.childElementCount;

//parent Node 반환(부모)
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log('val', val);
