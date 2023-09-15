import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


function Navbar() {
  const [nav,setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-[#212428] mx-auto flex justify-center items-center sm:px-8 border-b-[1px] border-b-gray-600'>
        <div>
          <h1 className='font-bold text-2xl uppercase cursor-pointer text-designColor duration-300 '>Image Gallery</h1>
        </div>
        
        {/* <div>
          <ul className='text-xl md:flex hidden gap-6'>
            <li className='font-bold p-2 cursor-pointer text-[#c4cfde] hover:text-blue-500 duration-300'>Home</li>
            <li className='font-bold p-2 cursor-pointer text-[#c4cfde] hover:text-blue-500 duration-300'>Service</li>
            <li className='font-bold p-2 cursor-pointer text-[#c4cfde] hover:text-blue-500 duration-300'>About</li>
            <li className='font-bold p-2 cursor-pointer text-[#c4cfde] hover:text-blue-500 duration-300'>Contact</li>
          </ul>
        </div> */}

      {/* ek div lete hai jisme wo rahega and us div me jab click karenge nav TRUE ho jayga 
          and FALSE wala sign dikane lagega    
      */}
        <div onClick={handleNav} className='md:hidden block'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        
          <ul className={nav ? 'w-[75%] h-full top-0 left-0 fixed md:hidden border-r border-r-gray-900 bg-[#212428] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='text-2xl font-bold text-blue-500 p-4 border-b border-gray-900'>KHUSBOO STONE WORKS</h1>
            <li className='font-bold p-4 cursor-pointer text-[#c4cfde] border-b border-gray-600 hover:text-blue-500 duration-300'>Home</li>
            <li className='font-bold p-4 cursor-pointer text-[#c4cfde] border-b border-gray-600 hover:text-blue-500 duration-300'>Service</li>
            <li className='font-bold p-4 cursor-pointer text-[#c4cfde] border-b border-gray-600 hover:text-blue-500 duration-300'>About</li>
            <li className='font-bold p-4 cursor-pointer text-[#c4cfde] border-b border-gray-600 hover:text-blue-500 duration-300'>Contact</li>  
          </ul>
        

        
    </div>
  )
}

export default Navbar