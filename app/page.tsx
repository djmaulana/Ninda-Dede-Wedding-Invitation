'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import { useEffect, useRef, useState, FC } from 'react';
import { Alex_Brush } from 'next/font/google';
import Link from 'next/link';
import { useSearchParams  } from 'next/navigation';
// ..

const alex = Alex_Brush({weight:'400', preload: false})

// Ninda Aliyanda
// Dede Saepul Dina

const Home: FC = () => {
  const searchParams = useSearchParams()
  let namaTamu = searchParams.get('guest')
  if (namaTamu != null){
    namaTamu = namaTamu.replace(/-/g, ' ');
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("audio/music.mp3") : undefined
  );
  useEffect(() => {
    audio.current?.loop
  })

  const handelMusic = () => {
    if (isPlaying) {
      audio.current?.pause();
    } else {
      audio.current?.play();
    }
    setIsPlaying(!isPlaying);
  }
  return (
    <main className="overflow-hidden relative">
      <div className='min-h-screen'>
        <div className="absolute inset-0 mx-auto">
          <Image
              src="/hero-desktop.jpg"
              alt="background image"
              fill
              className="md:block hidden"
          />
          <Image
              src="/hero_mobile.jpg"
              alt="background image"
              fill
              className="md:hidden saturate-0 bg-cover"
          />
        </div>
        <div className=" relative z-10 flex flex-col p-5 text-left justify-end h-full">
            {/* <Music /> */}
            <div className='bg-black p-5 rounded-[25px] grid mt-80 bg-opacity-50 my-auto'>
              <h1 className="text-white">THE WEDDING OF</h1>
              <div className={alex.className}>
                <h1 className='text-[40px] md:text-[120px] text-white'>
                  Ninda & Dede
                </h1>
              </div>
              <p className='font-light text-sm tracking-tighter md:text-[24px] text-white'>
                Kepada Bapak/Ibu/Saudara/i
              </p>
              <p className='capitalize mt-5 text-lg text-white'>{namaTamu}</p>
              <div className={alex.className}>
                <div className="">
                  <Link 
                    href='/invitation'
                  >
                    <button onClick={handelMusic} className="bg-[#474747] mt-[30px] py-2 px-4 rounded-full w-40 text-center text-white text-[18px]">
                      Buka Undangan
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Home;
