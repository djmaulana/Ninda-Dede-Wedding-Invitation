'use client'

import { ContentProps } from '@/types'
import React from 'react'
import { Alex_Brush } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import Image from 'next/image';

const alex = Alex_Brush({weight:'400', preload: false})

const Content = ({ title, content } : ContentProps) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })

  return (
    <div className='bg-gray text-center px-5 mt-5 relative'>
      <div className="flex flex-col md:p-40 relative">
        <div className={alex.className} data-aos="fade-left">
          <h2 className='text-[40px]'>Assalamulaiakum</h2>
        </div>
        <p className='px-3 mb-1 relative text-[14px]' data-aos="fade-right">
        Dengan segala hormat. <br />
        Kami mengundang Bapak/Ibu/Adik<br />
        serta sanak saudara untuk hadir <br />
        acara pernikahan kami:
        </p>
        <div className="text-center mt-3 " data-aos='zoom-in'>
          <Image 
            src='/men.jpg'
            alt='men'
            width={200}
            height={50}
            className='rounded-full mx-auto'
          />
          <div className={alex.className}>
            <h1 className='text-[25px] mt-3'>Naba Ababiel</h1>
          </div>
          <p className='text-[14px] '>Putra Bapak Iman <br /> & Ibu Sri</p>
        </div>
        <p className='m-5'>&</p>
        <div className="text-center mt-3 " data-aos='zoom-in'>
          <Image 
            src='/woman.jpg'
            alt='men'
            width={200}
            height={30}
            className='rounded-full mx-auto'
          />
          <div className={alex.className}>
            <h1 className='text-[25px] mt-3'>Sabrina Latifah</h1>
          </div>
          <p className='text-[14px] '>Putri Bapak Dede<br /> & Ibu Dewi</p>
        </div>
      </div>
    </div>
    
  )
}

export default Content
