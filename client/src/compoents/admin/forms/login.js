import React, { useState } from 'react'
import axios from "axios"
import "./login.css"
import NavBar from '../../users/navigation/navbar'

function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        try {
            const response = axios.post(`http://localhost:8000/admin-login`, {
                email,
                password
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <body className='outer-container'>
            <div class="login-container">

                <label>Log in</label>

                <div class="inputs">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password" />
                </div>

                {/* <div class="checkbox-container">
                    <input type="checkbox" class="checkbox" />
                    <p>Keep me logged in</p>
                </div> */}

                <button
                    onClick={handleSubmit}
                    class="button login-button"
                >Log in now</button>

                <div class="links">
                    <a
                        class="link-text"
                        href='/admin-signup'
                    >Create new account</a>
                    <p class="link-text">Forgot password</p>
                </div>

            </div>
        </body>

    )
}

export default AdminLogin