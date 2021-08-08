//Call stack
//LIFO - Last In - Last Out

// | 1  | This is 1 function STARTED
// | 2  | This is 2 function STARTED
// | 3  | This is 3 function STARTED
// | 4  | This is 4 function STARTED
// | 5  | This is 5 function STARTED
// | 6  | This is 6 function STARTED
// | 7  | This is 6 function FINISHED
// | 8  | This is 5 function FINISHED
// | 9  | This is 4 function FINISHED
// | 10 | This is 3 function FINISHED
// | 11 | This is 2 function FINISHED
// | 12 | This is 1 function FINISHED
//functional execution context

first();
function first() {
  console.log('This is 1 function STARTED');
  second();
  console.log('This is 1 function FINISHED');
}

function second() {
  console.log('This is 2 function STARTED');
  third();
  console.log('This is 2 function FINISHED');
}

function third() {
  console.log('This is 3 function STARTED');
  fourth();
  console.log('This is 3 function FINISHED');
}

function fourth() {
  console.log('This is 4 function STARTED');
  fifth();
  console.log('This is 4 function FINISHED');
}

function fifth() {
  console.log('This is 5 function STARTED');
  sixth();
  console.log('This is 5 function FINISHED');
}

function sixth() {
  console.log('This is 6 function STARTED');
  console.log('This is 6 function FINISHED');
}
