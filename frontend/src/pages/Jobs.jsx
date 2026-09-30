import { useState, useEffect } from 'react'
import api from '../api/axios'
import JobCard from '../components/JobCard'

function Jobs() {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        api
            .get('/jobs/')
            .then((res) => {
                // When DRF pagination is enabled, the results are returned inside the 'results' key.
                setJobs(res.data.results || res.data)
            })
            .catch(() => setError('Failed to load jobs. Please check if the backend server is running.'))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">All Jobs Listing</h1>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <>
                    <p className="text-gray-500 mb-8">{jobs.length} jobs found.</p>
                    {jobs.length === 0 ? (
                        <p className="text-gray-500">No jobs available right now.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Jobs