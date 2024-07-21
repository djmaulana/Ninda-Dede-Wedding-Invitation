import React, {useEffect } from 'react'
import { Alex_Brush } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';

const alex = Alex_Brush({weight:'400', preload: false})

const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })
  return (
    <div className='mx-auto text-center items-center justify-center mt-5 flex flex-col'>
      <div className={alex.className}>
        <h1 className='text-[60px]' data-aos='fade-right'>Location</h1>
      </div>
      <iframe data-aos='zoom-in'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126623.45986490638!2d108.17086174999999!3d-7.35578784999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57877d69daad%3A0x515416c4597d79e!2sRumah%20Makan%20Saung%20Gunung%20Jati!5e0!3m2!1sid!2sid!4v1721538963630!5m2!1sid!2sid"
        className='w-[296px] h-[300px] md:w-[794px] md:h-[480px] mt-5'
        style={{border:0}} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <p className='mt-3 text-sm px-5 mb-10'>Jl. Letjen Mashudi No.45, Setiaratu, Kec. Cibeureum, Kab. Tasikmalaya, Jawa Barat 46123</p>
    </div>
  )
}

export default Location