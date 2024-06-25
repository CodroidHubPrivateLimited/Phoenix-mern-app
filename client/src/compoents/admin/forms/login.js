import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import NavBar from '../../users/navigation/navbar';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/admin-login', {
                email,
                password
            });
            // Handle successful login here
        } catch (error) {
            // Check if error response exists and set error message
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <body className='outer-container'>
            <div className='login-container'>
                <label>Log in</label>
                <div className='inputs'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        type='email'
                        className={error ? 'error' : ''}
                    />
                    {error && <span className='error-message'>Please enter a valid email address.</span>}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        type='password'
                        className={error ? 'error' : ''}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className='button login-button'
                >
                    Log in now
                </button>
                <div className='links'>
                    <a
                        className='link-text'
                        href='/admin-signup'
                    >
                        Create new account
                    </a>
                    <p className='link-text'>Forgot password</p>
                </div>
                {error && <div className='error-message'>{error}</div>}
            </div>
        </body>
    );
}

export default AdminLogin;
