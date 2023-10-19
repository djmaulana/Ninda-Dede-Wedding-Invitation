import React from 'react'
import { Alex_Brush } from 'next/font/google' 

const alex = Alex_Brush({weight: "400", preload: false})
const Countdown = () => {
  return (
    <div>
        {/* Countdown Mobile */}
        <div className="relative mt-[20px] text-center items-center md:hidden block">
            <div className="bg-[#474747] rounded-full disable py-2 px-2 text-[13px] text-white">
              <div className="grid grid-cols-4">
                <div className="border-y-2 border-l-2 rounded-l-full p-2"> 
                  <p className="flex flex-row">
                    01 
                    <span className={alex.className} style={{marginLeft: '10px'}}>
                      Days
                    </span>
                  </p>
                </div>
                <div className="border-y-2 border-l-2  p-2">
                  <p className="flex flex-row">
                    01 
                    <span className={alex.className} style={{marginLeft: '10px'}}>
                      Hours
                    </span>
                  </p>
                </div>
                <div className="border-y-2 border-l-2  p-2">
                  <p className="flex flex-row">
                    01 
                    <span className={alex.className} style={{marginLeft: '10px'}}>
                    Minutes
                    </span>
                  </p>
                </div>
                <div className="border-2 rounded-r-full p-2">
                  <p className="flex flex-row ">
                    01 
                    <span className={alex.className} style={{marginLeft: '10px'}}>
                      Second
                    </span>
                  </p>
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
                    01 <br />
                    <div className={alex.className}> 
                      Days
                    </div> 
                  </p>
                </div>
                <div className="border-y-2 border-l-2  p-1">
                  <p>
                    01 <br />
                    <div className={alex.className}> 
                      Days
                    </div> 
                  </p>
                </div>
                <div className="border-y-2 border-l-2  p-1">
                  <p>
                    01 <br />
                    <div className={alex.className}> 
                      Days
                    </div> 
                  </p>
                </div>
                <div className="border-2 rounded-r-full p-1">
                  <p>
                    01 <br />
                    <div className={alex.className}> 
                      Days
                    </div> 
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Countdown