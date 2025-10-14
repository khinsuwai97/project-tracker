import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'
import ProjectHeader from './ProjectHeader'

const Projects = () => {
    return (
        <div className='mt-11 px-2'>
            <div className="bg-white rounded-lg px-6 py-8 ring shadow-md ring-gray-900/5 ">
                <ProjectHeader />
                <ProjectForm />
                <ProjectList />
            </div>

        </div>
    )
}

export default Projects