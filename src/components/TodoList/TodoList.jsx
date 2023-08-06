import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {

  const [todoCollection, setTodoCollection] = useState([])

  return ( 
    <section className="todo_section">
      <h1>Website Todo</h1>
      <ul>
        {todoCollection.map(todo => <TodoItem key={todo.id} todo={todo} todoCollection={todoCollection} setTodoCollection={setTodoCollection}/>)}
      </ul>
      <TodoForm addTodoCollection={setTodoCollection}/>
    </section>
  );
}

export default TodoList;