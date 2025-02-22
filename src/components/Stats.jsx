import React from 'react'

const Stats = () => {
  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="3000"
    data-aos-delay="3000"
    data-aos-easing="ease-in-out-sine"
    data-aos-mirror="true"
    className='flex justify-center items-center '>
        <div className='bg-cyan-700 relative bottom-[30px] rounded-[20px] p-12 lg:w-[70vw] min-h-[70px] w-[90%] md:flex-wrap flex lg:justify-around text-center  '>
            <div>
                <h2 className='text-2xl font-semibold lg:text-4xl'>7</h2>
                <p className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>Years Experience</p>
            </div>
            <div className='border-r'></div>
            <div className=''>
                <h2 className='text-2xl font-semibold lg:text-4xl'>10k+</h2>
                <p className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>Furniture Sold</p>
            </div>
            <div className='border-r'></div>
            <div>
                <h2 className='text-2xl font-semibold lg:text-4xl'>100k+</h2>
                <p className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>Variant Furniture</p>
            </div>
        </div>
    </div>
  )
}

export default Stats