
let person = {
  name: "John",
  age: 25,
  job: "developer"
}
// Создайте объект person с полями name, age и job. Присвойте полям значения, например, "John", 25 и "developer" соответственно.

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "yelow"
}

// Создайте объект car с полями brand, model, year и color. Присвойте полям значения, например, "Toyota", "Camry", 2020 и "blue" соответственно.

function Person (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

let person1 = new Person ("Mike", 25, "developer")

// Создайте функцию-конструктор Person с параметрами name, age и job. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

function Car (brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

let car2 = new Car ("Hundai", "Solaris", 2018, "black")

// Создайте функцию-конструктор Car с параметрами brand, model, year и color. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

person.name = "Tobi";
person["job"] = "Maller"
console.log(person);

car.color = "white"
console.log(car);

person1.age = 23;
console.log(person1);

car2.year = 2021;
console.log(car2);
// Во всех объектах, которых вы создали попытайтесь изменить любое свойство.

person.city = "Los-Angeles"
person["from"] = "USA"

console.log(person);

car.box = "avtomat";
console.log(car);
// В созданные вами ранее объекты, добавьте некоторые новые свойства.

delete person.age;
console.log(person);

delete car.year;
console.log(car);
// В созданных вами ранее объектах, удалите 1 или 2 свойства на свой выбор.

let persontask = {
  name: "Maks",
  age: 20,
  greet: function() {
    console.log("Здравствуйте," + this.name);
  }
};

persontask.greet();
// Создайте объект "person" с свойствами "name", "age" и методом "greet", который выводит на экран приветствие с именем. 

let calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    return a / b;
  }
}

let a = 15
let b = 2

console.log(calculator.add(a, b));
console.log(calculator.subtract(a, b));
console.log(calculator.multiply(a, b));
console.log(calculator.divide(a, b));
// Создайте объект "calculator" с методами "add", "subtract", "multiply" и "divide", которые принимают два аргумента и возвращают результат операции.

let cartask = {
  start: function() {
    console.log("Машина запущена");
  },

  stop: function() {
    console.log("Машина остановлена");
  }
}

cartask.start();
cartask.stop();
// Создайте объект "car" с методом "start", который выводит на экран сообщение о том, что машина запущена, и методом "stop", который выводит на экран сообщение о том, что машина остановлена.

let person2 = {
  name: "",
  age: 0
}

let john = Object.create(person2);
john.name = "John";
john.age = 23;

console.log(john);
// Создайте объект-прототип "person" с свойствами "name" и "age". Создайте объект "john" на основе этого прототипа и задайте ему свойства "name" и "age".

let animal = {
  eat: function() {
    console.log("Животное кушает");
  }
}

let dog = Object.create(animal);
dog.eat();
// Создайте объект-прототип "animal" с методом "eat", который выводит на экран сообщение о том, что животное кушает. Создайте объект "dog" на основе этого прототипа и вызовите метод "eat".

let shape = {
  draw: function() {
    console.log("Фигура рисуется");
  }
}

let rectangle = Object.create(shape);
rectangle.draw();
// Создайте объект-прототип "shape" с методом "draw", который выводит на экран сообщение о том, что фигура рисуется. Создайте объект "rectangle" на основе этого прототипа и вызовите метод "draw"

const fruits = ['apple','banana','cherry'];
const number = [1,2,3,4,5];
const mixed = ['hello', 123, true];
const topAvto = ['BMW', 'Mersedes', 'Mustang']

console.log(fruits);
console.log(number);
console.log(mixed);
console.log(topAvto);
// Литерал массива

const numberArray = new Array();
const arrayNumber = new Array (1,2,3,4,5)

console.log(arrayNumber);

const avtoArray = new Array();
const avtoArrayResult = new Array('BMW','Mersedes','Camry');

console.log(avtoArrayResult);

const loveFruits = new Array();
const fruitsArray = new Array('apple', 'banana', 'cherry')

console.log(fruitsArray);

const arrayLenght = new Array();
const lenghtResult = new Array(10);

console.log(lenghtResult);
// new Array

const greeting = "Hello"
const greetResult = Array.from(greeting)

console.log(greetResult);

const avtoArrayfrom = "Mersedes"
const mersedes = Array.from(avtoArrayfrom);

console.log(mersedes);

const psevdoArray = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c'
}
const arr = Array.from(psevdoArray);

console.log(arr);

const fruitsNew = {
  length: 3,
  0: 'Banana',
  1: 'Apple',
  2: 'Cherry'
}
const fruitsNewresult = Array.from(fruitsNew);

console.log(fruitsNewresult);
// Array.from

// Cоздайте 4 разных массивов используя все 3 способа которые были показаны в видео.