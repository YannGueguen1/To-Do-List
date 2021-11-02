function Todo({todo,index,remove}){
  let getClassName = () => {
    if (todo.isCompleted) {
      return 'todo-completed';
    }
    return '';
     }

  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className={`todo ${getClassName()}`} onClick={handle}>{todo.text} (-)</div>
}
