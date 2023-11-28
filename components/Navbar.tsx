'use client';
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from 'react';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen)
  return (

    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/camp.svg' alt='logo' width={79} height={29} />
        <h4 className="text-green uppercase">GreenCamp</h4>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div onClick={toggleMenu}
        className='sm:hidden cursor-pointer pl-24'>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className=" inline-block cursor-pointer lg:hidden"
        />
      </div>

      <div
        className={menuOpen ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#f8f8f8] p-10 ease-in-out duration-500'
          : 'fixed left-[-100%] top- p-10 ease-in-out duration-500'}>

        <div className='flex w-full items-center justify-end'>
          <div onClick={toggleMenu}
            className='cursor-pointer'>
            <Image
              src="close.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </div>
        </div>

        {/* Mobile Links'*/}

        <div className='flex-col py-4'>
          <ul>
            {NAV_LINKS.map((link) => (
              <li onClick={() => setMenuOpen(false)}
                className='py-4 hover: underline hover:decoration-[#36814a]'>
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
            <div className='flex justify-center mt-10'>
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </div>
          </ul>

        </div>
      </div>
    </nav>


  )
}

export default Navbar