'use client'

import { ContentProps } from '@/types'
import React from 'react'
import { Alex_Brush } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

const alex = Alex_Brush({weight:'400', preload: false})

const Content = ({ title, content } : ContentProps) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })

  return (
    <div className='bg-gray text-center px-5 mt-5'>
      <div className="flex flex-col md:p-40">
        <div className={alex.className} data-aos="fade-left">
          <h2 className='text-[60px]'>{title}</h2>
        </div>
        <p className='px-3 mb-1 relative text-[14px]' data-aos="fade-right">{content}</p>
        <div className="text-center mt-2" data-aos='zoom-in'>
          <button className='item-center text-white text-sm rounded-full bg-black p-3'>Read More</button>
        </div>
      </div>
    </div>
    
  )
}

export default Content