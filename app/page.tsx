'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import { useEffect, useRef, useState, FC } from 'react';
import { Alex_Brush } from 'next/font/google';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// ..

const alex = Alex_Brush({ weight: '400', preload: false });

// Ninda Aliyanda
// Dede Saepul Dina

const Home: FC = () => {
  const searchParams = useSearchParams();
  let namaTamu = searchParams.get('guest');
  if (namaTamu != null) {
    namaTamu = namaTamu.replace(/-/g, ' ');
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("audio/music.mp3") : undefined
  );
  useEffect(() => {
    audio.current?.loop;
  });

  const handleMusic = () => {
    if (isPlaying) {
      audio.current?.pause();
    } else {
      audio.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="overflow-hidden relative min-h-screen flex justify-center items-end">
      <div className='absolute inset-0'>
        <Image
          src="/hero_.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col p-5 text-left justify-center items-center h-full">
        {/* <Music /> */}
        <div className='bg-neutral-300 p-5 rounded-[25px] grid bg-opacity-50 text-center'>
          <h1 className="text-white">THE WEDDING OF</h1>
          <div className={alex.className}>
            <h1 className='text-[40px] md:text-[120px] text-white'>
              Sabrina & Naba
            </h1>
          </div>
          <p className='capitalize  text-lg text-white'>{namaTamu}</p>
          <div>
            <div className="">
              <Link
                href='/invitation'
              >
                <button onClick={handleMusic} className="bg-[#474747] mt-[10px] py-2 px-3 rounded-full w-40 text-center text-white text-[13px]">
                  Buka Undangan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
