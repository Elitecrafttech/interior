import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import img from '../assets/abt.webp'
import Contact from './Contact'
import qr from '../assets/whatsqr.webp'

const About = () => {
  return (
    <div>
        <div data-aos="fade-up" className='abt'>
            <div className='flex lg:flex-row-reverse lg:justify-between flex-col'>
                <div className='flex flex-col items-center'>
                <img data-aos="fade-up" src={img} loading="lazy" alt="showcase" className='lg:min-h-full min-h-[500px] lg:w-[500px] w-full'/>
                <img src={qr}  loading="lazy" alt="qrcode" className='h-[250px] lg:h-[300px] relative bottom-[380px] lg:bottom-[400px] rounded-lg'/>
                </div>
                <div className='lg:pl-[50px] py-[40px] px-[20px] lg:px-[0px] flex flex-col gap-[30px]'>
                    <p data-aos="fade-up" className='lg:w-[43vw] text-[16px] text-center lg:text-left'>At [BRAHMS_INTERIOR2], we specialize in crafting timeless furniture and curated interior decor that transform spaces into stylish and functional havens. With a passion for design and quality craftsmanship, we offer a diverse range of furniture pieces and decor accents that blend elegance, comfort, and modern aesthetics.
                       Whether you’re looking for bespoke furniture, statement decor pieces, or complete interior styling, our expert team is dedicated to bringing your vision to life. We believe that every space should tell a story, and we’re here to help you create one that reflects your personality and style.
                       Discover the perfect balance of beauty and functionality with [BRAHMS_INTERIOR2]—where design meets excellence.</p>
                       <div className='flex flex-col gap-[20px]'>
                        <h1 data-aos="fade-up" className='font-extrabold text-2xl text-center lg:text-left'>Get more discount off your order</h1>
                        <button data-aos="fade-up" className=' flex text-center justify-center items-center gap-[5px] px-[40px] py-[5px] rounded-xl border-2 border-emerald-600 text-[18px] hover:bg-emerald-400 transition cursor-pointer'
                         onClick={() => window.open('https://wa.me/+2348105399041', '_blank')}
                        >Place Order <IoLogoWhatsapp /></button>
                       </div>
                </div>
            </div>
        </div>
            <div>
                <Contact />
            </div>
    </div>
  )
}

export default About