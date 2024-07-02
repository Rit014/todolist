import React, { useState } from 'react';
import './App.css';
import TodoItem from './Component/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './Features/todoSlice';

const App = () => {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // add todos
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Write somthing!!!")
      return;
    } else {
      dispatch(addTodo(input))
    }
    setInput('')
  }

  // remove todos
  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  }


  return (
    <>
      <div className='app'>
        <h1>Todo List</h1>
        <form className='app-form' onSubmit={handleAddTodo}>
          <input type="text" value={input} placeholder='enter todo...'
            onInput={(e) => setInput(e.target.value)}
          />
          <button type="submit">add</button>
        </form>
        <div className='todos'>
          {
            count > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                onCheck={handleTodoDone}
              />
            ))
          }
          {count === 0 && <p>No todos </p>}
        </div>
      </div>
    </>
  )
}

export default App;
