// Basic Types.
let isDone: boolean = true;
const height: number = 6;
const name: string = 'test';
const list: number[] = [1, 2, 3]; // Also: `const list: Array<number> = [1, 2, 3]` which is using generics.

isDone = 'abc';
height = null;
let isFalse = false;

isDone = name;


// Enums.
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Red;
c = 'asda';

// Any. Useful for those constiables that we have no idea about.
let notSure: any = 4;




const anotherList: any[] = [1, true, 'free']; // Mix `any` with other types.

// Void. The absense of a type.
function warnUser(): void {
  alert('This is my warning message');
}

// Function Declaration with Types.
function add(a: unknown, b: number): number {
  return a.toString() + b;
}

// Optional Parameters.
function sayHello(name?: string) {
  // Name is optional.
  if (name) {
    console.log('Hello ' + name + '!');
  }

  console.log('Hello');
}

// constiables
const x = 10; // Inferred 'number' type.
const y: number = 20; // Explicit 'number' type.

// Function calls.
add(x, y); // Works.
// add('a', 'b') //=> Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Type inferencing.
function takesCallback(cb: (error: Error) => any) {
  return cb(new Error('Boom!'));
}

takesCallback(function (err) {
  console.log(err.message);
});

// Interfaces.
interface MyInterface {
  value: string; // Has a property which is a `string`.
  method(): number; // Has a method that returns a `number`.
  (): boolean; // It's a function that returns a `boolean`.
}

// Type Assertions.
interface Foo {
  x: number;
  y: number;
}

const foo = {} as Foo;
foo.x = 10;
foo.y = 10;
// foo.anotherValue = 'test' //=> Error: Property 'anotherValue' does not exist on type 'Foo'.

// Not possible to do.
// const bad = { x: 10 } as string

// But we can force it to happen.
const bad = ({ x: 10 } as any) as string;
bad.toUpperCase(); // What?

// Type shorthand.
type HelloWorld = string;

function print(): HelloWorld {
  return 'hello world';
}

print().toUpperCase(); //=> "HELLO WORLD".

function getLabel(obj: { label: string }): string {
  return obj.label;
}

// Could also use in a type.
type LabelObj = { label: string };

// Or an interface.
// interface LabelObj { label: string }

// Extending Interfaces.
interface Animal {
  legs: number;
}

interface Dog extends Animal {
  bark: string;
}

// Type guards.
function typeGuard(obj: Dog): obj is Dog {
  return typeof obj.bark === 'string';
}

const dog = { legs: 4, bark: 'woof!' };

if (typeGuard(dog)) {
  alert("It's a dog! " + dog.bark); // Definitely a dog.
}

// Generics.
function identity<T>(arg: T): T {
  return arg;
}

function arrify<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr)) {
    return arr;
  }

  return [arr] as T[];
}

interface Map<T> {
  [key: string]: T;
}

const dictionary: Map<string> = {};
dictionary[name] = name;

// Union Types.
const value: string | string[] = 'test';

console.log(value.length); // Works because it exists on both `string` and `Array`.

// Intersection Types.
function extend<A, B>(a: A, b: B): A & B {
  Object.keys(b).forEach(key => {
    (a as any)[key] = (b as any)[key];
  });

  return a as A & B;
}

function makeDogFromAnimal(animal: Animal): Dog {
  return extend(animal, { bark: 'woof woof woof' });
}

// Tuples.
const tuple: [string, number] = ['hello', 10];
// tuple = [10, 'hello'] //=> Error: Type '[number, string]' is not assignable to type '[string, number]'.

console.log(tuple[0].substr(1));
// console.log(tuple[1].substr(1)) //=> Error: Property 'substr' does not exist on type 'number'.

// `typeof`.
import * as TS from 'typescript';

declare function require(module: string): any;

function eventually() {
  const ts: typeof TS = require('typescript');
}

// `typeof` only works on values, but you can use an interface with generics.
class Foo {
  bar: string;
}

function create<T>(Clazz: { new(): T }): T {
  return new Clazz();
}

const result = create(Foo);

// `this`.
class Calculator {
  constructor(protected value: number = 0) { }

  result(): number {
    return this.value;
  }

  add(operand: number) {
    this.value += operand;
    return this;
  }

  subtract(operand: number) {
    this.value -= operand;
    return this;
  }
}

const x = new Calculator(10)
  .add(5)
  .result()
//function types
function sum(a: number, b: number) {
  return a + b;
}
// ts: function sum(a: number, b: number): number
function sum2(a: number, b: number): number {
  return a + b.toString();
}
const total = sum2(1, '2');

function createStudent(id: number, name: string, age: number) {
  console.log(id, name, age)
}
createStudent(1, 'Bob', 18);
interface Student {
  id: number;
  name: string;
  age: number;
}
function createStudent({ id, name, age }: Student) {
  console.log(id, name, age)
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
} as Student);
//Typeof 
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];

type Person = {
  name: string;
  age: number;
}
type Age = typeof MyArray[number]["age"];

type Age = number
// Or
type Age2 = Person["age"];

type Age2 = number

//key off

function prop<T, K>(obj: T, key: K) {
  return obj[key];
}
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);//John
let str2 = prop({ name: 'John' }, 'age');
console.log(str2);//John

//error: Argument of type '"age"' is not assignable to parameter of type '"name"'.
const x = new Calculator(10).add(5).result();

const arr = [1, 2, 3, 4] as const;
const number1 = 1 as const;
type numberType = typeof number1;

// const arrr = ['one', 'two'] as const;

// const objects: { name: typeof arrr[0] } = { name: 'one' };

// objects.name = 'two';

type A = 'one' | 'two'; // union type
const a: A = 'three';



