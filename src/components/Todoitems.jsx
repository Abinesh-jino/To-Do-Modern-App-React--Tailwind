import React from 'react'
import checked from '../assets/Checked.svg'
import uncheck from '../assets/Unchecked.svg'
import deleteicon from '../assets/deleteicon.svg'
import Todo from './Todo'

export const Todoitems = ( {text , isComplete , id , deleteItem , key ,toggle}) => {
  

  return (
      <div className='flex flex-1 gap-10 cursor-pointer bg-gray-800 p-4 rounded-xl   items-center'>
          
      <div className='flex flex-1 gap-4 max-w-[90%] ' onClick={()=>toggle(id)} id='todoItem'>
                <img className='h-[30px]' src={isComplete ? checked :  uncheck} alt="" id='check' />
                <p className={`text-slate-200 font-normal min-w-18  text-start ${isComplete ? 'line-through' : ''}`} > {text} </p>
          </div>
      
      
        <div className=' flex justify-end w-[08%]'>
        <img onClick={()=>{deleteItem(id)}}  className=' justify-end h-[28px]' src={deleteicon} alt="" />
        </div>
          
          
    </div>
    
  )

  
}
