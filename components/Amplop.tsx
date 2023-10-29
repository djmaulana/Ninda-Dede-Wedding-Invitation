import React, {useEffect} from 'react'
import { Alex_Brush } from 'next/font/google'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const alex = Alex_Brush({weight:'400', preload:false})

const Amplop = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        })
      })
  return (
    <div className='mt-5 text-center w-screen px-5 relative'>
        <div className={alex.className}>
            <h1 className='text-[60px]' data-aos='fade-right'>Amplop Digital</h1>
        </div>
        <p className='text-sm mx-10' data-aos='fade-up'>Doa Berkat Anda adalah anugerah yang sangat berarti bagi kami. Dan jika memberi merupakan ungkapan cinta Anda, Anda bisa memberikan hadiah secara cashless.</p>
        <div className='mt-3 '>
            <div className='w-80 mx-auto h-44 bg-black bg-opacity-90 rounded-[20px] p-5' data-aos='zoom-in'>
                <div className='flex flex-row relative'>
                    <div className='w-8 h-8 absolute rounded-full bg-red-500 opacity-90'></div>
                    <div className='w-8 h-8 absolute rounded-full ml-5 bg-yellow-500 opacity-90'></div>
                    <Image 
                        src='/bca.png'
                        alt='bca'
                        width={90}
                        height={40}
                        className='absolute right-0 -mt-4'
                    />
                </div>
                <div className='text-white'>
                    <h1 className='mt-2 text-sm -ml-16'>Master Card</h1>
                    <p className='text-[11px] text-left mt-7'>Account Number</p>
                    <p className='text-left' data-aos='fade-up'>23107 59271</p>
                    <p className='text-left text-[14px] mt-3'>Dede Saepul Dina</p>
                </div>
            </div>
            <div className='w-80 mx-auto h-44 bg-black mt-3 bg-opacity-90 rounded-[20px] p-5' data-aos='zoom-in'>
                <div className='flex flex-row relative'>
                    <div className='w-8 h-8 absolute rounded-full bg-red-500 opacity-90'></div>
                    <div className='w-8 h-8 absolute rounded-full ml-5 bg-yellow-500 opacity-90'></div>
                    <Image 
                        src='/bri.png'
                        alt='bri'
                        width={60}
                        height={40}
                        className='absolute right-0 mr-3'
                    />
                </div>
                <div className='text-white'>
                    <h1 className='mt-2 text-sm -ml-16'>Master Card</h1>
                    <p className='text-[11px] text-left mt-7'>Account Number</p>
                    <p className='text-left' data-aos='fade-up'>4368-01-012633-53-8</p>
                    <p className='text-left text-[14px] mt-3'>Ninda Aliyanda</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Amplop
