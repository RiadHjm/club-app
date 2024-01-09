import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import eventPic from '../assets/eventsM.svg'
import '../styles/events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
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

      const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/events', {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    search: searchTerm,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setEvents(response.data);
            setLoading(false);
            setMaxPages(response.headers.get('total-pages'));
            console.log(response.headers.get('total-pages'));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEvents();
    }, [pageNumber, pageSize])
    return (
        <div className='flex flex-col mt-[150px] mb-24 gap-20'>
            <div className='flex gap-36 m-16 mt-1 sm:flex-col lg:flex-row justify-center items-center relative'>
                <img alt='' src={eventPic} className='lg:w-[40%] ml-10 z-10 flex justify-center items-center' />
                <div className='flex flex-col gap-10'>
                    <h1 className='text-[40px] text-center text-midnight-blue-900 lg:mt-0 mt-32 flex justify-center items-center'>Explore Exciting Events at Our Campus!</h1>
                    <p className='text-[25px] text-gray-800 text-justify'>
                    Welcome, dear students! Stay informed and get involved by checking out the latest events hosted by our 
                    vibrant student clubs. From academic discussions to social gatherings, there's something for everyone. 
                    Mark your calendars and join us for an unforgettable experience!
                    </p>
                </div>
            </div>

            <div className='bg-gray-100 p-16 w-full'>
                    <h1 className='text-center pointer-events-none text-midnight-blue-900 mb-10 text-4xl'>Campus Chronicles: Unleashing Engaging and Inspirational Events</h1>
                    <div className='flex items-center justify-center gap-24'>
                        <div className='flex flex-col justify-center round-hover duration-300 cursor-pointer items-center gap-3'>
                            <div className='rounded-full hover:bg-barberry-600 duration-300 w-28 h-28 bg-midnight-blue-900 flex items-center justify-center'>
                                <img alt='' src="data:image/png;base64,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"></img>
                            </div>
                            <h1 className='text-xl'>Engaging</h1>
                        </div>
                        <div className='flex flex-col cursor-pointer justify-center round-hover duration-300 items-center'>
                            <div className='rounded-full hover:bg-barberry-600 duration-300 w-28 h-28 bg-midnight-blue-900 flex justify-center items-center'>
                                <img alt='' src="data:image/png;base64,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" />
                            </div>
                            <h1 className='text-xl mt-4'>Inspirational</h1>
                        </div>

                        <div className='flex flex-col cursor-pointer justify-center round-hover duration-300 items-center'>
                            <div className='rounded-full hover:bg-barberry-600 duration-300 w-28 h-28 .round-hover bg-midnight-blue-900 flex justify-center items-center'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMElEQVR4nO2bW2wVVRSGNwUUFBBRtEbFxCgxXlB5QR7UJySNRtEgraIJtRDrLcqTGNREE0FJNV4gwdsDghpFoqioICTGalAxWjUSg8QoeAO8oYJSCp9ZmX/oZpyeczoeOjPH+ZOTdNbsNbP3Ovus9e9/7zpXoECBAgUK9BmA8cAs4A6gn/u/ABgALKIb24FhkTYnA5cA44D+rpYAtGjgq4BzgCHevWHAMvbHF8BZJZ53sMsTgOc1sJEx917UvZXADcB8oBPYAhzptTsUmAP8AnQBnwNTXB4ALNYgR0Tsp8q+ImK/VvZZuj4X+Ea2DZox23R9vcs6gKnqrHX8GM/eKPu0SPvhsj8DXAPsAnYAN4b5ATga+E4zJVsJFTgdeMDrbH/gZQ1qL/AhMBu4TrbJMUkzTJaGL4ExMe+xn4thlMsSCEqdYaxn6wc0AS8Bv+l+Z5kAGD6Lyx1qtxrYDQxyWQJwuTo/s4f7g4HbvUFa8jvR+4yW3X7n9TH+ZwKPqs2zLmsgGOAWTeErgIGaAVYC2/St/k15/AA8oqn+JPAW8FOkzVyXRQDnR6b6X16nf1TZa9e1lcJ7vc+8HgKyU/nDgngh8LFK4nEuiwDqleyWA6+p40aH63T/6gpygOEpqx6hn9fuKt1vdHkE5QOwFujwSujwSLubde9iV6MBeAE4RHwgTIpWOo8HJikfmO0wV6sBcN22acD3MTmhweUFBNXgPOBSlbqKAyD7EKO+wALllmwRoFLQMvcr79szRrixNwHIBQho71QRlfn6tutVEm3K3gM02wLIC0bJAGi2zFY1uM9fJWYKBEvWt2Pq97ZouRIxWlUmAEabH1St97EmlQHGDNYS01yg1fi6FkCGx4yciNY+J9ueKGeXX6kAmE9YDidatheBsoAMcCmv9jZFvpXtWrKu9wmLqTfK3p0xz6mECL1qyTNGXDnIpZjJN4je3qaFiQ1kqzq2JMbnjYQB2OXrB1kJwAR1oC1inyz7ohifFQkD0B7jk3oAZsTRT+WAagdgWRYD0KoO7MfAlKCqHYB/8YAiAGRnBrT0oPC+GeMTruhG9iCdTcjjDFgfDsg6o5UbqtETvfamCOHxg1AotRXdZuB3YGgeA4A2KVZ6nKBdAzIC8w7wvscE1+nvjWKAf+i6NeYduQjA48An4gMWgLtFes5Q0tupQZqQcZJWcm3S+bokZ10WWUM0SA57PQ8BaKjS8+okcnxLN7p03VzTASDQ+d7zfiZ3AWdHtb+aDADBQinUBx6ObpfXdAAIdL5PJYrM6KVvTQTgIT3jzgS+qQegWR2YlNB/lHaFOkr91kv4v6Ikmc6OMIHERVyGrtDfyqXhooT+7wI/u7QAjNEA5iT0/0gEamBCf9tz/MClBWCQ9vlWJxRTjCUu/w+Vw/CESxPAGjG9ob30M53QsCDhe21PwHClSxN0d6Sll36H61hLU8L3rtXsS3crDBgB/KmFTZ+UI6nChsUuCwDuV4du6oN31alsWv44zWUBBLNgq3ZoTzjA75qpYC90WQIwRR3r8E9/HgAV2g5CfW05xGUNBGd4EEMbXOVnjxVnsIozzmURBELGUgXBVJ9jq3jSbIcEl0S0u89AIGGZQoS2wZqScnXgCM2qvZLX9umLmQcw3dP61ukkV0WUFzhKW23hyTI7DTba5Q0EbG+Jt6X9K/C0dpLHi87aivAU4ALgVgmoe7wjdPvOBOcWBP8AMU/Zuxx26xDk9Gon0iwFo9EEEJ0hWKgDkbeI4VUkhxUoUKBAgQKuavgHKj8DRF7sefgAAAAASUVORK5CYII=" />
                            </div>
                            <h1 className='text-xl mt-4'>Unforgettable</h1>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-3xl mx-32 text-midnight-blue-900 pointer-events-none'>Explore the events below and mark your calendar for an unforgettable journey on campus. Don't miss out on the chance to connect, learn, and make lasting memories.</h1>

                </div>


        </div>
    )
}

export default Events