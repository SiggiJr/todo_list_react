import { useState } from "react";

const TodoForm = ({addTodoCollection}) => {

  const [todoInput, setTodoInput] = useState("")

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoInput,
      done: false
    };

    addTodoCollection(prevTodos => [...prevTodos,newTodo]);
    setTodoInput("");
  }

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  return ( 
    <form name="todo_form" onSubmit={addTodo} className="todo_form">
      <input onChange={handleInput} type="text" name="todo" id="todo"  value={todoInput}/>
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;