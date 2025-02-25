import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import img from '../assets/abt.webp'
import Contact from './Contact'

const About = () => {
  return (
    <div>
        <div>About</div>
        <div className='abt'>
            <div className='flex flex-row-reverse justify-between'>
                <img src={img} alt="" className='h-[300px] w-[350px]'/>
                <div>
                    <p className='w-[40vw]'>At [BRAHMS_INTERIOR2], we specialize in crafting timeless furniture and curated interior decor that transform spaces into stylish and functional havens. With a passion for design and quality craftsmanship, we offer a diverse range of furniture pieces and decor accents that blend elegance, comfort, and modern aesthetics.
                       Whether you’re looking for bespoke furniture, statement decor pieces, or complete interior styling, our expert team is dedicated to bringing your vision to life. We believe that every space should tell a story, and we’re here to help you create one that reflects your personality and style.
                       Discover the perfect balance of beauty and functionality with [BRAHMS_INTERIOR2]—where design meets excellence.</p>
                       <div>
                        <h1>Get more discount off your order</h1>
                        <button>Place Order <IoLogoWhatsapp /></button>
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