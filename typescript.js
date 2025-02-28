"use strict";
// string
const names = 'John Doe';
// number
const age = 25;
const tmp = -10.5;
// boolean
const is_admin = true;
// array
const fruits = ['apple', 'banana'];
const fruits2 = ['apple', 'banana'];
// tuple
const fruits3 = ['apple', 10];
// null
const value = null;
// undefined
const value2 = undefined;
// union
let name_union = undefined;
name_union = 'John Doe';
// any
const name_1 = undefined;
const name_2 = 10;
const name_3 = null;
const name_4 = ['apple', 'banana'];
const name_5 = 'John Doe';
// 関数
const hello = (name) => {
    return 'Hello ' + name;
};
const hello2 = (name) => {
    console.log('Hello ' + name);
};
// オブジェクト
const user_obj = { id: 100, name: 'John Doe' };
const user_obj2 = { id: 100, name: 'John Doe' };
let user_itf = {
    firstName: 'John',
    lastName: 'Smith',
    greeting(message) {
        return `${message} ${this.firstName}`;
    }
};
console.log(user_itf.greeting('Hello'));
// class
class PersonModel {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user2 = new PersonModel('John', 'Doe');
console.log(user2.fullName());
class PersonModel2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return 'implements～～';
    }
}
function hello_alias(name) {
    return 'Hello, ' + name;
}
