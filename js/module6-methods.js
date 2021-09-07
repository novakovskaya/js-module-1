// ==== Императивный подход ===
// (даёт детальное описание того как что - то должно выполниться)s
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); //[4, 5]

// === Декларативный подход ====
//Метод Array.prototype.filter()
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers); //[4, 5]

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]

// === Функциональные методы массива ===
// array.method(callback);
//      elem, index, array
// callback = () => {};

// array.method((elem, index, array) => {});

// Methods:

//* array.forEach():
// - поэлементо перебирает оригинальный массив
// - как замена цикла for...of, если не нужно прерывать цикл
// - ничего не возвращает (undefined)

const numbers = [1, 2, 3, 4, 5];
// console.log('Исходный массив:', numbers);

const newArray = [];

const forEachResult = numbers.forEach(num => {
  // console.log(num);
  newArray.push(num + 1);
});

// console.log('forEachResult:', forEachResult); //undefined
// console.log(newArray); //[2, 3, 4, 5, 6]

//* array.map():
// - используется для трансформации массива
// - поэлементо перебирает оригинальный массив
// - не изменяет исходный массив
// - возвращает новый массив такой же длины, что и исходный

const mapResult = numbers.map(item => {
  // console.log(item);
  return item + 1;
});

// console.log('mapResult:', mapResult); //[2, 3, 4, 5, 6]
// console.log(numbers === mapResult); //false

//* array.filter():
// - используется для фильтрации массива, если ничего не найдено вернёт пустой []
// - поэлементо перебирает оригинальный массив
// - возвращает новый массив (с элементами или пустой)
// - добавляет в возвращаемый массив элементы которые удовлетворяют условие коллбек-функции:
//    - если коллбек вернул true элемент добавляется в новый массив
//    - если коллбек вернул false элемент НЕ добавляется в массив

const filterResult = numbers.filter(elem => {
  // console.log(elem);
  return elem > 2 && elem < 5;
});

// console.log('filterResult:', filterResult); //[3, 4]

//* array.find():
// - используется для поиска уникального элемента массива
// - поэлементо перебирает оригинальный массив
// - возвращает первый элемент удовлетворяющий условие или undefined

const findResult = numbers.find(num => {
  return num > 2 && num < 5;
});

// console.log('findResult:', findResult); //3
// console.log(numbers === findResult); //false

//* array.reduce():
// - аккумулирующая функция, используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата
// - поэлементо перебирает оригинальный массив
// - возвращает всё, что угодно и заменяет всё на свете

const reduceResultArray = numbers.reduce((acc, elem) => {
  // console.log(acc, elem);

  // итерация-1 => [] 1
  // итерация-2 => undefined 2
  // итерация-3 => undefined 3
  // ...

  acc.push(elem + '');
  return acc;
}, []);

// console.log('reduceResultArray:', reduceResultArray); //["1", "2", "3", "4", "5"]

const reduceResultObj = numbers.reduce((acc, num) => {
  acc[num] = num;
  return acc;
}, {});

// console.log('reduceResultObj:', reduceResultObj); //{1: 1, 2: 2, 3: 3, 4: 4, 5: 5}

const reduceResultNumber = numbers.reduce((total, num) => {
  return (total += num);
}, 0);

// console.log('reduceResultNumber:', reduceResultNumber); //15
// console.log(numbers === reduceResultNumber); //false

//* array.every() - как логическое ( && ):
// - проверяет, прошли ли все элементы массива условие, предоставляемое callback-функцией
// - поэлементо перебирает оригинальный массив
// - возвращает true только если ВСЕ элементы массива удовлетворяют условие

const everyResult = numbers.every(num => {
  // console.log(num);
  return num > 1;
});

// console.log('everyResult:', everyResult); //false
// console.log(numbers === everyResult); //false

//* array.some() - как логическое ( || ):
// - проверяет, проходит ли хоть один элемент в массиве условие, предоставляемое callback-функцией
// - поэлементо перебирает оригинальный массив
// - возвращает true если хотя бы ОДИН элемент массива удовлетворяет условие

const someResult = numbers.some(num => {
  // console.log(num);
  return num > 3;
});

// console.log('someResult:', someResult); //true
// console.log(numbers === someResult); //false

//* array.sort():
// - сортирует и ИЗМЕНЯЕТ оригинальный массив
// - по умолчанию:
//    - сортирует по возрастанию
//    - приводит элементы к строке и сортирует по [Unicode]

const fruits = ['banana', 'apple', 'pineapple'];
// console.log(fruits);

const sortResult = fruits.sort();
// console.log(sortResult);
// console.log(fruits); // метод sort() мутирует исходный массив

// console.log(fruits === sortResult); //true

const age = [12, 26, 54, 7, 100, 83];
// console.log(age);

// распыляем массив (делаем копию исходного)
const sortAges = [...age].sort((min, max) => {
  // return min - max;

  return max - min;
});

// console.log(sortAges); //[7, 12, 26, 54, 83, 100]
// console.log(sortAges); //[100, 83, 54, 26, 12, 7]

// console.log(age === sortAges); //false

//* Цепочки методов массива
const students = [
  { name: 'Max', age: 21, gender: 'male' },
  { name: 'Julia', age: 26, gender: 'female' },
  { name: 'Alex', age: 32, gender: 'male' },
  { name: 'Alice', age: 24, gender: 'female' },
  { name: 'Tom', age: 40, gender: 'male' },
];

// Все студенты-мужчины
const result1 = students
  .filter(student => student.gender === 'male')
  .map(man => man.name)
  .sort((firstName, secondName) => firstName.localeCompare(secondName));
// console.log('Result:', result1); //["Alex", "Max", "Tom"]

//Самый младший студент
const result2 = [...students].sort((min, max) => min.age - max.age)[0];
// console.log('Result:', result2); //{name: "Max", age: 21, gender: "male"}

//Самый старший студент
const result3 = [...students].sort((min, max) => max.age - min.age)[0];
// console.log('Result:', result3); //name: "Tom", age: 40, gender: "male"}

//Средний возраст студентов
const result4 = students.reduce(
  (acc, item, index, arr) => Math.round((acc += item.age / arr.length)),
  0,
);
// console.log('Result:', result4); //28

// Функция с побочными эффектами
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] *= value;
  }
};

const dirtyNum = [1, 2, 3, 4, 5];
// console.log(dirtyNum); //[1, 2, 3, 4, 5]

dirtyMultiply(dirtyNum, 2);
// console.log(dirtyNum); //[2, 4, 6, 8, 10] - мутирует исходный массив по ссылке

// Чистые функции (pure functions)
const pureMultiply = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * value);
  }

  return result;
};

const pureNum = [2, 4, 6, 8];
// console.log(pureNum); //[2, 4, 6, 8]

const newPureMultiply = pureMultiply(pureNum, 2);
// console.log(newPureMultiply); //[4, 8, 12, 16]

// === PRACTICE === //
const arr = [
  { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
  { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
  { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
  { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
  { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
  { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
  { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
  { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
  { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
  { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
  { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
  { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
];

// console.table(arr);

// #1. Получить массив ученых, которые родились в 19 веке
let result = arr.filter(obj => obj.born >= 1801 && obj.born < 1900);
// console.log('Result:', result);

// #2. Найти общую сумму лет, сколько прожили все ученые
result = arr.reduce((acc, obj) => {
  const age = obj.dead - obj.born;
  // console.log(age);

  return (acc += age);
}, 0);
// console.log('Result:', result); //861

// #3. Отсортировать ученых по алфавиту
//     по имени
result = arr.sort((first, second) => first.name.localeCompare(second.name));
// console.log('Result:', result);

//     по фамилии
result = arr.sort((first, second) =>
  first.surname.localeCompare(second.surname),
);
// console.log('Result:', result);

// #4. Отсортировать ученых по количеству прожитых лет
result = arr.sort((a, b) => a.dead - a.born - (b.dead - b.born));
// console.log('Result:', result);
// result.forEach(obj => console.log(obj.dead - obj.born)); // проверка

// #5. Удалить из массива ученых родившихся в 15 или 16 или 17 веке (1401-1700)
result = arr.filter(obj => obj.born > 1700);
// console.log('Result:', result);

// #6. Найти ученого который родился позже
result = arr.sort((a, b) => b.born - a.born)[0];
// console.log('Result:', result); //Katherine Blodgett

// #7. Найти год рождения Albert Einstein
//    1й способ
result = arr.find(
  obj => obj.name + ' ' + obj.surname === 'Albert Einstein',
).born;
// console.log('Result:', result); //1879

//    2й способ
result = arr.reduce((acc, obj) => {
  if (obj.name + ' ' + obj.surname === 'Albert Einstein') {
    acc = obj.born;
  }

  return acc;
}, 0);
// console.log('Result:', result); //1879

// #8. Найти ученых фамилия которых начинается на букву С
result = arr.filter(obj => obj.surname[0] === 'C');
// console.log('Result:', result);

// #9. Удалить из массива всех ученых имя которых начинается на A
result = arr.filter(obj => obj.name[0] !== 'A');
// console.log('Result:', result);

// #10. Найти ученого прожившего больше всех и ученого прожившего меньше всех лет
result = arr.sort((a, b) => a.dead - a.born - (b.dead - b.born))[
  arr.length - 1
];
// console.log('Result:', result); // больше всех - Lise Meitner

result = arr.sort((a, b) => a.dead - a.born - (b.dead - b.born))[0]; //меньше всех - Ada Lovelace
// console.log('Result:', result);

// result = arr.forEach(el => console.log(el.dead - el.born));

// #11. Найти ученых в которых совпадают первые буквы имени и фамилии
result = arr.filter(obj => obj.name[0] === obj.surname[0]);
// console.log('Result:', result);

// #12. Узнать все ли ученые работали в 19 веке (1801 - 1900)
result = arr.every(obj => obj.born > 1801 && obj.dead < 1900);
// console.log('Result:', result); //false
