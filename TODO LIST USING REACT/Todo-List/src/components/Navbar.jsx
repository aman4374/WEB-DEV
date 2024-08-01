import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-600 text-white py-2'>
        <div className="logo relative">
          <img className='w-[15%]  absolute top-[.2rem] mx-2 hover:w-[16%] cursor-pointer' src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png" alt="" srcSet="" />
            <span className=' cursor-pointer font-bold text-xl mx-10'>ToDoTrac</span>
        </div>
        <ul className="flex gap-10 mx-9 ">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
         
    </nav>
  )
}

export default Navbar
