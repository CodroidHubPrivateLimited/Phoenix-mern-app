import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import NavBar from '../../users/navigation/navbar';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/admin-login', {
                email,
                password
            });
            setSuccess('Logged in successfully');
            setError('');
            setTimeout(() => {
                navigate('/'); // Adjust the path as per your route setup
            }, 2000);
        } catch (error) {
            setSuccess('');
           
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className='outer-container'>
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
                    {error && !success && <span className='error-message'>{error}</span>}
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
                {success && <div className='success-message'>{success}</div>}
            </div>
        </div>
    );
}

export default AdminLogin;
