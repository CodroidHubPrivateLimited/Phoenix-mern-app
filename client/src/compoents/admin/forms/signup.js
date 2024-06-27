import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    let validationErrors = {
      // email : "Invalid email format",
      // password : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number"
    };

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!validatePassword(password)) {
      validationErrors.password = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      const res = await axios.post('http://localhost:8000/admin-signup', {
        email: email,
        password: password
      });
      if (res.status === 200) {
        setSuccessMessage("SIGNED UP SUCCESSFULLY");
      }
      console.log('Sign-up successful!', res.data);
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrors({ form: 'An error occurred during sign up. Please try again.' });
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <div className="password-input-container">
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              disabled={isSubmitting}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {/* {errors.password && <p className="error-text">{errors.password}</p>} */}
          {errors.password && <p className="error-text">{errors.password}</p>}

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            disabled={isSubmitting}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="button signup-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing Up...' : 'Sign Up now'}
        </button>

        {errors.form && <p className="error-text">{errors.form}</p>}
        {successMessage && <p className="success-text">{successMessage}</p>}

        <div className="links">
          <a className="link-text" href='/admin-login'>Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
