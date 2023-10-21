// element 생성
const li = document.createElement('li');

//클래스 추가하기
li.className = 'list-group-item';

//id 추가하기
li.id = 'new-item';

li.setAttribute('name', 'New list item');   //속성 추가

//link element 생성하기
const link = document.createElement('a');

link.className = ('alarm-item');

li.appendChild(link);

link.innerHTML = '<i class="bi-alarm"></i>';

document.querySelector('ul.list-group').appendChild(li);   //자식 노드중 마지막 자식 노드로 붙인다.