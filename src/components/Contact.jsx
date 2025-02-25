import React from 'react'
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

const Contact = () => {
  return (
    <div className='bg-emerald-600 py-[20px] px-[30px] flex flex-col gap-[40px]'>
        <div className='flex justify-between'>
            <a className='font-extrabold text-[18px]' href="#">BRAHMS_INTERIOR</a>
            <div className='flex gap-[15px]'>
                <PiWhatsappLogoDuotone className='text-[25px] cursor-pointer'/>
                <TiSocialInstagram className='text-[25px] cursor-pointer'/>
                <BsTwitterX className='text-[25px] cursor-pointer'/>
                <FaPinterest className='text-[23px] cursor-pointer'/>
                <FaFacebookMessenger className='text-[25px] cursor-pointer'/>
                <SiFacebook className='text-[25px] cursor-pointer'/>
            </div>
        </div>
        <div className='flex justify-center items-center gap-[5px]'> <span className='text-[25px]'>&copy; </span> BRAHMS_INTERIOR 2025 - All Rights Reserved</div>
    </div>
  )
}

export default Contact