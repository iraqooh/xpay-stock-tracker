import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
        <div className="container header-wrapper">
            <Link href="/">
                <Image 
                    src="/assets/icons/xpay.svg" 
                    alt="Xpay Logo"
                    width={140}
                    height={32}
                />
            </Link>
            <nav className="hidden sm:block">
                {/* Nav items */}
                <NavItems />
            </nav>
            {/* User drop menu */}
            <UserDropdown />
        </div>
    </header>
  )
}

export default Header