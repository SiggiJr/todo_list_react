const TodoItem = ({todo: todoItem, todoCollection, setTodoCollection}) => {

  const deleteTodo = () => {
    setTodoCollection(
      todoCollection.filter(todo => {
        if (todo.id !== todoItem.id) {
          return true
        }
      })
      )
  }

  const handleChecked = () => {
    setTodoCollection(todoCollection.map(todo => {
        if (todo.id === todoItem.id) {
          todo.done = !todo.done
        }
        return todo;
      })
    )
  }

  const todoStyle = {
    textDecoration: todoItem.done ? "line-through" : "none"
  }

  return ( 
    <>
    <li>
      <div>
        <input type="checkbox" name={todoItem.id} id={todoItem.id} onChange={handleChecked}/>
            <span style={todoStyle}>{todoItem.title}</span>
      </div>
    <button onClick={deleteTodo}>🗑️</button>
    </li>
    </>
  );
}

export default TodoItem;