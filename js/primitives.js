// typeof - оператор определения типа данных
// STRING
let stringData = 'string data';
console.log(stringData);
console.log(typeof stringData);

stringData = '';
console.log(stringData);
console.log(typeof stringData);

stringData = ' ';
console.log(stringData);
console.log(typeof stringData);

// NUMBER
let number = 1;
console.log(number);
console.log(typeof number);

number = 2e53;
console.log(number);
console.log(typeof number);

number = Infinity;
console.log(number);
console.log(typeof number);

number = NaN; // Not a Number
console.log(number);
console.log(typeof number);

// BOOLEAN (true || false)
let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

isOnline = false;
console.log(isOnline);
console.log(typeof isOnline);

// UNDEFINED
let message;
console.log(message);
console.log(typeof message);

// NULL (object)
let user = null;
console.log(user);
console.log(typeof user);
