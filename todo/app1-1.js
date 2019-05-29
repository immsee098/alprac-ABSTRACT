const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completedTodos = document.querySelector('.completed-todos')
const $activeTodos = document.querySelector('.active-todos')
const $clearCompleted = document.querySelector('.clear-completed > .btn')
const $nav = document.querySelector('.nav');

let todos = [];

function render(){
    let html = ''
    todos.forEach(({id, content, completed}) => {
        html += `<li id="${id}" class="todo-item"><input class="custom-checkbox" type="checkbox" ${completed ? 'checked' : ''} id="ck-${id}">
        <label for="ck-${id}">${content}</label><i class="remove-todo far fa-times-circle"></i></li>`
        
    });
}

function addTodo(content){
    todos = [{id:generateId(), content, completed:false}, ...todos];
    render()
}

function removeTodo(id){
    todos = todos.filter(todo => todo.id !== +id);
    render();
}

function generateId(){
   return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function toggleTodo(id){
    todos = todos.map(todo=>(todo.id === +id ? {...todo, completed : !todo.completed} : todo));
    console.log(todos)
    render();
}

function clearCompleted(){
    todos  = todos.filter(todo => todo.completed);
    render()

}


$inputTodo.addEventListener('keyup', e =>{
    const content = $inputTodo.value.trim();
    if(!content || e.keyCode !== 13) return;
    addTodo(content);
    $inputTodo.value = ''
})

$todos.addEventListener('change',e => {
    toggleTodo(e.target.parentNode.id)
})


$clearCompleted.addEventListener('click', e => {
    clearCompleted();
})

$todos.addEventListener('click', e => {
    if(!e.target.classList.contains('remove-todo')) return;
    removeTodo(e.target.parentNode.id);
})



