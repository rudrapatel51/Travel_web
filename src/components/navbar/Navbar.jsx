import React, { useState , useContext} from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import ResponsiveMenu from "./ResponsiveMenu"
import { OrderPopupContext } from '../../Hooks/OrderPopupProvider';



const DropDownLinks = [
    {
        name : "Our Services",
        link : "/#services",
    },
    {
        name : "Top Brands",
        link : "/#mobile_brands",
    },
    {
        name : "Location",
        link : "/#location",
    }
]

const Navbar = () => {


    const { setOrderPopup } = useContext(OrderPopupContext);

  const handleOrderPopup = () => {
    setOrderPopup(true);
  };

const [showMenu,setShowMenu] = useState(false)

const toggleMenu = () => {
    setShowMenu(!showMenu);
}


  return (
    <>
    <div className='fixed-top-0 right-0 w-full bg-white text-black shadow-md z-[99999]'>
        <div className='bg-gradient-to-r from-primary to-secondary text-white'>
            <div className='container py-[2px] sm:block hidden'>
                <div className="flex justify-between py-[2px]">
                    <p>20% off on first Booking</p>
                    <p>Mobile No. +91 1234567890</p>
                </div>
            </div>
        </div>
        <div className="container py-3 sm:py-0">
            <div className='flex justify-between items-center'>
            {/* Logo Section  */}
            <div>
                <Link to="/" onClick={() => window.scrollTo(0,0)}>
                <img src='/logo.png' className='h-20 w-21' />
                </Link>
            </div>
            {/*Desktop Navbar section */}
            <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
                <li className='py-4'>
                    <NavLink to="/" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                    Home
                    </NavLink>
                </li>
                <li className='py-4'>
                    <NavLink to="/blogs" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                    Blogs
                    </NavLink>
                </li>
                <li className='py-4'>
                    <NavLink to="/places" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                    Best Places
                    </NavLink>
                </li>
                <li className='py-4'>
                    <NavLink to="/about" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                    About
                    </NavLink>
                </li>
                {/* DropDown Section  */}
                <li className='inline-block py-4 relative group cursor-pointer'>
                    <div className='dropdown flex items-center'>
                        <span>
                            Quicks Links
                        </span>
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                        </span>
                    </div>
                    <div  className='absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                        <ul>
                            {
                                DropDownLinks.map((data) => {
                                    return (
                                    <li key={data.name}>
                                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                        {data.name}
                                        </a>
                                    </li>
                                )   })
                            }
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
            {/* Book Now button */}
            <div className='flex items-center gap-4'>
                <button onClick={handleOrderPopup} className='text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'>
                    Book Now
                </button>
                {/* Mobile hamburgerMenu Menu */}
                <div className='md:hidden block'>
                    {showMenu? (
                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all' size={30}/>
                    ):(
                        <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all' size={30}/>
                    )}

                </div>
            </div>
            </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
    </>
  )
}

export default Navbar
