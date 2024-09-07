import React from 'react'

export const Card = () => {
  return (
    <div>
        <div className=" flex mx-40 pt-36 ">
            <div className="info p-10 w-2/3">
               <h1 className='font-bold text-6xl text text-wrap p-5'>YOUR FEET 
                    DESERVE
                    THE BEST!</h1>
            <p className='p-5'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="buttons flex gap-4 w-full mx-5 my-5">
            <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
               Shop now
            </button>
            <button className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                 Category
            </button>
        </div>
            </div>
        <div className="image my-10">
            <img src="/public/shoe_image.svg" alt="" />
        </div>
        
        </div>
        
    </div>
  )
}
