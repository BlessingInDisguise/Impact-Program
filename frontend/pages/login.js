import {set} from 'next-cookies';
import Link from "next/link";
import React, { useState , useEffect } from "react";
import Router from 'next/router';  
const login = () => {
    const[logined,setLogined] = useState('');
    const[formData,setFormData] = useState({})
    const[error,setError] = useState(false);
    useEffect(()=>{
        console.log('logined',logined)
        if(logined===200){
            Router.push('/')
            setError(false);
            
        }
        else if(logined===401){
            setError(true);
        }
    },[logined]);
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await fetch('http://localhost:5001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            });
            console.log(res.status);
            //set user is login or not
            setLogined(res.status);
            
            //store cookies 
            // res.set('jwt',json.jwt,{
            //     maxAge: 5 * 24 * 60 * 60, // 5 days
            // })
        }catch(err){
            console.log('error is',err);
        }
    }
    return (
        <div>
            <div className="w-full min-h-screen bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-bold">Login Here</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="email">Email-Address</label>
                            <input 
                                id="email" type="email" name="username" 
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="password">Password</label>
                            <input 
                                id="password" type="password" name="password" 
                                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
                                onChange={handleChange}
                            />
                        </div>
                        <div className={error?'block':'hidden'}>
                            <p className='text-red-500'>{`Error: Invalid username or password`}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-50"> Remember me </label>
                            </div>

                            <Link href={'/forgot'}><div href="#" className="text-sm"> Forgot your password? </div></Link>
                        </div>
                        
                        <div className="mt-6">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-amber-400 border border-transparent rounded-md font-semibold capitalize text-black hover:text-white hover:bg-amber-500 active:bg-amber-500 focus:outline-none focus:border-amber-500 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
                        </div>
                        <div className="mt-6 text-center">
                            <Link href={'/signup'}>
                            <div className="font-bold underline">Sign up for an account</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default login;