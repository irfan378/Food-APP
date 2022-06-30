import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

const ProductCard:NextPage = () => {
  return (
    <div className='w-full md:w-[22%] flex flex-col items-center justify-center px-5 py-10 cursor-pointer'>
   <Image src="/img/pizza.png" alt="" width="500" height="500"/>
   <h1 className='text-2xl text-red-600 font-bold'>FIORI DI ZUCCA</h1>
   <span className='text-2xl text-black font-bold'>20</span>
   <p className='text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequatur!</p>
    </div>
  )
}

export default ProductCard
