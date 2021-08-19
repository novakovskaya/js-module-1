// ARRAY.FOREACH():
const numbers = [1, 2, 3, 4, 5];
console.log('Исходный массив:', numbers);

const newArray = [];

const forEachResult = numbers.forEach(num => newArray.push(num + 1));

console.log('forEachResult:', newArray); //[2, 3, 4, 5, 6]

// ARRAY.MAP():
const mapResult = numbers.map(item => item + 1);

console.log('mapResult:', mapResult); //[2, 3, 4, 5, 6]

// ARRAY.FILTER():
const filterResult = numbers.filter(elem => elem > 2 && elem < 5);

console.log('filterResult:', filterResult); //[3, 4]

// ARRAY.FIND():
const findResult = numbers.find(num => num > 2 && num < 5);

console.log('findResult:', findResult); //3

// ARRAY.REDUCE():
const reduceResultNumber = numbers.reduce((total, num) => (total += num), 0);

console.log('reduceResultNumber:', reduceResultNumber); //15

// ARRAY.EVERY():
const everyResult = numbers.every(num => num > 1);

console.log('everyResult:', everyResult); //false

// ARRAY.SOME():
const someResult = numbers.some(num => num > 3);

console.log('someResult:', someResult); //true

// ARRAY.SORT():
const age = [12, 26, 54, 7, 100, 83];
console.log('Исходный массив:', age);

const sortAges = [...age].sort((min, max) => min - max);

console.log('sortAges:', sortAges); //[7, 12, 26, 54, 83, 100]
