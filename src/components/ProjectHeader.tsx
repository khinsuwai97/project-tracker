import React from 'react'

const ProjectHeader = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='lg:text-lg text-md font-bold'>Projects</p>
                </div>
                <div>
                    <select defaultValue="Pick a browser" className="select text-md font-normal min-w-[150px] !outline-none !focus:border-0">
                        <option >All Projects</option>
                        <option>Completed</option>
                        <option>Active</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>
            <div className='mt-4'>
                <label className="input w-full !outline-none !focus:border-0">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search projects " />
                </label>
            </div>
        </>
    )
}

export default ProjectHeader