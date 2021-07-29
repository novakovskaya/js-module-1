// Объявление (создание) функции
//FUNCTION EXPESSION
// (param1, param2) - параметры
// myFunc(); - нельзя вызывать до объявления
const myFunc = function (param1, param2) {
  // console.log(
  //   `Это функциональное выражение с параметрами ${param1} & ${param2}`,
  // );
  // console.log(param1, param2);
};

//FUNCTION DECLARATION
// myFuncDecl(); - можна вызывать до объявления
function myFuncDecl(param) {
  // console.log('Это декларативное объявление');
}

//ARROW FUNCTION (внедрили в ES6 (2015г))
// myArrowFunc(); - нельзя вызывать до объявления
const myArrowFunc = param3 => {
  // console.log('Это стрелочная функция');
};

// Вызовы функций
myFunc('Hello', 'world');
myFuncDecl();
myArrowFunc();

//PARAMETERS & ARGUMENTS
let user;
function toSayHello(userName = 'User') {
  alert(`${userName}, рады Вас приветствовать!`);
}
// toSayHello('Yulia');
// toSayHello(user); //подставит дефолтное значение с параметра

function showInfo(userName, userAge) {
  // console.log(`Hello. My name is ${userName}. I'm ${userAge} years old.`);
}

showInfo('Yulia', 26); //аргументы

//arguments & ...args (псевдомассив)
function getResult() {
  // console.log(arguments);

  for (const elem of arguments) {
    // console.log(elem);
  }
  // arguments.push(2);

  //преобразование псевдомассива в полноценный массив
  const myArgs = Array.from(arguments);
  // console.log(myArgs);
  myArgs.push(2);
  // console.log(myArgs);
}

getResult(0, 1);

const getArrayRes = (...args) => {
  // console.log(args);
};

getArrayRes(1, 2, 3, 4, 5);

//GUARD  CLAUSE
function getValue(array, value) {
  // console.log(array);

  for (let i = 0; i < array.length; i += 1) {
    // console.log(array[i]);
    // if (array[i] % 2 !== 0) {
    //   console.log(`нечётное число:`, array[i]);
    // }

    // if (array[i] === value) {
    //   return `Значение ${value} есть в массиве`;
    // } else {
    //   return `Значение ${value} отсутствует в массиве`;
    // }

    //короткая запись
    if (array[i] === value) return `Значение ${value} есть в массиве`;
  }
  return `Значение ${value} отсутствует в массиве`;
}

let result = getValue([1, 2, 3, 4, 5, 6, 7], 5);
// console.log(result);
result = getValue([1, 2, 3, 4, 5, 6, 7], 8);
// console.log(result);

function getSpam(text, words) {
  // console.log(text);
  // console.log(words);
  let i = 0;
  for (const word of words) {
    i += 1;
    console.log(word, i);
    if (text.includes(word)) return 'SPAM!!!';
  }
  return text;
}

const arr = ['amt', 'sap ente'];
let value =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate animi totam perspiciatis sapiente eaque a praesentium. Sint, iure quis!';

// console.log(getSpam(value, arr));

//ARROW FUNCTION & RETURN
// const getTotal = (a, b) => {
//   return a + b;
// };

const getTotal = (a, b) => a + b;

// console.log(getTotal(3, 5)); //8

//-------------------------------------------------------
// Task #1
function checkYear(year) {
  let condition = year % 4 === 0;
  if (condition) return `${year} - високосный год`;
  return `${year} - не високосный год`;
}

// console.log(checkYear(2013));
// console.log(checkYear(2020));

//Task #2
function game() {
  let comp = Math.ceil(Math.random() * (10 - 1) + 1);
  let user = prompt('Введите число от 1 до 10');
  // console.log(comp, user);

  if (comp == user) return 'Поздравляем, вы угадали число';
  return 'Вы проиграли!';
}

// console.log(game());

//Task #3
function getMathResult() {
  let num1 = prompt('Enter the first number');
  let num2 = prompt('Enter the second number');
  let symbol = prompt('Enter the symbol');
  let total = 0;
  // console.log(num1, num2, symbol);

  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2);
      break;
    case '-':
      total = num1 - num2;
      break;
    case '*':
      total = num1 * num2;
      break;
    case '/':
      total = num1 / num2;
      break;

    default:
      console.error('ERROR');
  }
  return total;
}

// console.log('result:', getMathResult());

// console.log(2 + 2 + '2'); //42
// console.log(2 + '2' + '2'); //222
// console.log('2' + '2' + '2'); //222
