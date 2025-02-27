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

