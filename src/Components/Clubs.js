import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type CommitteeMember = {
    idA: number;
    lastName: string;
    firstName: string;
    email: string;
    roles: string[];
    studentId: string;
    major: string;
    level: string;
}

type Supervisor = {
    idA: number;
    lastName: string;
    firstName: string;
    email: string;
    roles: string[];
}

type Document = {
    idDocument: number;
    name: string;
    type: string;
    size: number;
    dateUpload: string;
}

type Budget = {
    idBudget: number;
    budget_initial: number;
    used_budget: number;
    budgetType: string;
}

type Club = {
    idC: number;
    name: string;
    committeeMembers: CommitteeMember[];
    description: string;
    type: string;
    status: string;
    featured: boolean;
    supervisor: Supervisor;
    documents: Document[];
    budgets: Budget[];
}

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
            const response = await axios.get('http://localhost:8080/api/v1/clubs', {
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
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 m-11'>
                        {clubs.map((club) => (
                            <div key={club.idC} className='border-[2px] border-midnight-blue-900 mb-10 p-9 rounded-3xl'>
                                <Link to='/'>
                                    <h2 className='text-midnight-blue-900 hover:text-barberry-600 cursor-pointer text-[30px] line-clamp-2 underline mb-6'>{club.name}</h2>
                                </Link>
                                <p>{club.description}</p>   
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <p>Page Number: {pageNumber + 1}</p>
                    <p>Page Size: {pageSize}</p>
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