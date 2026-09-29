import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/jobs?search=${search}`)
    }

    return (
        <div>
            {/* Banner Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Find your dream Jobs
                    </h1>
                    <p className="text-lg text-indigo-100 mb-8">
                        Choose the best match for you from thousands of job listings.
                    </p>

                    {/* Search Bar */}
                    <form
                        onSubmit={handleSearch}
                        className="bg-white rounded-full shadow-lg flex items-center p-2 max-w-xl mx-auto"
                    >
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Job title, keyword, ba company..."
                            className="flex-1 px-4 py-2 text-gray-800 outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* Stats / Info Section */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <p className="text-3xl font-bold text-indigo-600">500+</p>
                    <p className="text-gray-500 mt-1">Active Jobs</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-indigo-600">200+</p>
                    <p className="text-gray-500 mt-1">Companies</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-indigo-600">10,000+</p>
                    <p className="text-gray-500 mt-1">Job Seekers</p>
                </div>
            </section>
        </div>
    )
}

export default Home