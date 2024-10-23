import { useState } from "react";

const Signup = () => {

    const [formdata, setFormdata] = useState({
        email: '',
        password: '',
        password_confirmation: ''

    });
    const handleChange = () => {
        
    }
    return (
        <div>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <input
                    type="pasword"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                />
            </form>
        </div>
    )
}

export default Signup;