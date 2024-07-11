import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Blogs",
        link: "/blogs",
    },
    {
        name: "Best Places",
        link: "/places",
    },
]

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
        <div className='Navbar__card'>
            <div>
                <div className='flex items-center justify-start gap-4'>
                <FaUserCircle size={50} className='text-gray-500'/>
            </div>
            <div className='text-gray-500'>
                <h1>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premium user</h1>
            </div>
            </div>
            <div className='text-black dark:text-white mt-12'>
            <ul className='space-y-4 text-xl'>
                {navbarLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.link} onClick={() => setShowMenu(false)} className='inline-block md-5'>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default ResponsiveMenu
