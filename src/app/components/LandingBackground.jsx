'use client'
import React from 'react'
import { Nova_Oval } from 'next/font/google'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import Image from 'next/image'
import vector from '../../../public/imgs/vector.png'
import { FaCaretDown } from 'react-icons/fa'
import calendar from '../../../public/imgs/calendar_bookit.png'
import { Inter } from 'next/font/google'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const inter = Inter({subsets:['latin'], weight:'400'})
const noval_oval = Nova_Oval({subsets:['latin'], weight:'400'})

export default function LandingBackground() {
    const scopeContainer = useRef(null)

useGSAP(() => {
    const updateBackgroundPosition = (direction) => {
    const element = document.querySelector('.landing_background');
    const currentY = parseFloat(window.getComputedStyle(element).backgroundPositionY);
    const increment = direction === 'down' ? 10 : -10; // Adjust the increment value as needed
    const newY = Math.max(0, Math.min(100, currentY + increment)); // Ensure the value stays between 0% and 100%

    gsap.to('.landing_background', {
      backgroundPositionY: `${newY}%`,
      duration: 0.5,
      ease: 'none',
      overwrite: 'auto'
    });

    gsap.to('.bookit_section', {
        opacity: `${newY}%`,
        duration: 0.5,
        ease: 'none',
        overwrite: 'auto'
      });
  
  };

  ScrollTrigger.create({
    trigger: scopeContainer.current,
    start: 'top 200px',
    end: 'end ',
    scrub: 3,
    onUpdate: self => {
      if (self.direction > 0) {
        updateBackgroundPosition('down');
      } else {
        updateBackgroundPosition('up');
      }
    }
  });
}, {scope: scopeContainer.current});
  return (
    <div className='w-full'>
        <div ref={scopeContainer}  className='landing_background w-full px-[73px] py-[200px] '>
            <div className='flex flex-col gap-y-8 float-right leading-[77.25px] text-right 
            rounded-md shadow-md w-[100%] px-6 '>
                <h1 className={`${noval_oval.className} -ml-24 text-[rgba(210,18,18,1)] leading-[77.25px] text-[64px]`}>
                    New Year
                </h1>
                <h1 className={`${noval_oval.className} text-[rgba(255,255,255,1)] indent-24 ml-8 leading-[77.25px] text-[64px]`}>
                    Holiday
                </h1>
                <div className={'mt-[50px] mx-[70%] text-right w-[378px] h-[252.03px] rounded-md inline-block float-right'}>
                    <Image className={'text-right w-[378px] h-[252.03px] rounded-md inline-block float-right'} src={calendar} alt='calendar' width={100} height={100} />
                </div>
            </div>
            <div className={`bookit_section ${inter.className} h-full my-[300px] z-50 w-[60%] border -translate-y-32 shadow-md rounded-md gap-16 p-8 flex flex-col bg-[#0e70cb]`}>
                <div className='flex flex-row items-center gap-16 shadow-md rounded-md'>
                    <div className='flex gap-y-16 bg-white'>
                        <div className='bg-white booking_section flex p-8 shadow-md flex-col border-r-2 rounded-r-md rounded-t-md'>
                            <h1 className='text-[rgba(0,0,0,0.2)]'>Leaving</h1>
                            <small>27th May, 2024</small>
                        </div>
                        <div className='bg-white booking_section p-8 shadow-md rounded-md flex flex-col'>
                            <h1 className='text-[rgba(0,0,0,0.2)]'>Returning</h1>
                            <small>10th June, 2024</small> 
                        </div>

                    </div>

                    <div className='bg-white booking_section p-8 shadow-md rounded-md flex flex-col'>
                            <h1 className='text-[rgba(0,0,0,0.2)]'>Destination</h1>
                            <small>Write Text Here...</small>
                    </div>
                    
                    <div className='booking_section flex flex-col bg-white'>
                        
                    </div>
                </div>

                <div className='flex items-center gap-16'>
                    <div className='flex items-center gap-x-16 justify-evenly'>
                        <div className='flex flex-row  justify-between gap-16 p-4 bg-white rounded-md flex-shrink-0 flex-grow-0 basis-[58%]'>
                            <button className='text-[rgba(0,0,0,0.2)]'>Passenger</button>
                            {/* <Image src={vector} alt='vector' width={12} height={6} /> */}
                            <FaCaretDown/>
                        </div>
                        <div className='flex flex-row justify-between gap-16 p-4 bg-white rounded-md flex-shrink-0 flex-grow-0 basis-[70px]'>
                            <button className='text-[rgba(0,0,0,0.2)]'>Economy</button>
                            {/* <Image src={vector} alt='vector' width={12} height={6} /> */}
                            <FaCaretDown/>
                        </div>
                        <button className='text-white'>Search</button>
                    </div>

                    
                </div>

            </div>
        </div>
    </div>
  )
}
