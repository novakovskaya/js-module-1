// === FUNCTION-CONSTRUCTOR === //
function Constuctor(prop1 = 0, prop2 = 1) {
  this.prop1 = prop1;
  this.prop2 = prop2;
}

// Method call & construct
// создание нового объекта(экземпляра) с помощью ключего слова new
const newObj = new Constuctor();
// console.log(newObj);

//* EXAMPLES
const User = function (login, password) {
  this.login = login; //login: ''
  this.password = password;

  //методы лучше записывать вне тела функции-конструктора, а именно в прототип, так как каждый экземпляр получит доступ к методам, но не каждому он будет нужен, но будет занимать ячейку памяти
  this.showLogin = function () {
    console.log(this.login);
  };
};

User.prototype.showPassword = function () {
  console.log(this.password);
};

// console.log(User.prototype);

const user1 = new User('user1', 'qweqwe');
// console.log('user1:', user1);

const user2 = new User('user2', 'zaszas');
// console.log('user2:', user2);

// Создание новой функции-конструктора на основе исходной
function NewUser(name, age, login, password) {
  User.call(this, login, password); // call || apply
  this.name = name;
  this.age = age;
}

// Перезаписываем prototype новой функции и привязываем в него prototype из исходной функции
NewUser.prototype = Object.create(User.prototype);
NewUser.prototype.constuctor = NewUser;
// console.log(NewUser.prototype);

// Добавляем новые методы в prototype новой функции
NewUser.prototype.updateAge = function () {
  return (this.age += 1);
};

const newUser1 = new NewUser('Yulia', 26, 'new user1', 'qweqwe');
// console.log('newUser1:', newUser1);

// newUser1.showLogin();
// newUser1.showPassword();
// console.log(newUser1.updateAge()); //27

// === PRACTICE === //
// ======= * 1st * =======
function Post(title = 'Title', text = 'Lorem ipsum dolor...') {
  this.title = title;
  this.text = text;
}

Post.prototype.updateTitle = function (newTitle) {
  return (this.title = newTitle);
};

const post1 = new Post();
console.log('post1:', post1);

// ======= * 2nd * =======
function NewPost(imageUrl, title, text) {
  Post.call(this, title, text);
  this.image = imageUrl;
}

NewPost.prototype = Object.create(Post.prototype);
NewPost.prototype.constuctor = NewPost;
// console.log(NewPost.prototype);

NewPost.prototype.updateImage = function (url) {
  return (this.image = url);
};

const newPost1 = new NewPost(
  'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d',
);
console.log('newPost1:', newPost1);

// ======= * 3rd * =======
function BestPost(title, text, imageUrl, author) {
  NewPost.call(this, imageUrl, title, text);
  this.author = author;
}

BestPost.prototype = Object.create(NewPost.prototype);
BestPost.prototype.constuctor = BestPost;

BestPost.prototype.showAuthor = function () {
  console.log(this.author);
};

const bestPost1 = new BestPost(
  'Lorem',
  'Lorem ipsum dolor sit amet consectetur.',
  'http://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg',
  'Yulia',
);
console.log('bestPost1:', bestPost1);

bestPost1.showAuthor();
console.log(
  bestPost1.updateImage(
    'http://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg',
  ),
);
console.log(bestPost1.updateTitle('My new post'));

console.log('bestPost1:', bestPost1);
