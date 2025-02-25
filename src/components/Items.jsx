import React from 'react'
import ItemSlider from './ItemSlider'

const Items = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center text-center lg:text-left justify-around mb-[50px] gap-[30px]'>
        
                {/* text */}
                <div className='flex flex-col gap-[40px] items-center lg:items-start'>
                    <h2 className='font-extrabold text-[28px] lg:text-3xl lg:w-[25vw]'>Some Showcase Items</h2>
                    <p className='font-medium lg:w-[40vw] w-[80vw] text-[24px] lg:text-[20px]'>Book a section with us and enjoy more classic furnitures with promo price</p>
                    <div className=''>
                    <a className='hover:border-b-2 hover:text-emerald-600 border-2 hover:border-0 p-[10px] px-[80px] lg:px-[30px]' href="#">Contact For More</a>
                    </div>
                </div>
                {/* slider */}
                <div><ItemSlider /></div>
            
    </section>
  )
}

export default Items