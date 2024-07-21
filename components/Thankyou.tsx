import React, { useEffect } from 'react'
import Image from 'next/image'
import { Alex_Brush } from 'next/font/google'
import { Footer } from '.'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const alex = Alex_Brush({weight:'400', preload: false})

const Thankyou = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        })
      })
  return (
    <div className='w-screen mt-5'>
        <div className='p-5 bg-black bg-opacity-90 h-4/5 text-center text-gray-400'>
            <Image
                src='/3.jpg'
                alt='img'
                width={150}
                height={50}
                className='mx-auto rounded-full mt-5'  
            />
            <hr className='border-1 border-gray-400 w-1/3 mx-auto mt-5'/>
            <p className='text-sm mt-3 mx-8'>Suatu kehormatan dan kebahagiaan bagi kami, apabila bapak ibu bersedia hadir dan memberikan restunya. Atas kehadiran dan berkahnya kami ucapkan terima kasih.</p>
            <div className={alex.className}>
                <h1 className='text-3xl mt-10' data-aos='fade-up'>
                    Sabrina Latifah <br />
                    & <br />
                    Naba Ababiel
                </h1>
            </div>
            <p className='text-[10px] mt-20'>Made with ♥ by djmaulana</p>
            <Footer />
        </div>
    </div>
  )
}

export default Thankyou
