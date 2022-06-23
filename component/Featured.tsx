import { NextPage } from 'next'
import React from 'react'
import { ArrowBack, ArrowForward } from 'material-ui-icons'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'
const Featured:NextPage = () => {
    let images:string[];
     images=[
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/4.jpg",
        
    ]
  return (
   <div className='containerr h-full bg-white flex justify-end'>
    <div className='absolute w-1/12 h-1/4 top-0 bottom-0 m-auto left-0 cursor-pointer'>
    <ArrowBack/>
    </div>
    <div className="wrapper">
        <div className='imgContainer w-max'>
            {images.map((img,i)=>(
               
             <Image src={img} key={i}  alt="" width='500px' height='500px'/>
            ))}
        </div>
    </div>
    <div className='absolute w-1/12 h-1/4 top-0 bottom-0 m-auto right-0 cursor-pointer'>

    <ArrowForward/>
    </div>
   </div>
  )
}

export default Featured
