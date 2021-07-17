console.log(student); // undefined
var student = 'Yulia';
console.log(student);

var count; // объявление без инициализации
console.log(count); // undefined
count = 1;
console.log(count);
count = 2;
console.log(count);

// console.log(age); - Uncaught ReferenceError: Cannot access 'age' before initialization
let age = 26;
console.log(age);

let number; // объявление без инициализации
console.log(number); // undefined
number = 10;
console.log(number);

// console.log(surName); - Uncaught ReferenceError: Cannot access 'surName' before initialization
const surName = 'Novakovskaya';
console.log(surName);

// const user; - Uncaught SyntaxError: Missing initializer in const declaration
// surName = ''; - Uncaught TypeError: Assignment to constant variable.
