let todos=[];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');
const $completedTodos = document.querySelector('.completed-todos')
const $activeTodos = document.querySelector('.active-todos')
const $completeAll = document.querySelector('#ck-complete-all')
const $clearCompleted = document.querySelector('.clear-completed > .btn')


function getTodos(){
    todos=[
        {id: 1, content: 'HTML', completed:false},
        {id: 2, content: 'CSS', completed:false},
        {id: 3, content: 'Javascript', completed:false}
    ];

    //ajax 예시
    fetch('#')
    .then(res=>res.json()) //약속이 성취됐을 떄 실행되는 then 함수
    .then(todosFromServer=>{
        todos=todosFromServer;

        console.log('[GET]\n', todos)
    })



    render();
}

render();

 
function render(){
   //필터링해서 복사본 만드는 과정 
    const _todos = todos.filter(todo => {
        if (navState=='active') return !todo.completed;
        if (navState=='completed') return todo.completed;

        return true;});
        // todo.completed})
    



    let html = ''
    _todos.forEach((todo) => {
        html += `<li id="${todo.id}" class="todo-item">
        <input class="custom-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''} id="ck-${todo.id}">
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
        
    });
    $todos.innerHTML = html;
    $completedTodos.innerHTML = todos.filter(todo => todo.completed).length;
    $activeTodos.innerHTML = todos.filter(todo => !todo.completed).length;
    console.log(todos)
}

function addTodo(content){
    // todos = [...todos]; //내용 같은 애의 주소만 바꿈
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

function completeAll(completed){
    todos = todos.map(todo =>({...todo, completed}))
    console.log(todos);
    render();
}

function clearCompleted(){
    todos  = todos.filter(todo => todo.completed);
    render()

}


window.onload = getTodos;

$inputTodo.addEventListener('keyup', e =>{
    const content = $inputTodo.value.trim();
    if(!content || e.keyCode !== 13) return;
    addTodo(content);
    $inputTodo.value = ''
})

$todos.addEventListener('click', e => {
    if(!e.target.classList.contains('remove-todo')) return;
    removeTodo(e.target.parentNode.id);
})

$todos.addEventListener('change',e => {
    toggleTodo(e.target.parentNode.id)
})

$completeAll.addEventListener('change', e => {
    completeAll($completeAll.checked);
})

$clearCompleted.addEventListener('click', e => {
    clearCompleted();
})

$nav.addEventListener('click', e => {
    if(!e.target.nodeName === 'LI') return; //nodeName은 대문자로 반환해줌

    // [...$nav.children]//이터러블이라배열로 변환됨
    [...$nav.children].forEach(navItem => {
        if(navItem === e.target) {
            navItem.classList.add('active')
        }
        else {
            navItem.classList.remove('active')
        }
    });
    navState = e.target.id;
    render();
})