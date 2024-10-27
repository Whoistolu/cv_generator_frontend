import { useState } from "react";
import axios from 'axios';

const Signup = () => {

    const [formdata, setFormdata] = useState({
        email: '',
        password: '',
        password_confirmation: ''

    });
    const handleChange = (e) => {
        setFormdata({
            ...formdata, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/users', formdata)
            console.log(response.data);
        } catch (error) {
            console.error('signup error', error)
        }

    }

    return (
        <div className="flex items-center justify-center bg-white">
            <div className="flex items-center justify-center w-4/5 p-10 shadow-lg bg-gradient-to-r from-blue-800 to-blue-600">
                <div className="flex w-3/4 bg-white rounded-lg">

                    <div className="w-1/2 p-10">
                        <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">Get Started.</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Mark Norman"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="seamus.schmidt@gmail.com"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-32 py-2 mt-4 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-900"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div className="flex items-center justify-center mt-6 space-x-4">
                            <span>Or sign up with</span>
                            <div className="flex space-x-4">
                                <button className="text-blue-500">G</button>
                                <button className="text-blue-500">F</button>
                                <button className="text-blue-500">T</button>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <span>Already have an account? <a href="#" className="text-blue-500">Sign in</a></span>
                        </div>
                    </div>


                    <div className="relative w-1/2 bg-center bg-cover rounded-r-lg" style={{ backgroundImage: "url('/images/resume-signup-page.png')" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;