import { useState } from "react";

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

    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}

export default Signup;