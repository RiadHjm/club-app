import React from 'react';
import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

import clubPic from '../assets/club-pic.png';

import { Col, Row } from 'antd';

import { Card } from 'antd';
const { Meta } = Card;

const Clubs = () => {

    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePreviousPage = () => {
        if (pageNumber > 0) {
          setPageNumber(pageNumber - 1);
        }
      };
      
      const handleNextPage = () => {
        if (pageNumber < maxPages - 1) {
          setPageNumber(pageNumber + 1);
        }
      };

    const fetchClubs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/clubs/detailed', {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    search: searchTerm,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setClubs(response.data);
            setLoading(false);
            setMaxPages(response.headers.get('total-pages'));
            console.log(response.headers.get('total-pages'));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClubs();
    }, [pageNumber, pageSize])


    return (
        <div className='flex flex-col mt-[150px] mb-24 gap-20'>
            <div className='flex relative'>
                <div className='flex gap-36 m-16 mt-1 sm:flex-col lg:flex-row justify-center items-center relative'>
                    <img src={clubPic} className='lg:w-[40%] ml-10 z-10 flex justify-center items-center' />
                    <div>
                        <h1 className='text-[40px] text-center text-midnight-blue-900 lg:mt-0 mt-32 flex justify-center items-center'>Explore Our Vibrant Campus Clubs</h1>
                        <p className='text-[25px] text-gray-800 text-justify'>
                            Discover a diverse array of student clubs that fuel passion, foster connections, and enrich your university experience. 
                            From academic pursuits to cultural celebrations, find the perfect club to enhance your journey at our dynamic campus. 
                            Dive into a world of opportunities and community engagement – your adventure starts here!
                        </p>
                    </div>
                </div>
                <div className='w-[600px] h-[600px] bg-barberry-600 rounded-full absolute opacity-60 flex justify-start z-0'></div>
                <div className='w-[150px] h-[150px] bg-barberry-600 rounded-full absolute opacity-70 flex justify-start z-0 ml-[450px]'></div>
                <div className='w-[250px] h-[250px] bg-barberry-600 rounded-full absolute opacity-50 flex justify-start z-0 mt-[420px] ml-24'></div>
            </div>

            <div className='flex flex-col gap-6 bg-gray-100 p-24 lg:p-16'>
                <h1 className='text-[40px] text-midnight-blue-900 flex justify-center items-center'>See what you can do here !</h1>

                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Browse Clubs" bordered={false} className='h-[200px]' headStyle={{ color: '#003667' }} >
                            Discover Your Tribe: Dive into the rich tapestry of student organizations that our university offers. 
                            From academic pursuits to shared hobbies, find the perfect community to thrive in. 
                            Explore diverse interests and join clubs that resonate with your passions.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Join Clubs " bordered={false} className='h-[200px]' headStyle={{ color: '#003667' }} >
                            Elevate Your University Journey: Immerse yourself in the vibrant tapestry of campus life by exploring and joining a variety of student clubs. 
                            Unleash your potential, build lasting connections, and make memories that extend far beyond the classroom.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="View Events" bordered={false} className='h-[200px]' headStyle={{ color: '#003667' }} >
                            Stay Connected, Stay Informed: Uncover the heart of campus happenings by exploring event details. 
                            From club meetings to campus-wide festivities, stay informed and engaged. 
                            Find events that spark your interest and create a calendar filled with exciting experiences.
                        </Card>
                    </Col>
                </Row>
            </div>
            <h1 className='text-center text-4xl text-midnight-blue-900 pointer-events-none'>Looking for a Club ?</h1>
            <div className='flex justify-end'>
                
                <form className='w-[80vh]'
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchClubs();
                    }}
                >
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" autoComplete='off' class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Clubs . . ." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-midnight-blue-900 hover:bg-barberry-600 duration-300 focus:ring-4 focus:outline-none focus:ring-barberry-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div >

            <div className='flex flex-col justify-center items-center'>
                {loading ? (
                    <Loading />
                ) : (
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-8 m-11'>
                        {clubs.map((clubDetails) => (
                            // <div key={clubDetails.club.idC} className='border-[2px] border-midnight-blue-900 mb-10 p-9 rounded-3xl'>
                            //     <Link to='/'>
                            //         <h2 className='text-midnight-blue-900 hover:text-barberry-600 cursor-pointer text-[30px] line-clamp-2 underline mb-6'>{clubDetails.club.name}</h2>
                            //     </Link>
                            //     <p>{clubDetails.club.description}</p>   
                            // </div>
                            <div key={clubDetails.club.idC}>
                                <Card
                                    hoverable
                                    style={{ width: 240, height: 360 }}
                                    loading={loading}
                                    cover={<img alt="Club Logo" src={clubDetails.logo} className='h-52'/>}
                                >
                                    <Meta title={clubDetails.club.name} description={clubDetails.club.description} />
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <p> <span className='text-barberry-600'> {pageNumber + 1} </span> / {pageSize}</p>
                </div>
                
                <div className="flex justify-center gap-44 mt-4">
                    <button onClick={handlePreviousPage} disabled={pageNumber === 0} className='text-white hover:text-[#D0D700] ease-in-out duration-300 bg-midnight-blue-900 hover:bg-midnight-blue-800 focus:outline-none font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-midnight-blue-800 dark:hover:bg-midnight-blue-900'>Previous</button>
                    <button onClick={handleNextPage} disabled={pageNumber === maxPages - 1} className='text-white hover:text-[#D0D700] ease-in-out duration-300 bg-midnight-blue-900 hover:bg-midnight-blue-800 focus:outline-none font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-midnight-blue-800 dark:hover:bg-midnight-blue-900'>Next</button>
                </div>

            </div>
        </div>
    )
}

export default Clubs