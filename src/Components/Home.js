import React from "react";
import homePic from '../assets/home.png';
import logoUir from '../assets/uir-clubs.png';
import homePicLand from '../assets/idea-pic.png';
import { Link } from 'react-router-dom';
import CardHover from "./CardHover";



const Home = () => 
{
    return(
        <div className='flex justify-center items-center flex-col sm:gap-[500px] lg:gap-[1px] relative'>
            <div className='lg:grid sm:grid-cols-2 gap-7 sm:items-center sm:ml-[100px] sm:mr-[100px] flex flex-col h-[80vh] lg:mt-11 sm:mt-40'>
                <img src={homePic} className='sm:h-[60vh] h-auto'/>
                <div className='sm:grid sm:grid-row-2 gap-[80px]'>
                    <p className='text-[25px] text-gray-800'>
                        Welcome to UIR, where students come to learn, grow, and succeed. Our college club offers a unique opportunity 
                        for students to connect with each other and get involved on campus. With a wide range of events and activities, there's 
                        always something happening at UIR. Join us and discover the many benefits of being a part of our vibrant community.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link to='/about' className="sm:w-[100%] w-[50%] flex justify-center items-center">
                            <button type="button" class="w-[35%] text-white hover:text-[#D0D700] ease-in-out duration-300 bg-midnight-blue-900 hover:bg-midnight-blue-800 focus:outline-none focus:ring-4 focus:ring-barberry-600 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-midnight-blue-800 dark:hover:bg-midnight-blue-900 dark:focus:ring-barberry-600">About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100 w-full">
                <h2 className="text-midnight-blue-900 font-[600] text-[30px] cursor-default hover:text-barberry-600 duration-[0.4s] ease-in-out">Some of our Active Clubs :</h2>
                <div className='lg:flex lg:justify-center sm:justify-evenly items-center h-[50vh] lg:mt-[120px]'>
                    <CardHover clubName="UIR" description="Welcome to UIR, where students come to learn, grow, and succeed. Our college club offers a unique opportunity qsdfjhqsbdfkhkjh qshkjdv gqksdhjfqsdfkhjg qskufhdgq " imgSrc={logoUir}/>
                    <CardHover clubName="UIR" description="Welcome to UIR, where students come to learn, grow, and succeed. Our college club offers a unique opportunity qsdfjhqsbdfkhkjh qshkjdv gqksdhjfqsdfkhjg qskufhdgq " imgSrc={logoUir}/>
                    <CardHover clubName="UIR" description="Welcome to UIR, where students come to learn, grow, and succeed. Our college club offers a unique opportunity qsdfjhqsbdfkhkjh qshkjdv gqksdhjfqsdfkhjg qskufhdgq " imgSrc={logoUir}/>
                </div>
            </div>

            <div className='flex items-center justify-center m-[50px] sm:mt-[900px] lg:mt-[70px]'>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[200px] ">
                    <img src={homePicLand} className='sm:h-[60vh] h-auto mb-11 lg:mb-0'/>
                    <div className='flex flex-col gap-[50px]'>
                        <h1 className='text-[40px] text-gray-800 flex justify-center items-center'>Wanna Join a Club Aswell ?!</h1>
                        <p className='text-[25px] text-gray-800'>
                            Join the fun and excitement of belonging to a club! Whether you're looking for a new hobby or simply want to meet like-minded individuals, 
                            there's a club for you. With a wide range of interests and activities, clubs are a great way to connect with others and pursue your passions. 
                            You can also create your own club and invite others to join in on the fun. Don't miss out on the chance to expand your horizons and make new friends. 
                            Join or create a club today!
                        </p>
                        <div className='flex justify-between '>
                            <Link to='/clubs' className="max-w-lg">
                                <button type="button" class="w-[100%] text-white hover:text-[#D0D700] ease-in-out duration-300 bg-midnight-blue-900 hover:bg-midnight-blue-800 focus:outline-none focus:ring-4 focus:ring-barberry-600 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-midnight-blue-800 dark:hover:bg-midnight-blue-900 dark:focus:ring-barberry-600">More About Clubs</button>
                            </Link>
                            <Link to='' className="max-w-lg">
                                <button type="button" class="w-[100%] text-white hover:text-[#D0D700] ease-in-out duration-300 bg-midnight-blue-900 hover:bg-midnight-blue-800 focus:outline-none focus:ring-4 focus:ring-barberry-600 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-midnight-blue-800 dark:hover:bg-midnight-blue-900 dark:focus:ring-barberry-600">More About Events</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;