import React, { useEffect } from 'react'
import { Alex_Brush } from 'next/font/google'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const alex = Alex_Brush({weight:'400', preload:false})

const save = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })

  return (
    <div className='text-center mt-5 w-screen relative flex mb-20'>
      <div className='z-10 mx-auto relative text-white'>
        <div className='w-80 h-40 bg-black rounded-[20px] bg-opacity-90 mx-auto mt-14 p-5' data-aos='zoom-in'>
          <div className={alex.className}>
            <h1 className='text-[40px]' data-aos='fade-up'>Akad Nikah</h1>
          </div>
          <p className='text-[12px] mt-1 font-bold' data-aos='fade-up'>Rabu, 07 Agustus 2024</p>
          <p className='text-[11px] mt-3' data-aos='zoom-in'>Pukul 08:00 WIB</p>
          <p className='text-[11px]' data-aos='zoom-in'>Alamat : RM Saung Gunung Jati</p>
        </div>
        <div className='w-80 h-40 bg-black rounded-[20px] bg-opacity-90 mx-auto mt-3 p-5' data-aos='zoom-in'>
          <div className={alex.className}>
            <h1 className='text-[40px]' data-aos='fade-up'>Syukuran</h1>
          </div>
          <p className='text-[12px] mt-1 font-bold' data-aos='fade-up'>Rabu, 07 Agustus 2024</p>
          <p className='text-[11px] mt-3' data-aos='zoom-in'>Pukul 14:00 WIB</p>
          <p className='text-[11px]' data-aos='zoom-in'>Alamat : RM Saung Gunung Jati</p>
        </div>
        </div>
      </div>
  )
}

export default save
