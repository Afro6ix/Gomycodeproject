import React from 'react'
import ProductsBrand from '@/components/ProductsBrand'
import Overview from '@/components/Overview'
import Items from './categories/page'

const page = () => {
  return (

    <div>
        <div className='my-12'>
            <h1 className='text-3xl font-bold text-center mb-8 md:text-4xl md:mb-12 md:mt-12 sm:text-3xl sm:mb-8'>Products</h1>
            {/* <Overview />
            <ProductsBrand /> */}
            <Items/>
        </div>

    </div>
  )
}

export default page