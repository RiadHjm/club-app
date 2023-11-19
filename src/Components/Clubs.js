import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
    const [pageSize, setPageSize] = useState(25);

    const fetchClubs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/clubs', {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                },
            });
            setClubs(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClubs();
    }, [pageNumber, pageSize])
    return (
        <div className='flex flex-col mt-[150px] mb-24'>

            <div className='flex justify-end'>
                <form className='w-[80vh]'>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Clubs . . ." />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-midnight-blue-900 hover:bg-barberry-600 duration-300 focus:ring-4 focus:outline-none focus:ring-barberry-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div >

            <div>
                
            </div>
        </div>
    )
}

export default Clubs