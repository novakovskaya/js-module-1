// Преобразование числа к строке

let value = 0;
// 1й способ:
let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

value = 1;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

// Преобразование значения бесконечности к строке

value = Infinity;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

// Преобразование не числа к строке

value = NaN;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

// Преобразование булевого (логического) значения true к строке

value = true;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

// Преобразование булевого (логического) значения false к строке

value = false;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

// Преобразование undefined к строке

value = undefined;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);

// Преобразование null к строке

value = null;
// 1й способ:
toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(
  `тип данных ${value}, через конструктор String():`,
  typeof toString,
);
// 2й способ:
toString = value + '';
console.log(`${value}, через конкатенацию:`, toString);
console.log(`тип данных ${value}, через конкатенацию:`, typeof toString);
