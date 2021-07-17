// Преобразование строчного значения к булю
let value = 'JavaScript';

// 1й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование строчного числа к булю
value = '123';

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование пустой строки к булю
value = '';

// 1й способ
toBoolean = Boolean(value);
console.log(`пустая строка${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных пустой строки${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`пустая строка${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных пустой строки${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование строки с пробелом к булю
value = ' ';

// 1й способ
toBoolean = Boolean(value);
console.log(
  `строка с пробелом${value}, через конструктор Boolean():`,
  toBoolean,
);
console.log(
  `тип данных строки с пробелом${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(
  `строка с пробелом${value}, через двойное отрицание !!:`,
  toBoolean,
);
console.log(
  `тип данных строки с пробелом${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование числа к булю
value = 0;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

value = 1;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование NaN к булю
value = NaN;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование infinity к булю
value = Infinity;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование undefined к булю
value = undefined;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);

// Преобразование null к булю
value = null;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean);
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);
// 2й способ
toBoolean = !!value;
console.log(`${value}, через двойное отрицание !!:`, toBoolean);
console.log(
  `тип данных ${value}, через двойное отрицание !!:`,
  typeof toBoolean,
);
