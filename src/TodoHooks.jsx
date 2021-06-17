import React,{useState} from 'react'
import FormContent from './FormContent';


function TodoHooks() {

    const [todos, setTodos] = useState([]);

    const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );


    return (
        <div >
            <FormContent 
                onSubmit ={text =>setTodos([{ text, complete: false }, ...todos])}
            />
            <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
        </div>
    )
}

export default TodoHooks;



