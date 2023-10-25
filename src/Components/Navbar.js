import React from "react";
import logoUir from '../assets/uir-logo.png';

const Navbar = () => {
    return (
        <nav className="bg-midnight-blue-900 dark:bg-midnight-blue-900 fixed w-full z-20 top-0 left-0 border-b border-midnight-blue-600 dark:border-barberry-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src={logoUir} className="h-14 mr-3" alt="UIR Logo" />
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-midnight-blue-900 bg-barberry-600 duration-300 hover:text-midnight-blue-700 hover:bg-barberry-700 focus:ring-4 focus:outline-none focus:text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-barberry-600 dark:hover:bg-barberry-700 dark:focus:text-white">Contact Us</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-barberry-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-midnight-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-midnight-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-barberry-600 md:p-0 md:dark:hover:text-barberry-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-barberry-600 md:p-0 md:dark:hover:text-barberry-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-barberry-600 md:p-0 md:dark:hover:text-barberry-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Clubs</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-barberry-600 md:p-0 md:dark:hover:text-barberry-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;