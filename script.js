/*const options = {month: "short", weekday: "long", day:"numeric"};
const today = new Date();*/

/*dateElement.innerHTML = today.toLocaleDateString( [locales][, options);*/

//Selectors
const input = document.getElementById('input')
const addButton = document.querySelector('#addbutton');
const addList = document.querySelector('#addlist');

//Event addEventListener
addButton.addEventListener('click', addtodo);
addList.addEventListener('click', deleteCheck);

//Functions
function addtodo(event) {
  event.preventDefault();

  //To do div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todolist');
  //Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;
  newTodo.classList.add('newTodo');
  todoDiv.appendChild(newTodo);
  //check checkbutton
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="far fa-check-circle"></i>'
  checkButton.classList.add('check');
  todoDiv.appendChild(checkButton);
  //trush trushbutton
  const trushButton = document.createElement('button');
  trushButton.innerHTML = '<i class="far fa-trash-alt"></i>'
  trushButton.classList.add('trush');
  todoDiv.appendChild(trushButton);

  //Add todo List
  addList.appendChild(todoDiv);

  //When push button, delete input.value
  input.value = '';
};

function deleteCheck(event) {
  const item = event.target;
  //delete todo
  if(item.classList[0] === 'trush') {
    const todo = item.parentElement;
    todo.remove();
  }

  //check todo
  if(item.classList[0] === 'check') {
    const todo = item.parentElement;
    todo.classList.toggle('done');
  }
}
