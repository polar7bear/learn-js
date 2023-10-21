let val;

val = document;

val = document.baseURI; //웹 페이지의 절대 URI 반환
val = document.head;    //<head>태그의 정보 반환
val = document.body;    //<body>태그의 정보 반환

val = document.forms;   //<form>태그의 정보 반환
val = document.forms[0].id; //<form>태그의 id 반환
val = document.forms[0].classList;  //<form>태그의 class 반환
val = document.forms[0].className;  //class의 이름만 반환

val = document.scripts; //<script> 태그의 정보 반환

val = document.scripts[0].getAttribute('src');  //속성값을 반환한다.

console.log(val);


const headerContainer = document.getElementById('header-container');    //요소의 ID값으로 가져오기
//getElementById(요소아이디)
//getElementByName(name속성값)
//querySelector(선택자)
//headerContainer.style.display = 'none';


//여러 요소에 접근 하고싶을 때
//getElementByTagName(태그이름)
//getElementByClassName(클래스이름)
//querySelectorAll(선택자)
console.log(headerContainer);

headerContainer.textContent = 'Text Content';       //태그 내부의 텍스트를 변경
headerContainer.innerText = 'inner Text';           //태그 내부의 텍스트를 변경
headerContainer.innerHTML = '<span>innerHTML</span>';   //태그 자체를 넣을 수도 있다.

const items = document.getElementsByClassName('list-group-item');

console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';


let list = document.getElementsByTagName('li'); //Collection 객체로 반환되기 때문에 for문을 이용해 배열순회를 해주려면 아래와 같이 Array.from(list)로 배열로 변환해주어야 한다.

console.log(list);

list = Array.from(list);

list.forEach((list, idx) => {
    list.textContent = `${idx}. List`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)'); //홀수 자식만

liOdd.forEach((li) => {
    li.style.background = 'gray';
})