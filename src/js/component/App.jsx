import React, { useState } from 'react';

const App = () =>{
    const [list, setList] = useState ([]);
    const [input, setInput] = useState ("");

    const addTodo = (todo) => {
        const newTodo= {
            id: Math.random(),
            todo: todo
        };

        setList([...list, newTodo]);
        setInput("");

    };

    const deletetodo = (id) =>{
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    }

    return (
        <div className="todoList bg-light py-5 ps-5 pe-5 mt-5">
            <h1>Todo List</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => addTodo(input)}>Add</button>
            <ul>
               {list.map((todo) =>(
                <li key={todo.id}>
                    {todo.todo}
                    <button className="ms-2" onClick={() => deletetodo(todo.id)}>&times;</button>
                </li>
               ))}
            </ul>
        </div>
    )
}

export default App; 