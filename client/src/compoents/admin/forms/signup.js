import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:8000/admin-signup', {
        email: email,
        password: password
      });
      if (res.status == 200) {

        alert("SIGNED UP SUCCESSFULLY")

      }

      console.log('Sign-up successful!', res.data);

    } catch (error) {
      console.error('Sign-up error:', error);

    }
  };

  return (
    <div className="outer-container">
      <div className="signup-container">
        <label>Sign Up</label>

        <div className="inputs">
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
            type="password"
          />

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="button signup-button"
        >
          Sign Up now
        </button>

        <div className="links">
          <a className="link-text"
          href='/admin-login'
          >Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;