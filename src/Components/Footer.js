import React from "react";
import Home from "./Home";
import logoUir from '../assets/uir-logo.png';

const Footer = () => {
    return (

        <footer class="bg-midnight-blue-900 rounded-t-lg shadow dark:bg-midnight-blue-900 w-full">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center mb-4 sm:mb-0">
                        <img src={logoUir} class="h-[60px] w-[70px] mr-3" alt="UIR Logo" />
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 duration-[0.3s] text-white hover:text-barberry-600 ">About</a>
                        </li>
                        <li>
                            <a href="https://www.uir.ac.ma/fr/page/Conditions-generales-d-utilisation" class="mr-4 hover:underline md:mr-6 duration-[0.3s] text-white hover:text-barberry-600">Terms of Service</a>
                        </li>
                        <li>
                            <a href="https://www.uir.ac.ma/fr/page/Mentions-legales" class="mr-4 hover:underline md:mr-6 duration-[0.3s] text-white hover:text-barberry-600">Legal Notice</a>
                        </li>
                        <li>
                            <a href="https://faq.uir.ac.ma/" class="hover:underline duration-[0.3s] text-white hover:text-barberry-600">FAQ</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-barberry-600 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline text-barberry-600">UIR™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer;