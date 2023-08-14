import './App.css';
import AddToDo from './components/addtodo';
import TodoItem from './components/todoitem';
import { useState } from 'react';

function App() {
  const [todo,setToDo] = useState([])
  const getItem=(item)=>{
    setToDo((prevState)=>{
      return[...prevState, item]
    }) 
  }

  const getCompleted = (id) =>{
    setToDo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !==id;
      })
    })
  }
  return (
    <div className='todo'>
      <AddToDo item={getItem}/>
      {todo && todo.map((todo, index)=>(
        <TodoItem id={index} item={todo} completed={getCompleted}/>
      ))}
    </div>
  );
}

export default App;
