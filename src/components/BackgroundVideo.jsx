import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/img13.jpg'
import img2 from '../assets/img5.jpg'
import img3 from '../assets/img2.jpg'
import img4 from '../assets/img14.jpg'
import img5 from '../assets/img8.jpg'
import img6 from '../assets/roundbed.jpg'


const images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
]

const BackgroundVideo = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="3000"
    data-aos-delay="1000"
    data-aos-easing="ease-in-out-sine"
    data-aos-mirror="true"
    className="relative w-full pt-[225px] pb-[254px] lg:bg-center overflow-hidden">
        <div className='absolute top-0 left-0 w-full h-full   '>
      
        <Slider {... settings}>
          {images.map((image) => (
            <div key={image.id} >
              <img 
                src={image.img} 
                alt="Background" 
                className="w-full h-full object-center object-cover" 
              />
            </div>
          ))}
        </Slider>   
      </div>
      {/* Content Over the Video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 mx-auto">
         <h1 className='text-xl mx-auto font-bold lg:font-semibold mb-[30px] lg:text-[44px] lg:leading-tight lg:max-w-[888px]'
         data-aos="zoom-in-up"
         data-aos-duration="3000"
         data-aos-delay="1000"
         data-aos-easing="ease-in-out-sine"
         data-aos-mirror="true"
         >Creative Home Simplify Your Living Space with Best Furniture</h1>
        <h2 className='text-[15px] w-[80vw] mb-[30px] lg:max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'
        data-aos="flip-up"
        data-aos-duration="3000"
        data-aos-delay="2000"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        >At BRAHMS_INTERIOR, we specialize in crafting high-quality, stylish furniture that enhances the beauty and functionality of your home. With a focus on timeless design and exceptional craftsmanship, we offer customized solutions that suit every taste and space, ensuring your interiors are both elegant and practical.</h2>
        {/* <a
          href="#"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        >
          Learn More
        </a> */}
        <button
        data-aos="flip-left"
        data-aos-duration="3000"
        data-aos-delay="2000"
        data-aos-easing="ease-out-cubic"
        data-aos-mirror="true"
         className='bg-[rgba(225,225,225,0.4)] hover:bg-[rgba(225,225,225,0.5)] px-[35px] py-[9px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px]'>Shop Now</button>
      </div>
      
    </div>
  )
}

export default BackgroundVideo