// 'use strict';
// this - local variable
// this - is a pronoun of object for his props & methods
// определяется объектом, в контексте которого вызывается функция (expr || decl) not for arrow
// arrow this ссылается на контекст объекта, в котором эта функция была объявлена

// === GLOBAL ===
// this without 'use strict' || module => window (глобальный объект)
// console.log(this);
function showThisDecl() {
  console.log(this);
}
// showThisDecl();

const showThisExpr = function () {
  console.log(this);
};
// showThisExpr();

const showThisArrow = () => {
  console.log(this);
};
// showThisArrow();
// this with 'use strict' || module => undefined

// === As Method ===
const user = {
  name: 'Yulia',
  age: 26,
  showName() {
    console.log('name:', this.name);
    const showAge = () => {
      console.log('age:', this.age);
    };
    showAge();
  },
};
// user.showName();
// console.log(user);

// const showAge = () => {
//   console.log(this.age);
// };
// user.showUserAge = showAge;
// user.showUserAge();
// * не имеет своего контекста, в this будет подставлять undefined * //

// this without 'use strict' || module
// this with 'use strict' || module

const newUser = {
  name: 'Misha',
  age: 32,
};
// user.showName.call(newUser);

const bestUser = {
  name: 'Archi',
  age: 2,
};
// user.showName.apply(bestUser);

// === Call & Apply ===
// Привязка объекта с Call & Apply с мгновенным вызовом
// Пример: вы зарегистрировались, отправив форму. Из формы создан объект пользователя, в объекте есть поле с именем, которое можно использовать в качестве приветствия на странице личного кабинета. В качестве других параметров могут служить переменные именем закрепленного менеджера и номером группы.
function toSayHello(manager, group) {
  console.log(
    `${this.name}, we are glad to see you! I am ${manager}, your manager. Your group is ${group}`,
  );
}

let manager = 'Alex';
let group = 37;
// toSayHello.call(bestUser, manager, group);

let data = [manager, group];
// toSayHello.apply(newUser, data);
// toSayHello.apply(newUser, ['Alex', 37]);

// === this in CALLBACK - bind ===
const product = {
  name: 'Banana',
  price: 25,
  changePrice(value) {
    return (this.price = value);
  },
};

const product2 = {
  name: 'PineApple',
  price: 99,
};

function showProduct(product, callback) {
  let price = callback();
  console.log(`${product} cost ${price} now`);
}

// showProduct('fruit', product.changePrice.bind(product, 20));
// showProduct('fruit', product.changePrice.bind(product2, 50));

// PRACTICE
// #1
function every(array, callback) {
  const result = [];
  for (const elem of array) {
    let condition = callback(elem);
    // console.log(condition);
    result.push(condition);
  }
  // console.log(result);
  return result.includes(false) ? false : true;
}

function getLessThenTen(number) {
  //   if (number < 10) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //через тернарный оператор
  return number < 10 ? true : false;
}

let result = every([1, 11, 2, 22, 3, 33], getLessThenTen);
// console.log(result); //false

result = every([1, 2, 3, 4, 5], getLessThenTen);
// console.log(result); //true

function getMoreThenTen(number) {
  return number > 10 ? true : false;
}

result = every([1, 2, 3, 4, 5], getMoreThenTen);
// console.log(result); // false

result = every([11, 22, 33, 44, 55], getMoreThenTen);
// console.log(result); // true

// #3
function compact(array, callback) {
  const newArray = [];
  for (const value of array) {
    // console.log(Boolean(value));
    // if (Boolean(value)) newArray.push(value); //(паттерн быстрого возврата)
    callback(value, newArray);
  }
  return newArray;
}

function getFalsyValues(element, falseValues) {
  if (!Boolean(element)) falseValues.push(element);
}
function getNotFalsyValues(element, falseValues) {
  if (Boolean(element)) falseValues.push(element);
}

// console.log(compact([1, 0, '', null, 'Hello'])); //[1, "Hello"]
// console.log(compact([Infinity, ' ', {}, []])); //[Infinity, " ", {…}, Array(0)]
// console.log(compact([1, 0, '', null, 'Hello'], getFalsyValues)); //[0, "", null]
// console.log(compact([1, 0, '', null, 'Hello'], getNotFalsyValues)); //[1, "Hello"]

// console.log(compact([Infinity, ' ', {}, []], getFalsyValues)); //[]
// console.log(compact([Infinity, ' ', {}, []], getNotFalsyValues)); //[Infinity, " ", {…}, Array(0)]

// #4
const ordersA = [
  { name: 'Phone', price: 12300, deliveryProgress: 47, type: 0 },
  { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
  { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
  { name: 'Phone', price: 12300, deliveryProgress: 45, type: 0 },
  { name: 'Tablet', price: 5000, deliveryProgress: undefined, type: 2 },
  { name: 'Computer', price: 230000, deliveryProgress: null, type: 1 },
];

function showDeliveryStatus(array) {
  let message;
  let progress;
  const results = [];
  for (let order of array) {
    // console.log(order)

    let { deliveryProgress: progress } = order;
    // console.log(progress);

    if (progress == 100) {
      message = `Done`;
      results.push(message);
    } else if (progress < 100 && progress >= 1) {
      message = `In progress`;
      results.push(message);
    } else if (progress === null) {
      message = `Ready for delivery`;
      results.push(message);
    } else {
      message = 'Not Ordered';
      results.push(message);
    }
  }
  return results.join(', ');
}
console.log(showDeliveryStatus(ordersA)); //'In progress', 'Done', 'Ready for delivery'
console.log(showDeliveryStatus(ordersB)); //'In progress', 'Not Ordered', 'Ready for delivery'
