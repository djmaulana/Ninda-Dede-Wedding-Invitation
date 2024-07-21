'use client'
import React, { useEffect } from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import { Alex_Brush } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';

const alex = Alex_Brush({weight:'400', preload: false})


const Slideshow = () => {

	useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        })
      })
  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
	
  ]

  const zoomInProperties = {
		scale: 1,
		duration: 1500,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className=" text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className=" text-white cursor-pointer" />
        </div>
		),
	};

  return (
    <div className="px-5 mt-5">
      <div className={alex.className}>
        <h1 className='text-[60px] text-center' data-aos='fade-right'>Our Galleries</h1>
      </div>
			<Slide {...zoomInProperties} data-aos='zoom-in'>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:h-screen md:items-center items-start w-screen relative">
						<img
							className="w-screen saturate-50"
							src={each}
						/>
					</div>
				))}
			</Slide>
		</div>
  )
}

export default Slideshow