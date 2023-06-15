import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        {id: 1,name:"My Crops", route: "/mycrops"},
        {id: 2,name:"Farmer Profile", route: "/farmersprofile"},
        {id: 3,name: "Login", route: "/farmerlogin"},
        {id: 4,name: "Signup", route: "/farmersignup"},
        {id: 4,name: "My sales", route: "/mysales"},
        {id: 4,name: "My records", route: "/myrecords"},
        {id: 4,name: "Farm Sales", route: "/farmproduce"}
    ]

    return ( 
        <>
            <nav className="md:px-24 px-4 md:py-5 py-5 top-0 left-0 static z-[100] bg-green-600 shadow-xl"> 
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link to='/' className="flex items-center justify-center    ">
                            <div className="md:w-48 w-32 uppercase font-semibold md:text-xl">
                                Ukulimma 
                            </div>
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                            <HiMenuAlt3 />
                        </button>
                    </div>

                    <div className='md:flex hidden text-green-100'>
                        <ul className="md:flex items-center font-medium lg:space-x-6 md:space-x-4">
                            {navLinks.map((nav) => (
                                <li key={nav.id} className="navlink md:my-0 my-2 md:text-lg">
                                    <Link to={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} z-[100] sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full min-h-full duration-300 ease-in-out bg-green-700 opacity-95`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-200 text-right">
                            <FaRegTimesCircle />
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-base font-medium space-y-8 text-gray-200">
                        {navLinks.map((nav) => (
                            <li key={nav.id} onClick={() => setOpen((prev) => !prev)} className="navlink md:mx-4 mx-2 md:my-0 my-2">
                                <Link to={nav.route}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;