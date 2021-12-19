// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//--------Regular function
// const sayHello = function(name){
//   return "Hey there," + name + "!"
// }

//Arrow function

const sayHello = (name) => `Hey there, ${name}!`;

console.log(sayHello('Rex'));

//-----------

const todos = [
  { title: 'Buy Bread', isDone: true },
  { title: 'Talk to Monika', isDone: true },
  { title: 'Again talk to her', isDone: false },
];

const thingsDone = todos.filter((element) => element.isDone == true);

console.log(thingsDone);
//-----------------

const extraTodos = [
  { title: 'Buy Bread', isDone: true },
  { title: 'Talk to Monika', isDone: true },
  { title: 'Again talk to her', isDone: true },
  { title: 'Do gym', isDone: false },
  { title: 'Play batminton', isDone: false },
  { title: 'Play cod', isDone: false },
];

const newArray = [];
const thingsNotDone = extraTodos.filter(
  (element) => !element.isDone && newArray.push(element.title)
);

console.log(newArray);
