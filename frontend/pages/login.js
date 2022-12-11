import { useRouter } from "next/router"
import Link from "next/link";
import React, { useState } from "react";
const login = () => {

    return (
        <div>
            <div className="w-full min-h-screen bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-bold">Login Here</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-1" for="email">Email-Address</label>
                            <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" for="password">Password</label>
                            <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                                <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-50"> Remember me </label>
                            </div>

                            <Link href={'/forgot'}><div href="#" className="text-sm"> Forgot your password? </div></Link>
                        </div>
                        <div className="mt-6">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-amber-400 border border-transparent rounded-md font-semibold capitalize text-black hover:text-white hover:bg-amber-500 active:bg-amber-500 focus:outline-none focus:border-amber-500 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
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