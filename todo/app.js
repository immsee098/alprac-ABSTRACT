let todos = [{id: 1, content: "HTML", completed: false}]

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');

function render(){
    let html = ''

    todos.forEach(({id, content, completed}) => {
        html += `<li id="${id}" class="todo-item"><input class="custom-checkbox" type="checkbox" ${completed ? 'checked' : ''} id="ck-${id}">
        <label for="ck-${id}">${content}</label><i class="remove-todo far fa-times-circle"></i></li>`
        
    });

    $todos.innerHTML = html;
    console.log(todos)
}

//지우기
$todos.onclick = function(e){
    if(!e.target.classList.contains('remove-todo')) return;
    console.log(e.target.parentNode.id);
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
    render();
}

//id만들기
function generateId(){
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

//엔터 누르면 입력
$inputTodo.onkeyup = function(e){
    content = $inputTodo.value.trim()
    if(content === '' || e.keyCode !== 13) return;
    $inputTodo.value='';

    todos = [{id: generateId(), content, completed:false}, ...todos];
    render();
}

//박스 체크하기
$todos.onchange = function(e){
    const id = +e.target.parentNode.id
    todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, {completed: !todo.completed}): todo))
    console.log(todos)
}

//한꺼번에 체크/언체크(mark all completed)

//체크된거 한꺼번에 지우기

//n아이템 남음

//각 버튼을 누르면 활성화
$nav.addEventListener('click', (e)=>{
    [...$nav.children].forEach(navItem => {
        navItem.classList.remove('active');
    });
    e.target.classList.add('active');
});

//각 버튼을 누르면 각자 리스트 보여줌
//ALL -> 건드릴 필요x
//Active
$nav.onclick = function(e){
    if(e.target.id === 'active'){
        todos = todos.map(todo => (todo.completed == "completed"))
    }

}
//Completed


console.log(todos)

render();