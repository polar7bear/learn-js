let outerHeight = window.outerHeight;
let innerHeight = window.innerHeight;

let outerWidth = window.outerWidth;
let innerWidth = window.innerWidth;

console.log(`outerHeight : ${outerHeight}`);
console.log(`outerWidth : ${outerWidth}`);
console.log(`innerHeight : ${innerHeight}`);
console.log(`innerWidth : ${innerWidth}`);

let scrollY = window.scrollY;
let scrollX = window.scrollX;

console.log(`scrollY : ${scrollY}`);
console.log(`scrollX : ${scrollX}`);


let windowLocation = window.location;   //해당 웹사이트의 주소

console.log(`windowLocation : ${windowLocation}`);

//window.location.href = 'http://google.com';   //해당 주소로 이동

//window.history.go(1); //history 객체에는 사용자가 방문한 URL(브라우저 창에서)이 포함된다.

console.log(window.navigator);  //navigator - 브라우저에 대한 정보가 포함되어있다.