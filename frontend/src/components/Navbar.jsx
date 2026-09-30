import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                    JobPortal
                </Link>
                <div className="flex gap-6 items-center">
                    <Link to="/jobs" className="text-gray-700 hover:text-indigo-600">
                        Jobs
                    </Link>

                    {user ? (
                        <>
                            <Link
                                to={user.role === 'Recruiter' ? '/dashboard/recruiter' : '/dashboard/seeker'}
                                className="text-gray-700 hover:text-indigo-600"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar