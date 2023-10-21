const num1 = 20;
const num2 = 10;

let val;

//Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4);  //반올림
val = Math.ceil(2.4);   //올림
val = Math.floor(2.8);  //내림
val = Math.abs(-2); //절댓값(abs = absolute의 줄임)
val = Math.max(1, 2, 3, 4, 5, 6, 9);    //최댓값
val = Math.min(2, 3, 4 , 5, 6, 7, 8, -1);   //최솟값
val = Math.random();    //0과 1사이의 숫자를 랜덤으로 반환

//1과 20사이의 숫자를 반환하고싶을때
val = Math.floor(Math.random() * 20 + 1);
console.log(val);