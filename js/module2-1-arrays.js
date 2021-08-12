// Массивы (Arrays) - конструктор Array()
// console.log([1, 2, 3, 4, 5]);
const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];
console.log(array);

// console.log(array);
// console.log(array.length);

// ==========================================================
// обращаемся к конкретному элементу массива (к индексу)
// console.log(array[4]);

// меняем значения элемента(перезаписываем)
array[4] = 12;
// // console.log(array[4]);
// console.log(array);

// удаляем элемент из массива
// delete array[3]; // undefined (удаляет полностью индекс)
// console.log(array[3]);
// console.log(array);

// ==========================================================
// итерация по массиву (for & for...of)
for (let i = 0; i < array.length; i += 1) {
  // console.log(`Continue:`);
  if (typeof array[i] === 'string') {
    continue;
  }
  // console.log(`итерация ${i + 1}:`, array[i]);
  // итерация 1 - array[0] - HTML
  // итерация 2 - array[1] - CSS
  // итерация 3 - array[2] - JavaScript
  // итерация 4 - array[3] - React
  // итерация 5 - array[4] - NodeJS
}

for (let i = 0; i < array.length; i += 1) {
  // console.log(`Break:`);
  if (typeof array[i] === 'string') {
    break;
  }
  // console.log(`итерация ${i + 1}:`, array[i]);
}

// ==========================================================
// Многомерный массив (multidimensional arrays)
const multiArray = [
  [1, 10, 100, 1000],
  [2, 20, 200, 2000],
  [3, 30, 300, 3000],
];
// console.log(multiArray);
// console.log(multiArray.length); //3 elements
let it = 0;
for (let array of multiArray) {
  it += 1;
  // console.log(`iteration ${it}:`, array);
  for (let numbers of array) {
    // console.log(numbers);
  }
}

// ==========================================================
// copy primitives (делает копию)
// let age = 30;
// console.log(`age:`, age);

// let myAge = age;
// console.log(`my age:`, myAge);
// console.log(age === myAge); //true

// age = 26;
// console.log(`age:`, age);
// console.log(`my age:`, myAge); //не меняет значение, т.к. делает копию с 1й переменной
// console.log(age === myAge); //false

// // links arrays (даёт ссылку на ячейку массива) - сложный тип данных
const numbers = [1, 2, 3, 4, 5];
// console.log(`numbers:`, numbers);

const myNumbers = numbers;
// console.log(`myNumbers:`, myNumbers);

numbers[4] = 100500;
// console.log(`numbers:`, numbers);
// console.log(`myNumbers:`, myNumbers);

// ==========================================================
// ARRAY METHODS
// console.log(`numbers:`, numbers);

//slice()
const mySliceNumbers = numbers.slice(); // add new array
// console.log(mySliceNumbers);

// console.log(numbers === mySliceNumbers); //false

numbers[4] = 5;
// console.log(`numbers:`, numbers);
// console.log(mySliceNumbers);

const firstTwoElem = numbers.slice(0, 2); // с _ до _(не включая)
// console.log(firstTwoElem);

//split()
let myString = 'my String';
// console.log(myString);
// console.log(typeof myString);

// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);
// console.log(myString[4]);
// console.log(myString[5]);
// console.log(myString[6]);
// console.log(myString[7]);
// console.log(myString[8]);
// console.log(myString.length);

const arrayFromString1 = myString.split('');
// console.log(arrayFromString1);

const arrayFromString2 = myString.split(' ');
// console.log(arrayFromString2);

const arrayFromString3 = myString.split('s');
// console.log(arrayFromString3);

//join()
const myJoin = ['I', 'love', 'JavaScript'];
// console.log(arrayJoin);

let arraytoString1 = myJoin.join();
// console.log(arraytoString1);

let arraytoString2 = myJoin.join(' ');
// console.log(arraytoString2);

let arraytoString3 = myJoin.join('-');
// console.log(arraytoString3);

//indexOf() & includes()
// console.log(`myString:`, myString);
// console.log(`myJoin:`, myJoin);

//                  add
// unshift() -------------- push()
//          |                |
//          |      array     |
//          | [0],[1],[2],[3]|
//   shift() -------------- pop()
//                delete

const exampleArray = [1, 2, 3, 4, 5, 6];
// console.log(exampleArray);

const unshiftArray = exampleArray.unshift(0);
// console.log(unshiftArray); //new exampleArray length
// console.log(exampleArray); //[0, 1, 2, 3, 4, 5, 6]

const pushArray = exampleArray.push(7, 8);
// console.log(pushArray); //new exampleArray length
// console.log(exampleArray); //[0, 1, 2, 3, 4, 5, 6, 7, 8]

const shiftArray = exampleArray.shift();
// console.log(shiftArray); //deleted element
// console.log(exampleArray); //[1, 2, 3, 4, 5, 6, 7, 8]

const popArray = exampleArray.pop();
// console.log(popArray); //deleted element
// console.log(exampleArray); //[1, 2, 3, 4, 5, 6, 7]

// splice(index, number) - delete element
let deleteSplice = exampleArray.splice(0, 1);
// console.log(deleteSplice); //deleted element
// console.log(exampleArray); //[2, 3, 4, 5, 6, 7]

// splice(index, 0, el1, el2, ....) - add new element
let addSplice = exampleArray.splice(0, 0, 'JS');
// console.log(addSplice); //[]
// console.log(exampleArray); //["JS", 2, 3, 4, 5, 6, 7]

//splice(index, number, el1, el2, ....) - replace element
let replaceSplice = exampleArray.splice(6, 1, 'HTML');
// console.log(replaceSplice); //deleted element[7]
// console.log(exampleArray); //["JS", 2, 3, 4, 5, 6, "HTML"]

//concat()
const firstArray = [1, 2, 3];
// console.log(firstArray);

const secondArray = [4, 5, 6];
// console.log(secondArray);

const thirdArray = [7, 8, 9];
// console.log(thirdArray);

const fullArray = firstArray.concat(secondArray, thirdArray);
console.log(fullArray);
