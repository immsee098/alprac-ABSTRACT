<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Todos V0-2</title>
  <style>
  body {
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .input-todo {
    padding-top: 30px;
    width: 500px;
    height: 60px;
    font-size: 40px;
    border: 0;
  }

  .input-todo:focus {
    outline: none;
  }

  li {
    text-align: left;
    font-size: 25px;
    list-style: none;
  }

  li input[type=checkbox] {
    transform: scale(1.5);
    vertical-align: middle;
  }

  .remove {
    transform: scale(1.2);
    vertical-align: middle;
  }

  /* input[type=checkbox]:checked + span {
    text-decoration: line-through;
  } */

</style>
</head>
<body>
  <input class="input-todo" placeholder="What needs to be done?" autofocus>
  <button class='add'>ADD</button>
  <ul class="todos"></ul>
  <script>
    let todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ];

    const $todos = document.querySelector('.todos');
    const $add = document.querySelector('.add');
    const $inputTodo = document.querySelector('.input-todo');

    function printTodo() {
        let aaa = $todos.innerHTML

        todo.forEach(function (todo) {
         aaa += `<li id="${todo.id}"><label><input type="${todo.completed ? 'checked' :''} "> ${todo.content} </label></li>`
    });
  
    }
    
    function addTodo(){
        let bbb = {}
    }

    function removeTodo(){
    }



    
  </script>
</body>
</html>
