import React from "react";
import aboutPic from '../assets/about-pic.png';

const About = () => {
    return (
        <div className='flex items-center lg:h-[100vh] justify-center sm:mt-[100px] m-[50px] lg:mt-0'>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[200px] ">
                <img src={aboutPic} className='sm:h-[60vh] h-auto mb-11 lg:mb-0' />
                <div className='flex flex-col gap-[50px]'>
                    <h1 className='text-[40px] text-gray-800 flex justify-center items-center'>About Us !</h1>
                    <p className='text-[25px] text-gray-800'>
                        Welcome to the UIR College Club, a community of students dedicated to learning, leadership, and personal growth. Our club offers a wide range of 
                        activities, events, and opportunities for students to get involved on campus and develop their skills. Whether you're interested in social events, 
                        community service, or professional development, there's something for everyone at UIR College Club. Join us today and become a part of our vibrant 
                        and supportive community.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default About;