import React from 'react'
import Link from 'next/link'
import Router from 'next/router';  
import { useState, useEffect } from 'react';
const signup = () => {
    const [isRegistered,setIsRegistered] = useState(false);
    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    useEffect(() => {
        if (isRegistered) {
          Router.push('/login');
        }
    }, [isRegistered]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
        const res = await fetch('http://localhost:5001/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        
        const json = await res.json();
        console.log(json.success);
        setIsRegistered(true);
        }catch(err){
            console.log('error is',err);
        }
    }


  return (
    <div>
            <div className="w-full min-h-screen bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="name">Your name</label>
                            <input 
                                id="name" 
                                 
                                type="text" name="name" 
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="email">Email-Address</label>
                            <input 
                                id="email" 
                                //value={email}
                                type="text" name="email" 
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="password">Password</label>
                            <input 
                                id="password" 
                                //value={password}
                                type="password" name="password" 
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
                                onChange={handleChange}
                            />
                        </div>
                        
                        
                        <div className="mt-6">
                            <button  type='submit'  className="w-full inline-flex items-center justify-center px-4 py-2 bg-amber-400 border border-transparent rounded-md font-semibold capitalize text-black hover:text-white hover:bg-amber-500 active:bg-amber-500 focus:outline-none focus:border-amber-500 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign Up</button>
                        </div>
                        <div className="mt-6 text-center">
                            <Link href={'/login'}>
                            <div className="font-bold underline">Login From Here</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default signup
