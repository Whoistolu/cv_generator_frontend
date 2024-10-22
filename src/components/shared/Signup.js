const Signup = () => {
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