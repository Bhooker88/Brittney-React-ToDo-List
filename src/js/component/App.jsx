import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }
  
  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder='Add todo'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  
  function App() {
    const [todos, setTodos] = React.useState([
      {
        text: "Walk the dog",
        isCompleted: false
      },
      {
        text: "Do laundry",
        isCompleted: false
      },
      {
        text: "Go to the grocery store",
        isCompleted: false
      }
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="todoList my-5 ms-5 me-5 py-5 ps-5 pe-5">
        <h1>Todo List</h1>
        <div className="d-flex">
         <TodoForm addTodo={addTodo}/>
         </div>
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default App;