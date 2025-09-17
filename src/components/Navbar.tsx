import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between itmes-center p-4 bg-yellow-800 text-white'>
        <Link href='/'>Home Page</Link>
        <Link href='about'>About Page</Link>
        <Link href='contact'>Contact Page</Link>
    </div>
  )
}

export default Navbar