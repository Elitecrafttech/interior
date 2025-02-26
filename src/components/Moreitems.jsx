import React from 'react'
import Slider from 'react-slick';

import img1 from '../assets/img12.jpg'
import img2 from '../assets/img9.jpg'
import img3 from '../assets/sofa.jpeg'
import img4 from '../assets/murphybed.jpg'
import img5 from '../assets/img7.jpg'
import img6 from '../assets/Storagebed.jpg'
import img7 from '../assets/table.jpg'

const roomset = [
  { id: 1, img: img1, title: "Modern Corner Wardrobe" },
  { id: 2, img: img2, title: "Modern Elegance" },
  { id: 3, img: img3, title: "Sofa" },
  { id: 4, img: img4, title: "Elegant Wall Bed" },
  { id: 5, img: img5, title: "Lounge Corner" },
  { id: 6, img: img6, title: "Captain's Bed" },
  { id: 7, img: img7, title: "Table" },
]

const Roomset = () => {
  var settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000, // Large screens, 3 items per row
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens, 2 items per row
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Small screens, 1 item per row
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>More Suitable Design For Your Taste</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>More Items In Store</h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {roomset.map((data) => (
              <div key={data.id} className='my-6 px-4'>
                <div className='flex flex-col gap-4 shadow-lg rounded-xl dark:bg-gray-800'>
                  <div>
                    <img src={data.img} alt={data.title} className='rounded-t-xl w-full h-[200px] object-cover'/>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.title}</h1>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-primary'>,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Roomset;
