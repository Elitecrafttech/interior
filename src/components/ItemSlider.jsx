import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import img1 from '../assets/img13.jpg'
// import img2 from '../assets/img5.jpg'
// import img3 from '../assets/img2.jpg'
// import img4 from '../assets/img14.jpg'
// import img5 from '../assets/img8.jpg'

import img1 from '../assets/img12.jpg'
import img2 from '../assets/img9.jpg'
import img3 from '../assets/sofa.jpeg'
import img4 from '../assets/murphybed.jpg'
import img5 from '../assets/img7.jpg'
import img6 from '../assets/Storagebed.jpg'
import img7 from '../assets/table.jpg'

const images = [
  {
    id: 1,
    img: img1,
    title: "Modern Corner Wardrobe"
  },
  {
    id: 2,
    img: img2,
    title: "Modern Elegance"
  },
  {
    id: 3,
    img: img3,
    title: "Sofa"
  },
  {
    id: 4,
    img: img4,
    title: "Elegant Wall Bed"
  },
  {
    id: 5,
    img: img5,
    title: "Lounge Corner"
  },
  {
    id: 6,
    img: img6,
    title: "Captain's Bed"
  },
  {
    id: 7,
    img: img7,
    title: "Table"
  },
]

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="lg:w-[400px] w-[350px] mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex justify-center items-center pb-[5px]">
            <img 
              src={image.img} 
              alt="" 
              className="h-[300px] w-[400px] object-cover rounded-tr-xl rounded-tl-xl" // Adjust size as needed
            />
            <h1 className='border-[1px] border-t-0 border-emerald-600 p-[13px] font-extrabold text-[15px] rounded-br-xl rounded-bl-xl text-start'>{image.title}</h1>
          </SwiperSlide>
        ))}
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

