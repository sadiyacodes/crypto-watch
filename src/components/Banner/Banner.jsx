import React from 'react'
import Carousel from './Carousel'
const Banner = () => {
  return (
    <div className='w-full dark:bg-black flex flex-col space-y-12 md:space-y-20 text-center text-white py-10 justify-center'
        style={{backgroundImage: "url('https://transparenttextures.com/patterns/cubes.png')"
                }}>

                    <div>
                      <h1 className='dark:text-white text-zinc-800 text-4xl md:text-6xl font-semibold'>
                             Crypto Watch
                      </h1>
                      <p className='text-sm md:text-md dark:text-yellow-500 text-zinc-800 my-2'>
                            Smart Crypto tracking for you.
                      </p>
                    </div>
                    <Carousel />
    </div>
  )
}

export default Banner
