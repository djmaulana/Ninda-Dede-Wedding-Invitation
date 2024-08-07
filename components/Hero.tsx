'use client'
import React from "react";
import Image from "next/image";
import { Alex_Brush } from "next/font/google";
import { useState, useEffect } from "react";

const alex = Alex_Brush({ weight: "400", preload: false });

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/07/2024 08:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);

        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen ">
      <div className='absolute inset-0'>
        <Image
          src="/hero_.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-full">
        <div className={alex.className}>
          <h1 className='text-[50px] md:text-[100px] text-white'>
            Sabrina & Naba
          </h1>
        </div>
        <p className='font-regular tracking-tighter sm:text-[16px] md:text-[24px] text-white'>
          Are Getting Married
        </p>
        <div className={alex.className}>
          <div className="bg-[#474747] mt-[100px] py-2 px-4 md:hidden block rounded-full disabled: text-white text-[18px]">
            Save the Day
          </div>
        </div>
        {/* Countdown Mobile */}
        <div className="relative mt-[20px] text-center items-center md:hidden block">
          <div className="bg-[#474747] rounded-full disable py-2 px-2 text-[13px] text-white">
            <div className="grid grid-cols-4">
              <div className="border-y-2 border-l-2 rounded-l-full p-2"> 
                <span className="flex flex-row">
                  {days} 
                  <span className={alex.className} style={{marginLeft: '10px'}}>
                    Days
                  </span>
                </span>
              </div>
              <div className="border-y-2 border-l-2  p-2">
                <span className="flex flex-row">
                  {hours}
                  <span className={alex.className} style={{marginLeft: '10px'}}>
                    Hours
                  </span>
                </span>
              </div>
              <div className="border-y-2 border-l-2  p-2">
                <span className="flex flex-row">
                  {minutes}
                  <span className={alex.className} style={{marginLeft: '10px'}}>
                    Minutes
                  </span>
                </span>
              </div>
              <div className="border-2 rounded-r-full p-2">
                <span className="flex flex-row ">
                  {seconds}
                  <span className={alex.className} style={{marginLeft: '10px'}}>
                    Seconds
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Countdown Desktop */}
      <div className="relative -mt-[50px] w-1/2 mx-auto text-center items-center md:block hidden">
        <div className="bg-[#474747] rounded-full disable py-2 px-2 text-[12px] md:text-[20px] text-white">
          <div className="grid grid-cols-5">
            <div className="border-y-2 border-l-2 rounded-l-full p-1">
              <p className={alex.className}>
                Save <br /> 
                the Days
              </p>
            </div>
            <div className="border-y-2 border-l-2 p-1">
              <p>
                {days} <br />
                <span className={alex.className}> 
                  Days
                </span> 
              </p>
            </div>
            <div className="border-y-2 border-l-2  p-1">
              <p>
                {hours} <br />
                <span className={alex.className}> 
                  Hours
                </span> 
              </p>
            </div>
            <div className="border-y-2 border-l-2  p-1">
              <p>
                {minutes} <br />
                <span className={alex.className}> 
                  Minutes
                </span> 
              </p>
            </div>
            <div className="border-2 rounded-r-full p-1">
              <p>
                {seconds} <br />
                <span className={alex.className}> 
                  Seconds
                </span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
