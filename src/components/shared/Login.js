import { useState } from "react"
import axios from 'axios'

const Login = () => {

    const [formdata, setFormdata] = useState({
        login: '',
        password: ''

    })

    const handleChange = (e) => {
        setFormdata({
            ...formdata, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventdefault()

        try {
            const response = await axios.post('/users', formdata)
            console.log(response)
        } catch (error) {
            console.error('Login error', error)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex items-center justify-center w-4/5 p-10 from-purple-400 to-blue-400 bg-gradient-to-r">

                <div className="w-3/4 p-10 bg-red-300 rounded-3xl">
                    <div className="w-1/2 bg-center bg-cover rounded-r-lg" style={{ backgroundImage: "url('/images/resume-signup-page.png')" }}>
                    </div>
                    <div className="relative w-1/2 p-10">
                        <form className="space-y-6" onSubmit={handleSubmit} >
                            <input
                                type='email'
                                name='email'
                                placeholder="email"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border-b-2 border-blue-800"
                            />

                            <input
                                type='password'
                                name='password'
                                placeholder="password"
                                onChange={handleChange}
                                className="w-full px-4 py-2 border-b-2 border-blue-800"
                            />
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login;