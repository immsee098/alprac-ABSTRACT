const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function render() {
    let html = '';
  
    todos.forEach(function (todo) {
        html += `<li id="${todo.id}"><label><input type="${todo.completed ? 'checked' :''} "> ${todo.content} </label></li>`
  
    });
  
    return html;
  }
  
  console.log(render());




  //2 (이거 안됨)

  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function getValues(key) {
    todos = todos.map(function(todo){
      return(todo[key]);
    })
  
  }
  
  console.log(getValues('id')); // [3, 2, 1]
  console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
  console.log(getValues('completed')); // [ false, true, false ]

  //3
  const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function sortBy(key) {
    const copy = todos.slice();
    
    copy.sort(function(a, b){
      return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
    })
    return copy
  }
  
  console.log(sortBy('id'));
  /*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
  */
  console.log(sortBy('content'));
  /*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
  console.log(sortBy('completed'));
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
  */



  //4
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function addTodo(newTodo) {
    todos = [newTodo].concat(todos);
    // todos = todos.concat[newTodo];
  }
  
  addTodo({ id: 4, content: 'Test', completed: false });
  
  console.log(todos);
  /*
  [
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */


  //5
  
let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function removeTodo(id) {
    todos = todos.filter(function(todo){
      return todo.id !== id;
    })
  
  }
  
  removeTodo(2);
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */



  //6
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedById(id) {
    todos = todos.map(function(todo){
      return todo.id == id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
    })
  
  }
  
  toggleCompletedById(2);
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */



  //7
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedAll() {
    todos = todos.map(function(todo){
     return Object.assign({}, todo, {completed: true});
    })
  
  }
  
  toggleCompletedAll();
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: true }
  ]
  */

  

  //8
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function countCompletedTodos() {
    return todos.filter(function(todo){
      return todo.completed;
    }).length
  
  }
  
  console.log(countCompletedTodos()); // 1