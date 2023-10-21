import React, { useEffect } from 'react'
import { Alex_Brush } from 'next/font/google'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';

const alex = Alex_Brush({weight:'400', preload: false})

const Message = () => {
    const handleSubmit = () => {
        return Swal.fire(
            'Thankyou!',
            'Your Message has been Submited!',
            'success'
          )
    }
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        })
      })
  return (
    <div className='text-center relative'>
        <div className={alex.className}>
            <h1 className='text-[60px]' data-aos='fade-right'>Send Message</h1>
        </div>
        <p className='text-md' data-aos='zoom-in'>Give Greetings & Prayers of Blessing</p>
        <div className='w-screen h-1/2 mx-auto p-10'>
            <div className='bg-black px-2 py-5 opacity-9 rounded-[15px] mx-auto' data-aos='zoom-in'>
                <h1 className='text-white mb-3 text-[18px]' data-aos='zoom-in'>Message Form</h1>
                <div className='felx-row flex'>
                    <p className='text-white text-sm mr-9' data-aos='zoom-in'>Name</p>
                    <input type="text" data-aos='zoom-in' className='rounded-[5px] px-2'/>
                </div>
                <div className='felx-row flex mt-2'>
                    <p className='text-white text-sm mr-4' data-aos='zoom-in'>Message</p>
                    <input type="text" data-aos='zoom-in' className='rounded-[5px] px-2 py-4'/>
                </div>
                <button type='button' onClick={handleSubmit} className='text-black font-normal hover:bg-gray-300 text-sm mt-5 bg-white rounded-full px-3 py-1'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Message