import React, { useEffect, useRef , useState} from 'react'
import Todo_icon from '../assets/todoicon.png'
import { Todoitems } from './Todoitems'

const Todo = () => {
  
  const inputRef = useRef();

  const [todoList, setTodoList] = useState(localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')) : []);

  const add = () => {
    const inputValue = inputRef.current.value.trim();

    const newToDo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    if (inputValue === '') {
      alert('Please Enter a Task');
    }
    else {
      setTodoList((prev) => [...prev, newToDo]);
      inputRef.current.value = '';
    }
  }

  const deleteItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  const toggleTo = (id) => {
    setTodoList((newToDo) => {
      return newToDo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
          
        }
        return todo;
      }
      )
    })
  }

  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  },[todoList])
  
  return (

    <div className='min-h-[600px] bg-zinc-800 p-8 rounded-2xl place-self-center drop-shadow-lg  max-w-[500px]  min-w-[500px] gap-6 max-[550px]:w-[350px] max-[550px]:min-w-[400px] max-[440px]:min-w-[150px] max-[440px]:min-h-[480px]  flex flex-col'>
            
      <div className='flex flex-row items-center gap-4'>
          <img src={Todo_icon} className='h-6' alt="" />
          <h2 className='text-2xl text-white font-bold'> To-do List </h2>
          
      </div> 

      <hr className='w-[180px] border-blue-400  border-[1.5px] opacity-60' />
      <div className='w-auto  mt-2 '>
        <input  ref={inputRef} className='outline-none h-100  p-[10px] bg-zinc-700 w-[70%] text-slate-200 rounded-l-lg max-[550px]:w-[60%] ' type="text" id="" placeholder='Add Your Task ' />
        <button onClick={add} className='text-white p-[10px] bg-gradient-to-r from-blue-400 to-blue-500  w-[25%] rounded-r-lg  max-[440px]:w-[30%]  '> ADD + </button>
      </div>

      <div className='flex justify-center flex-col gap-3 '>
        {todoList.map((todo, index ) => {
          return <Todoitems key={index} text={todo.text} id={todo.id} isComplete={todo.completed} deleteItem={deleteItem} toggle={toggleTo}  />
        })};
      </div>

    </div>
  )
}

export default Todo