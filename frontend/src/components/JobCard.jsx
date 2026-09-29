function JobCard({ job }) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-indigo-600 font-medium">{job.company_name}</p>
                </div>
                <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full capitalize">
                    {job.job_type.replace('_', ' ')}
                </span>
            </div>

            <p className="text-gray-500 text-sm mt-3">📍 {job.location}</p>

            {(job.salary_min || job.salary_max) && (
                <p className="text-gray-700 text-sm mt-1">
                    💰 TK{job.salary_min?.toLocaleString()} - TK{job.salary_max?.toLocaleString()}
                </p>
            )}

            <p className="text-gray-600 text-sm mt-3 line-clamp-2">{job.description}</p>

            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                See Details
            </button>
        </div>
    )
}

export default JobCard