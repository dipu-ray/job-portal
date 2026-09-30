import { useAuth } from '../context/AuthContext'

function SeekerDashboard() {
    const { user, logout } = useAuth()

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Welcome, {user.first_name || user.username}!
                </h1>
                <button
                    onClick={logout}
                    className="text-sm text-red-600 hover:underline"
                >
                    Logout
                </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600">Your applied jobs list will be displayed here.</p>
            </div>
        </div>
    )
}

export default SeekerDashboard