import React from 'react'
import logo3 from '@/assets/logo3.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <Image src={logo3} alt='Logo' className='logo'/>
      <Link href='/' >Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'> <IoIosBody /> </Link>
      <button>Sign Out</button>
    </nav>
  )
}

export default Navbar
