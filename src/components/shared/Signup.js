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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <input
                    type="pasword"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;