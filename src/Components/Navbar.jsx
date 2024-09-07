import React from 'react'

export const Navbar = () => {
  return (
    <nav className='fixed top-0 p-5 w-full backdrop-blur '> 
        <div className='flex justify-between items-center  '>
            <div className='mx-20'>
                <img  src="/public/brand_logo.svg" alt="logo" />
            </div>
            <ul className=' fontgg flex gap-7'>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='mx-20'><button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>login</button></div>
            
        </div>
    </nav>
  )
}
