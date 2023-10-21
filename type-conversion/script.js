let val;

//Number to String
val = String(111);
val = String(8 + 4);


//Boolean to String
val = String(false);


//Date to String
val = String(new Date());


//Array to String
val = String([1, 2, 3, 4, 5]);


//toString();
val = (5).toString();


//String to Number
val = Number('1');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number([1, 2, 3]);    // NaN = Not a Number

val = parseInt('111.40');   //소수점 자리를 없애고 싶을때 (111만 남음)
val = parseFloat('111.43');

console.log(val);
console.log(typeof val);
console.log(val.length);


//String + number 는 자바와 같이 String으로 변환된다.
const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log("sum :" + sum);
console.log("typeof sum: " + typeof sum);

