console.log("안녕하세요!");
console.log(123);
console.log(false);
var greeting = "안녕하세요";
console.log(greeting);
console.log({a: "a", b: "b"});

console.table({a: "a", b: "b"});

console.error('Error!');    //에러 문구 출력
console.warn('Warning!');   //경고 문구 출력

console.time('Hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello');   //time부터 timeEnd까지의 실행 시간 출력

console.clear();    //콘솔 클리어