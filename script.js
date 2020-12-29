const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");



const options = {month: "short", weekday: "long", day:"numeric"};
const today = new Date();

/*dateElement.innerHTML = today.toLocaleDateString( [locales][, options);*/


const button = document.getElementById('addbutton');
button.addEventListener('click', ()=> {
  const todo = document.createElement('div');
  todo.classList.add('todo');

  const input = document.getElementById('newtodo');

  const addrist = document.createElement('li');
  addrist.innerText = input.value;
  todo.appendChild(addrist);

  const completedbutton = document.createElement('button');
  completedbutton.innerHTML = '<i class="far fa-check-circle"></i>'
  completedbutton.classList.add('complete-btn');
  todo.appendChild(completedbutton);

  const trushbutton = document.createElement('button');
  trushbutton.innerHTML = '<i class="far fa-trash-alt"></i>'
  trushbutton.classList.add('trush-btn');
  todo.appendChild(trushbutton);

  const ul = document.getElementById('list');
  ul.appendChild(todo);

  /*-----addボタンを押したときの打った文字が消される-----*/
  input.value = '';
});


const deleteCheck = querySelector('trush-btn');
deleteCheck.addEventListener('click', ()=> {

});

/*-----エンターキーを押した時, todoリスト追加の処理-----
document.addEventListener('keyup', event => {
  if(event.keycode == 13) {
  }
});*/
