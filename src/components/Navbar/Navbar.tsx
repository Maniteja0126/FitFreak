'use client'
import React from 'react'
import logo3 from '@/assets/logo3.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopUp from '../AuthPopUp/AuthPopUp'

const Navbar = () => {
  const [isLoggedIn , setIsLoggedIn] =  React.useState<boolean>(false)
  const [showpopup, setShowpopup] = React.useState<boolean>(false)
  return (
    <nav>
      <Image src={logo3} alt='Logo' className='logo'/>
      <Link href='/' >Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'> <IoIosBody /> </Link>
      {
        isLoggedIn ? 
        <button >Logout</button>
         : 
        <button
          onClick={()=>setShowpopup(true)}
        >Login</button>
      }
      {
        showpopup && <AuthPopUp setShowpopup={setShowpopup} />
      }
    </nav>
  )
}

export default Navbar
