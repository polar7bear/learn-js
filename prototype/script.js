// let user = {
//     name: 'cole',
//     age: 26
// }

// console.log(user.name);
// console.log(user.hasOwnProperty('email'));

// function Person(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
// }

// const son = new Person('son', 'sons1998@naver.com', '12-27-98');
// const min = new Person('min', 'sons1998@naver.com', '04-27-96');

// console.log(son);
// console.log(min);

// Person.prototype.calculateAge = function () {
//     const diff = Date.new() - this.birthday.getTime();
//     const ageDage = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }


function Person(name, email, birthday) {
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.new() - this.birthday.getTime();
        const ageDage = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
