import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Phase 4: There will call to real API
        console.log('Login data:', formData)
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="tomar_username"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login