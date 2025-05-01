import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        const matchedUser = users.find(
            user => user.email === formData.email && user.password === formData.password
        );
    
        if (matchedUser) {
            localStorage.setItem('currentUser', JSON.stringify(matchedUser));
            console.log('Logged in:', matchedUser);
            navigate('/');
        } else {
            alert('Invalid credentials. Try again!');
        }
    };
    

    return (
        <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">
            <div className="bg-[#1c1c1c] p-8 rounded-xl shadow-md w-full max-w-md text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">👋 Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        Log In
                    </button>

                    <p className="text-sm text-center mt-3">
                        Don't have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
