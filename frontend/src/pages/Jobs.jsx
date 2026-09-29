import JobCard from '../components/JobCard'

const dummyJobs = [
    {
        id: 1,
        title: 'Junior Django Developer',
        company_name: 'TechNova Ltd',
        location: 'Dhaka',
        job_type: 'full_time',
        salary_min: 30000,
        salary_max: 50000,
        description: 'You will need to work with Django and REST API. This is a great opportunity for fresh graduates.',
    },
    {
        id: 2,
        title: 'React Frontend Engineer',
        company_name: 'PixelCraft Studio',
        location: 'Remote',
        job_type: 'remote',
        salary_min: 40000,
        salary_max: 65000,
        description: 'Must have experience working with React, Tailwind, and modern frontend tools.',
    },
    {
        id: 3,
        title: 'Marketing Intern',
        company_name: 'BrightAds BD',
        location: 'Chittagong',
        job_type: 'internship',
        salary_min: null,
        salary_max: null,
        description: 'Must assist in managing social media campaigns and content planning.',
    },
]

function Jobs() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">All Job Listing</h1>
            <p className="text-gray-500 mb-8">{dummyJobs.length} jobs has been found</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default Jobs