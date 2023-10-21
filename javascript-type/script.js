let foo = 42;
foo = 'str';
foo = true;

console.log(typeof foo);

//원시 타입(primitive type)
//String, Number, Boolean

//null
const car = null;
//undefined
let anything;
//Symbol
const sym = Symbol();


//참조 타입
//Array 배열
const hobbies = ['walking', 'books'];
//Object 객체
const address = {
    province: '경기도',
    city : '성남시'
}

//배열의 타입을 확인할때는 typeof 를 사용하면 object로 반환이된다
//배열의 타입이 배열인지 확인하려면 typeof 가 아닌 Array.isArray() 를 사용해야 한다. 반환값은 boolean이다.
console.log(typeof hobbies);    
console.log(Array.isArray(hobbies));
