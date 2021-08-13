// === CLASS === //
class Class {
  constructor(prop1 = 0, prop2 = 1) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  method1() {
    console.log(this.prop1);
  }

  method2(value) {
    return (this.prop2 = value);
  }
}

const newObj = new Class();
// console.log(newObj);

//* EXAMPLES
// Исходный класс
class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  showLogin() {
    console.log(this.login);
  }

  showPassword() {
    console.log(this.password);
  }
}

// Исходный экземпляр
const user1 = new User('user1', 'qweqwe');
// console.log(user1);

// Новый класс (наследуемый) на основе исходного
class NewUser extends User {
  constructor(name, age, login, password) {
    super(login, password);
    this.name = name;
    this.age = age;
  }

  updateAge() {
    return (this.age += 1);
  }
}

// console.log(NewUser.prototype);

// Новый экземпляр
const newUser1 = new NewUser('Yulia', 26, 'new user1', 'qweqwe');
// console.log(newUser1);

// newUser1.showLogin();
// newUser1.showPassword();
// console.log(newUser1.updateAge());

// * свойства-аксессоры GETTER & SETTER
class Product {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return (this._name = newName);
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }
}

const product = new Product('Banana', 25);
// console.log(product);

// console.log('свойство name:', product._name); //на прямую плохо обращаться, лучше через методы
// console.log('by getter name:', product.name);
product.name = 'Pineapple'; //вызов сеттера
// console.log('by getter name:', product.name);

// console.log('свойство price:', product.price);
// console.log('by getter price:', product.price);
product.price = 30; //вызов сеттера
// console.log('by getter price:', product.price);

// console.log(product);

// STATIC PROPS & METHODS
class Comment {
  static name = 'Anonim';
  static showName() {
    console.log(this.name);
  }

  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
}

const comment1 = new Comment(
  'Yulia',
  'Lorem ipsum dolor sit amet consectetur.',
);
// console.log(comment1);

// console.log(comment1.name); //undefined
// comment1.showName(); //TypeError

// console.log(Comment.name);
// Comment.showName();

// === PRACTICE === //
class BaseProduct {
  constructor(name, price, category) {
    this.name = name;
    this._price = price;
    this.category = category;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }
}

class WeightProduct extends BaseProduct {
  constructor(weight, name, price, category) {
    super(name, price, category);
    this.weight = weight;
  }

  getTotalCost() {
    return this.weight * this.price;
  }

  remove(value) {
    if (this.weight - value < 0) {
      return 'На складе недостаточно товара';
    }
    return (this.weight -= value);
  }

  add(value) {
    return (this.weight += value);
  }
}

const product1 = new WeightProduct('2.5', 'Pineapple', 60, 'fruits');
console.log(product1);

console.log('К оплате:', product1.getTotalCost());
// console.log(product1.remove(3));
console.log('Остаток после продажи:', product1.remove(2));
console.log('Остаток после прихода товара:', product1.add(5));

class CountProduct extends BaseProduct {
  constructor(count, name, price, category) {
    super(name, price, category);
    this.count = count;
  }

  getTotalCost() {
    return this.count * this.price;
  }

  remove(value) {
    return this.count - value < 0
      ? 'На складе недостаточно товарa'
      : (this.count -= value);
  }

  add(value) {
    return (this.count += value);
  }
}

const product2 = new CountProduct(20, 'Kinder chocolate', '27', 'sweets');
console.log(product2);

console.log('К оплате:', product2.getTotalCost());
console.log('Остаток после продажи:', product2.remove(5));
console.log('Остаток после прихода товара:', product2.add(15));
