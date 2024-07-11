'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/imgs/logo_bookIt.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainHeader() {
    const pathname = usePathname();
  return (
    <div className='max-w-screen-2xl w-full z-50 border shadow-md flex leading-[34.05px] text-[25px] bg-white px-[70px] py-[20px] items-center justify-between sticky top-0'>
        <Image src={logo} alt='logo' width={173} height={78} className='mr-6 w-[173px] h-[78px]'/>
        <nav className='flex items-center justify-evenly gap-x-7 text-[rgba(13,111,202,0.2)] mr-8'>
            <Link className={`${pathname==='/' && 'active'}`} href={'/'}>Flight</Link>
            <Link href={'/hotels'}>Hotels</Link>
            <Link href={'/tour'}>Tour</Link>
            <Link href={'/bookings'}>Bookings</Link>
        </nav>
        <nav className='flex items-center justify-evenly gap-x-7'>
            <Link href={'/'}>Support</Link>
            <Link href={'/'}>NGN</Link>
            <Link className='font-extrabold' href={'/'}>EN</Link>
        </nav>
        <nav className='flex items-center justify-evenly gap-x-7'>
            <Link className='bg-[#0f7bdd] text-white px-[12px] py-[8px] rounded-[24px]' href={'/'}>Register</Link>
            <Link className='bg-[#0f7bdd] text-white px-[12px] py-[8px] rounded-[24px]' href={'/'}>Login</Link>
        </nav>
    </div>
  )
}
