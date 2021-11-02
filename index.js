function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    todos[index].isCompleted = !todos[index].isCompleted;
    console.log(todos)
    // let temp = [...todos];    
    // temp.splice(index, 1);
    // setTodos(temp);
    let temp = [...todos];
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        <div className="list-title">List of todos</div>
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
