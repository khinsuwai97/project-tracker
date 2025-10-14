import React from 'react'

const ProjectForm = () => {
    return (
        <form className='mt-4 flex flex-col lg:flex-row gap-4 justify-between items-center'>

            <input type="text" placeholder="Add project" className="input w-full !outline-none !focus:border-0" />

            <div>

                <select defaultValue="Pick a browser" className="select text-md font-normal w-full min-w-[150px] !outline-none !focus:border-0">
                    <option>Completed</option>
                    <option>Active</option>
                    <option>Pending</option>
                </select>
            </div>

            <button className="btn btn-active btn-primary">Add Project</button>
        </form>
    )
}

export default ProjectForm