import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        const userExists = existingUsers.find(user => user.email === formData.email);
    
        if (userExists) {
            alert('User already exists with this email.');
            return;
        }
    
        existingUsers.push(formData);
        localStorage.setItem('users', JSON.stringify(existingUsers));
    
        console.log('User signed up:', formData);
        navigate('/login');
    };
    

    return (
        <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">
            <div className="bg-[#1c1c1c] p-8 rounded-xl shadow-md w-full max-w-md text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">🚀 Sign Up to CryptoWorld</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full p-2 bg-[#2a2a2a] border border-gray-600 rounded focus:outline-none"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 bg-[#2a2a2a] border border-gray-600 rounded focus:outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-2 bg-[#2a2a2a] border border-gray-600 rounded focus:outline-none"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                    >
                        Sign Up
                    </button>

                    <p className="text-sm text-center mt-3">
                        Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
