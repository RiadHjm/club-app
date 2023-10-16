import React from "react";
import authImg from '../assets/authh.png';

const LoginPage = () => {
    return(
        <div className='bg-[#F8F8F8] h-[100vh] flex'>
            <div className='container m-auto h-[54vh] items-center bg-white rounded-md shadow-md' >
                <div className='lg:grid grid-cols-2 gap-5 items-center'>

                    <div className='h-[80vh] p-4'>
                        <div className='bg-[#F6F6F6] rounded-sm text-center items-center'>
                            <img className='w-full rounded-md' src={authImg} alt='Authentification Image'/>
                        </div>
                    </div>

                    <div className='mb-[200px]'>
                        <div className="text-center">
                            <h1 className='text-[#003667] text-[32px] font-bold'>Log-In</h1>
                            <p className='text-[#D0D700]'>Enjoy Your Student's Life</p>
                        </div>
                            
                        <div className='px-[50px]'>
                            <form>
                                <div class="relative z-0 w-full mb-6 group mt-10">
                                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                                <div className="mt-10">
                                    <button type="button" class="text-white hover:text-[#D0D700] ease-in-out duration-300 bg-[#003667] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-[#D0D700] font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#003667] dark:focus:ring-[#D0D700]">Log in</button>
                                </div>
                            </form>
                        </div>
   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
