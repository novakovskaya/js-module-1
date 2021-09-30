// ==== GLOBAL OBJECTS: ====
// 1.window
// console.log(window);
// window.alert('Hello!');

// 2.document
// console.dir(document);

// узлы: узел-элемент(тег), узел-комментарий и текстовый узел

// ==== доступ к элементам ====
// по селектору тега:
const titleByTag = document.querySelector('h1');
// console.log('titleByTag:', titleByTag);
// console.dir(titleByTag);

// по селектору идентификатора:
const titleById = document.querySelector('#title');
// console.log('titleById:', titleById);
// console.dir(titleById);
const titleId = document.getElementById('title');
// console.log('titleId:', titleId);

// по селектору класса:
const titleByClass = document.querySelector('.title');
// console.log('titleByClass:', titleByClass);
// console.dir(titleByClass);

// доступ к группе элементов с одинаковым классом
const textByClass = document.getElementsByClassName('text');
// console.log('textByClass:', textByClass); // HTMLCollection - колекция без методов массива

// по селектору атрибута:
const titleByAttr = document.querySelector('[data-name="my-title"]');
// console.log('titleByAttr:', titleByAttr);
// console.dir(titleByAttr);

// по селектору наследника:
const elemByParent = document.querySelector('body > p');
// console.log('elemByParent:', elemByParent);
// console.dir(elemByParent);

// доступ к группе элементов
const elemsByParent = document.querySelectorAll('body > p');
// console.log('elemsByParent:', elemsByParent); // NodeList - псевдомассив || колекция элементов с методом forEach()

// по селектору потомка:
const elemByProto = document.querySelector('body p');
// console.log('elemByProto:', elemByProto);
// console.dir(elemByProto);

// ==== навигация ====
// console.log(titleByTag.parentNode); // получаем родителя
// console.log(titleByTag.childNodes); // NodeList [text, span, text]
// console.log(titleByTag.children); // HTMLCollection [span]
// firstChild, lastChild, previousSibling, nextSibling - text || elem
// firstElementChild, lastElementChild, previousElementSibling, nextElementSibling - only tag

// === свойства элементов ===
// console.dir(titleByTag);
// 1. class - в свойстве classList в ввиде DOMTokenList
// console.log(titleByTag.classList);
titleByTag.classList.add('new-class');
// console.log(titleByTag.classList.contains('qweqwe')); //false
// console.log(titleByTag.classList.contains('title')); //true
titleByTag.classList.remove('title');
titleByTag.classList.replace('new-class', 'new-title');
// titleByTag.classList.toggle(''); - работает с событиями, когда, например, при клике нужно скрыть класс

// 2. id - отдельное свойство

// 3. attributes
// console.log('attributes:', titleByTag.attributes); // NamedNodeMap
// console.log('id:', titleByTag.attributes.id); // id = "title"
// console.log('dataset:', titleByTag.dataset); // DOMStringMap {name: 'my-title'}

// добавить новый атрибут
titleByTag.setAttribute('name', 'main-title');
// смотреть атрибут
// console.log(titleByTag.getAttribute('name'));
// удалить атрибут
titleByTag.removeAttribute('data-title');

// console.log('value:', titleByTag.value); //undefined (для форм)
// console.log('textContent:', titleByTag.textContent); //text in html(Lorem ipsum dolor sit)

// console.log(titleByTag.style);
titleByTag.style.color = 'blue';
titleByTag.style.backgroundColor = 'yellow';
titleByTag.style.padding = '20px';
// titleByTag.style.textAlign = 'center';

// === создание узлов (2 способа) ===
// 1. createElement() => object
const button = document.createElement('button');
button.textContent = 'click';
console.log(button);
// console.dir(button);
button.style.backgroundColor = 'green';
button.classList.add('my-btn');
button.setAttribute('type', 'button');
button.dataset.type = 'my-button';

// 2. `` - строчная разметка => string
const stringBtn = `<button class="my-btn" type="button" data-type="my-button" style="background-color: red">string btn</button>`;
console.log(stringBtn);

// === клонирование ===
const cloneBtn = button.cloneNode(true); // метод для объектов
console.log(cloneBtn);
// true - если нужно клонировать вместе с текстом внутри тега
// false - если нужно клонировать только сам тег з атрибутами

const cloneBtnBefore = button.cloneNode(false);
cloneBtnBefore.textContent = 'before';

const cloneBtnAfter = button.cloneNode(false);
cloneBtnAfter.textContent = 'after';

const cloneBtnPrepend = button.cloneNode(false);
cloneBtnPrepend.textContent = 'prepend';

const cloneBtnAppend = button.cloneNode(false);
cloneBtnAppend.textContent = 'append';

// === встраивание элементов в html (2 вида) ===
// для объектов созданых через createElement():
// 1й способ
titleByTag.before(cloneBtnBefore); //строго перед елемента
titleByTag.after(cloneBtnAfter); //строго после елементом

titleByTag.appendChild(cloneBtnAppend);
titleByTag.prepend(cloneBtnPrepend);

// 2й способ
// titleByTag.insertAdjacentElement('beforebegin', cloneBtnBefore);
// titleByTag.insertAdjacentElement('afterbegin', cloneBtnPrepend);
// titleByTag.insertAdjacentElement('beforeend', cloneBtnAppend);
// titleByTag.insertAdjacentElement('afterend', cloneBtnAfter);

// для строк:
// titleByTag.innerHTML = stringBtn; //плохой метод

titleByTag.insertAdjacentHTML('beforebegin', stringBtn);
titleByTag.insertAdjacentHTML('afterbegin', stringBtn);
titleByTag.insertAdjacentHTML('beforeend', stringBtn);
titleByTag.insertAdjacentHTML('afterend', stringBtn);

// === удаление===
// titleByTag.innerHTML = ''; - для строчных элементов

// titleByTag.removeChild(cloneBtnBefore); // нельзя удалить, потому что не является вложенныым
// titleByTag.removeChild(cloneBtnAfter); // нельзя удалить, потому что не является вложенныым
titleByTag.removeChild(cloneBtnAppend);
titleByTag.removeChild(cloneBtnPrepend);

cloneBtnBefore.remove();
cloneBtnAfter.remove();

const array = ['html', 'js', 'css', 'react', 'nodejs'];
console.log(array);
console.log(array.at(-1)); // последний элемент
