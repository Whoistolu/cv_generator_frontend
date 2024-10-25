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

    const handleSubmit =  async (e) => {
        e.preventdefault()

        try {
            const response = await axios.post('/users', formdata)
            console.log(response)
        } catch (error) {
            console.error('Login error', error)
        }
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder="email"
                    onChange={handleChange}
                />

                <input
                     type='password'
                     name='password'
                     placeholder="password"
                    onChange={handleChange}

                />
            </form>
        </div>
    )
}
export default Login;