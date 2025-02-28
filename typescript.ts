// string
const names: string = 'John Doe';

// number
const age: number = 25;
const tmp: number = -10.5

// boolean
const is_admin: boolean = true;

// array
const fruits: string[] = ['apple', 'banana'];
const fruits2: Array<string> = ['apple', 'banana'];

// tuple
const fruits3: [string, number] = ['apple', 10];

// null
const value = null;

// undefined
const value2 = undefined;

// union
let name_union: string | undefined = undefined;
name_union = 'John Doe'

// any
const name_1: any = undefined;
const name_2: any = 10;
const name_3: any = null;
const name_4: any = ['apple', 'banana'];
const name_5: any = 'John Doe';

// 関数
const hello: (name: string) => string = (name: string): string => {
    return 'Hello ' + name;
};
const hello2: (name: string) => void = (name: string): void => {
    console.log('Hello ' + name);
};

// オブジェクト
const user_obj: { id: number, name: string } = { id: 100, name: 'John Doe' };
const user_obj2: { id: number, readonly name: string } = { id: 100, name: 'John Doe' };

// interface
interface Person {
    firstName: string;
    lastName: string;
    greeting: (message: string) => string;
}
let user_itf: Person = {
    firstName: 'John',
    lastName: 'Smith',
    greeting(message) {
        return `${message} ${this.firstName}`
    }
}
console.log(user_itf.greeting('Hello'))

// class
class PersonModel {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const user2 = new PersonModel('John', 'Doe')
console.log(user2.fullName());

class PersonModel2 {
    constructor(public firstName: string, public lastName: string) { }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

class Student implements Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    greeting(): string {
        return 'implements～～'
    }
}

// Type Alias
type Name = string;
function hello_alias(name: Name) {
    return 'Hello, ' + name
}

// インデックスシグネチャ
type User = {
    [key: string]: string;
}