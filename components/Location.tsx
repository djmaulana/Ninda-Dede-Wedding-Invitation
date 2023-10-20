import React from 'react'
import { Alex_Brush } from 'next/font/google'

const alex = Alex_Brush({weight:'400', preload: false})

const Location = () => {
  return (
    <div className='mx-auto text-center items-center justify-center mt-5 flex flex-col'>
      <div className={alex.className}>
        <h1 className='text-[60px]'>Location</h1>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.2056410682786!2d108.06422986951051!3d-7.3737747695254585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5524bb0e89a3%3A0xe696474bf79455b1!2sBadan%20Usaha%20Milik%20Desa%20(Bumdes)!5e0!3m2!1sid!2sid!4v1697723974131!5m2!1sid!2sid" 
        className='w-[296px] h-[300px] md:w-[794px] md:h-[480px] mt-5'
        style={{border:0}} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <p className='mt-3 text-sm px-5 mb-10'>Salebu, Kec. Mangunreja, Kabupaten Tasikmalaya, Jawa Barat</p>
    </div>
  )
}

export default Location