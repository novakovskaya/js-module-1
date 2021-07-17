// Преобразование строчного значения к числу
let value = 'JavaScript';

// 1й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);

// Преобразование строчного числа к числу
value = '123';

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);

// Преобразование пустой строки к числу
value = '';

// 1й способ
toNumber = Number(value);
console.log(`пустая строка${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных пустой строки${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`пустая строка${value}, через унарный +:`, toNumber);
console.log(
  `тип данных пустой строки${value}, через унарный +:`,
  typeof toNumber,
);

// Преобразование строки с пробелом к числу
value = ' ';

// 1й способ
toNumber = Number(value);
console.log(`строка с пробелом${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных строки с пробелом${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`строка с пробелом${value}, через унарный +:`, toNumber);
console.log(
  `тип данных строки с пробелом${value}, через унарный +:`,
  typeof toNumber,
);

// Преобразование булевого (логического) значения true к числу
value = true;

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`${value}, через унарный +:`, typeof toNumber);

// Преобразование булевого (логического) значения false к числу
value = false;

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`${value}, через унарный +:`, typeof toNumber);

// Преобразование undefined к числу
value = undefined;

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`${value}, через унарный +:`, typeof toNumber);

// Преобразование null к числу
value = null;

// 1й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber,
);
// 2й способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`${value}, через унарный +:`, typeof toNumber);
