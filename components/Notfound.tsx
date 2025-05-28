import React from 'react'

const Notfound = () => {
  return (

         <div className='flex flex-col items-center justify-center h-screen gap-[20px]'>
        
        <div className='flex flex-col items-center justify-center gap-[20px]'>
        <h1 className='text-6xl font-bold'>404 Not Found</h1>
        <p className='text-2xl'>The page you are looking for is not found</p>
        </div>
         
        <div>
        <p><a className='underline hover: text-orange-600' href="/">Back to Home</a></p>
        </div>
        </div>

  )
}

export default Notfound