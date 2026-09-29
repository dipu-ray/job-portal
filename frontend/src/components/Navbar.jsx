import { Link } from "react-router-dom";

function Navbar() {
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
                    <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;