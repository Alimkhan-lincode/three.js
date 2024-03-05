
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