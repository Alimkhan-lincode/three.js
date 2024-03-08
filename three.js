
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

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

let person1 = new Person("Mike", 25, "developer")

// Создайте функцию-конструктор Person с параметрами name, age и job. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

function Car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

let car2 = new Car("Hundai", "Solaris", 2018, "black")

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
  greet: function () {
    console.log("Здравствуйте," + this.name);
  }
};

persontask.greet();
// Создайте объект "person" с свойствами "name", "age" и методом "greet", который выводит на экран приветствие с именем. 

let calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
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
  start: function () {
    console.log("Машина запущена");
  },

  stop: function () {
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
  eat: function () {
    console.log("Животное кушает");
  }
}

let dog = Object.create(animal);
dog.eat();
// Создайте объект-прототип "animal" с методом "eat", который выводит на экран сообщение о том, что животное кушает. Создайте объект "dog" на основе этого прототипа и вызовите метод "eat".

let shape = {
  draw: function () {
    console.log("Фигура рисуется");
  }
}

let rectangle = Object.create(shape);
rectangle.draw();
// Создайте объект-прототип "shape" с методом "draw", который выводит на экран сообщение о том, что фигура рисуется. Создайте объект "rectangle" на основе этого прототипа и вызовите метод "draw"

const number = [1, 2, 3, 4, 5];
console.log(number);
// Литерал массива

const numberArray = new Array();
const arrayNumber = new Array(1, 2, 3, 4, 5)
console.log(arrayNumber);

// new Array

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

// Array.from

// Cоздайте 4 разных массивов используя все 3 способа которые были показаны в видео.

number.pop()
number.push(6)
number.shift()
number.unshift(7)
console.log(number);
// Используя методы  push, pop, shift, unshift.Измените ваши массивы удалите что то из массива, добавьте что то в массив.

const sliceArray = [1, 2, 3, 4, 5];
const subSlice = sliceArray.slice(0, 3);

console.log(subSlice);
// Создайте массив из чисел. Используя метод slice, создайте новый массив, содержащий первые три элемента исходного массива.

const lineSlice = "Cтрока из слов и что-то там,куда-то там"
const lineSplit = lineSlice.split(" ");

const subLineSlice = lineSplit.slice(0, 3).join(" ");

console.log(subLineSlice);
// Создайте строку из слов. Используя метод slice, создайте новую строку, содержащую первые три слова исходной строки.

const wordSlice = ["Banana", "Cherry", "Apple", "Burberry", "Ц1азам"];
const subWord = wordSlice.slice(2, 5)

console.log(subWord);
// Создайте массив из строк. Используя метод slice, создайте новый массив, содержащий элементы исходного массива, начиная с третьего элемента и заканчивая пятым.

const simvolSlice = "grgtyh"
const subSimSlice = simvolSlice.slice(1, 4);

console.log(subSimSlice);
// Создайте строку из символов. Используя метод slice, создайте новую строку, содержащую символы исходной строки, начиная со второго символа и заканчивая четвертым.

const arraySlice = [
  {
    brand: "Mersedes",
    age: 2017
  },

  {
    brand: "BMW",
    age: 2020
  },

  {
    brand: "Toyoto",
    age: 2023
  }
];

const subArraySlice = arraySlice.slice(0, 2);
console.log(subArraySlice);
// Создайте массив из объектов. Используя метод slice, создайте новый массив, содержащий первые два объекта исходного массива.

const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(0, 1);

console.log(spliceArray);
// Создайте массив из чисел. Используя метод splice, удалите первый элемент массива.

const lineSplice = "Cтрока из слов и что-то там,куда-то там"
const lineSplitt = lineSplice.split(" ");

const delline = lineSplitt.splice(0, 1);

const noDelLine = lineSplitt.join(" ");

console.log(noDelLine);
// Создайте строку из слов. Используя метод splice, удалите первое слово строки.

const wordSplice = ["Banana", "Cherry", "Apple", "Burberry", "Ц1азам"];
wordSplice.splice(2, 1);

console.log(wordSplice);
// Создайте массив из строк. Используя метод splice, удалите элемент массива, расположенный на второй позиции.

const simSplice = "dnrgty";

const simSolit = simSplice.split("");
const spliceSio = simSolit.splice(0, 3);

const simJoin = simSolit.join("");

console.log(simJoin);
// Создайте строку из символов. Используя метод splice, удалите первые три символа строки.

const arraySplice = [
  {
    brand: "Mersedes",
    age: 2017
  },

  {
    brand: "BMW",
    age: 2020
  },

  {
    brand: "Toyoto",
    age: 2023
  }
];

arraySplice.splice(0, 1);
console.log(arraySplice);
// Создайте массив из объектов. Используя метод `splice`, удалите первый объект из массива.

const concatNum = [1, 2, 3, 4, 5];
const numberConcat = [5, 4, 3, 2, 1];

const combine = concatNum.concat(numberConcat);

console.log(combine);
// Создайте два массива из чисел. Используя метод concat, объедините эти массивы в один.

const firstWord = "Toyota";
const twoWord = "Camry"

const combineWord = firstWord.concat(" ", twoWord);

console.log(combineWord);
// Создайте две строки из слов. Используя метод concat, объедините эти строки в одну.

const arrayConst = ["Banana", "Apple"];
const constArray = ["BMW", "Mersedes"];

const combineArray = arrayConst.concat(constArray);

console.log(combineArray);
// Создайте два массива из строк. Используя метод concat, объедините эти массивы в один.

const simCon = "dsdr"
const Consim = "psdfsd"

const combineSim = simCon.concat(Consim);

console.log(combineSim);
// Создайте две строки из символов. Используя метод concat, объедините эти строки в одну.

const arrauNumCon = [1, 2, "Hello", 3];
const numConArr = [4, 5, 6];

const comConcatNum = arrauNumCon.concat(numConArr);

console.log(comConcatNum);
// Создайте массив из чисел и строк. Используя метод `concat`, добавьте к массиву новый элемент – массив из трех чисел.

const numDubl = [2, 5, 7];

const dubbleNumber = numDubl.map(function (number) {
  return number + 1
})

console.log(dubbleNumber);
// Создайте массив из чисел. Используя метод map, создайте новый массив, в котором каждый элемент будет увеличен на 1.

const arrayLinemap = ["apple", "cherry", "yellow"];
const AppkeyMap = arrayLinemap.map(function (str) {
  return str.toUpperCase()
})

console.log(AppkeyMap);
// Создайте массив из строк. Используя метод map, создайте новый массив, в котором каждая строка будет записана в верхнем регистре.

const objectArrMap = [
  {
    name: "Alimkhan",
    age: 17
  },
  {
    name: "Ali",
    age: 24 //Точно не знаю ск-ко лет ахаха
  }
];

const subObjectMap = objectArrMap.map(function (person) {
  return {
    name: person.name,
    age: person.age,
    fullName: person.name + " " + person.age
  };
})

console.log(subObjectMap);
// Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод map, создайте новый массив, в котором каждый объект будет иметь дополнительное свойство "fullName", содержащее имя и возраст объекта.

const arrNumBox = [15, 35, 50, 65];
const subArrNumBox = arrNumBox.map(function (number) {
  return number * 2
})

console.log(subArrNumBox);
// Создайте массив из чисел. Используя метод map, создайте новый массив, в котором каждый элемент будет возведен в квадрат.

const arrayLowcase = ["APPLE", "CHERRY", "YELLOW"];
const lowcaseArray = arrayLinemap.map(function (str) {
  return str.toLowerCase()
})

console.log(lowcaseArray);
// Создайте массив из строк. Используя метод map, создайте новый массив, в котором каждая строка будет записана в нижнем регистре.

function evenNum(numbers) {
  let subEvenNum = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  return subEvenNum;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subEvenNum = evenNum(numbers);

console.log(subEvenNum);
// Напишите функцию, которая принимает массив чисел и возвращает только четные числа из этого массива, используя метод filter

function strinFive(string) {
  let subStrin = string.filter(function (str) {
    return str.length >= 5
  });

  return subStrin;
}

let string = ["BMW", "Mersedes", "Toyota"];
let subStrin = strinFive(string);

console.log(subStrin);
// Напишите функцию, которая принимает массив строк и возвращает только те строки, длина которых больше или равна 5, используя метод filter

function productArr(products) {
  let subProduct = products.filter(function (product) {
    return product.price > 1000;
  });
  return subProduct;
}

const products = [
  { name: 'Телефон', price: 40000 },
  { name: 'Очки', price: 650 },
  { name: 'Часы', price: 20000 },
  { name: 'Пончик', price: 50 }
];

let subProduct = productArr(products);
console.log(subProduct);
// Напишите функцию, которая принимает массив объектов и возвращает только те объекты, у которых свойство `price` больше 1000, используя метод `filter`

const arrRed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const subRed = arrRed.reduce(function (accum, vacum) {
  return accum + vacum;
}, 0);

console.log(subRed);
// Создайте массив из чисел. Используя метод reduce, вычислите сумму всех элементов массива.

const stringRed = ['Apple', 'Banana', 'Cherry'];
const subStrRed = stringRed.reduce(function (lak, kak) {
  return lak + " " + kak;
},);

console.log(subStrRed);
// Создайте массив из строк. Используя метод reduce, объедините все строки в одну строку.

const przRed = [3, 7, 4, 15];
const subPrzRed = przRed.reduce(function (accum, vacum) {
  return accum * vacum;
}, 1);

console.log(subPrzRed);
// Создайте массив из чисел. Используя метод reduce, вычислите произведение всех элементов массива.

const arrayRed = [
  { name: "John", age: 20 },
  { name: "Mike", age: 18 },
  { name: "Vika", age: 25 }
];

const subArrayRed = arrayRed.reduce(function (akak, nekak) {
  return akak + nekak.age;
}, 0) / arrayRed.length;

console.log(subArrayRed);
// Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод reduce, вычислите средний возраст всех объектов в массиве.

const arrNumRed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const subArrNumRea = arrNumRed.reduce(function (papa, mama) {
  if (mama % 2 === 0) {
    return papa + mama;
  } else {
    return papa;
  };
}, 0);

console.log(subArrNumRea);
// Создайте массив из чисел. Используя метод reduce, вычислите сумму всех четных элементов массива.

const arrSortNum = [3, 4, 2, 5, 1, 8, 6, 7, 10, 9];
arrSortNum.sort(function (a, b) {
  return a - b;
})

console.log(arrSortNum);
// Создайте массив из чисел. Используя метод sort, отсортируйте его по возрастанию.

const arrayAlfavit = ['Car', 'Imposble', 'Heart', 'Big', 'Air'];
arrayAlfavit.sort();

console.log(arrayAlfavit);
// Создайте массив из строк. Используя метод sort, отсортируйте его в алфавитном порядке.

const arryObjectSort = [
  { name: "John", age: 30 },
  { name: "Mike", age: 10 },
  { name: "Vika", age: 20 }
];

arryObjectSort.sort(function (a, b) {
  return a.age - b.age
})

console.log(arryObjectSort);

const arrNumSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrNumSort.sort(function (a, b) {
  return b - a;
})

console.log(arrNumSort);
// Создайте массив из чисел. Используя метод sort, отсортируйте его по убыванию.

const returnArrString = ['Apple', 'Banana', 'Cherry'];
const reverseArrString = returnArrString.sort(function (a, b) {
  return b.localeCompare(a);
})

console.log(reverseArrString);
// Создайте массив из строк. Используя метод sort, отсортируйте его в обратном алфавитном порядке.

const numarrForeach = [1, 2, 3, 4, 5];
numarrForeach.forEach(function (number) {
  console.log(number);
})
// Создайте массив из чисел. Используя метод forEach, выведите каждый элемент массива в консоль.

const ForeachString = ['Bear', 'Elephant', 'Cat'];
ForeachString.forEach(function (str) {
  console.log(str);
})
// Создайте массив из строк. Используя метод forEach, выведите каждую строку массива в консоль.

const objectForeach = [
  { name: 'Mike', age: 20 },
  { name: 'Vika', age: 18 },
  { name: 'Sasha', age: 25 }
]

objectForeach.forEach(function (person) {
  console.log(person.name + " " + person.age);
})
// Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод forEach, выведите в консоль имя и возраст каждого объекта в массиве.

let arrr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

arrr.forEach(function(elem) {
	sum += elem;
});

console.log(sum);
// Создайте массив из чисел. Используя метод forEach, выведите в консоль сумму всех элементов массива.

const arrstringFor = ['Apple','Banana','Cherry'];
arrstringFor.forEach(function(str){
  console.log(str.length);
})

//Создайте массив из строк. Используя метод `forEach`, выведите в консоль количество символов в каждой строке массива.
