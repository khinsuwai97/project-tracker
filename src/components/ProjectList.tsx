import React, { useEffect, useState } from 'react'
import DeleteIcon from './DeleteIcon'
import { mockApi } from '../api/mockApi'
import useProjectContext from '../hooks/useProjectContext'
import type { Project } from '../types'

const ProjectList = () => {

    const [loading, setLoading] = useState(false)
    const { project, setProject, filter, search } = useProjectContext()

    const stausColor = (status: string) => {
        switch (status) {
            case "pending":
                return "text-blue-700 bg-blue-200";

            case "completed":
                return "text-green-700 bg-green-200";

            case "active":
                return "text-yellow-700 bg-yellow-200";


            default:
                return "text-gray-700 bg-gray-200";

        }
    }
    const fetchProjects = async () => {
        setLoading(true)
        try {
            const res = await mockApi.getProjects()
            const data = res.data

            setProject(data)
            setLoading(false)
        } catch (error: any) {

            console.log(error)
        }

    }


    useEffect(() => {
        fetchProjects()
    }, [])



    const visibleproject = project?.filter(d => d.status === filter || filter === "all")


    const filterProject = visibleproject?.filter(d => search === "" ? d : d.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))




    if (loading) {
        return <div className='text-center mt-4'>Loading...</div>
    }

    if (!loading && filterProject?.length === 0) {
        return <p className='text-center mt-4 text-lg'>No projects found.</p>
    }

    return (
        <>
            {(filterProject ?? []).length > 0 && (filterProject ?? []).map((d: Project) => (
                <div className='mt-4 border-1 border-gray-300 rounded-lg shadow-md ring-gray-900/5 px-6 py-4 cursor-pointer'>
                    <div className='flex justify-between items-center'>
                        <div >
                            <div className='flex gap-2 items-center'>
                                <p className='text-md font-semibold'>{d.name}</p>
                                <div className={`${stausColor(d.status)} rounded-xl px-2 text-sm`}>{d.status}</div>
                            </div>
                            <div className='flex gap-2 items-center text-sm text-gray-500 mt-1'>
                                <p>{d.tasks.length} tasks</p>
                                <span className='bg-gray-500 rounded-full w-1 h-1'></span>
                                <p>{d.tasks.filter(d => d.status === "completed").length} completed</p>
                            </div>

                        </div>
                        <DeleteIcon />
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectList