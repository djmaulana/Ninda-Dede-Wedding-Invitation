import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute inset-1 md:block hidden w-1/2 text-center h-screen marker: left-0 right-0 mx-auto'>
        <nav className='flex flex-col w-full mt-5 bg-white'>
            <div className='text-white hover:cursor-pointer relative z-20 bg-[#595959] opacity-60 rounded-full py-2 px-4'>
                <a href="#" className='mx-3 hover:cursor-pointer hover:text-black'>Home</a>
                <a href="#" className='mx-3 hover:cursor-pointer hover:text-black'>Our Story</a>
                <a href="#" className='mx-3 hover:cursor-pointer hover:text-black'>Greetings</a>
                <a href="#" className='mx-3 hover:cursor-pointer hover:text-black'>Location</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar