
import {projects} from "../data/projectData";
import pic from "../../images/portfoliophoto.jpg"
import {TagFilterSearch} from "../Components/tagFilterSearch";
import {useState} from "react";

export function AllProjectDisplayPage(){

    const [projectFilteredTags, setProjectFilteredTags] = useState([])
    const [roleFilteredTags, setRoleFilteredTags] = useState([])

    /*filter the corrosponding projects */
    const projectsWantedFiltered = projects.filter(project => projectFilteredTags.length === 0 ||
        projectFilteredTags.every(tag => project.tags.projectTag.includes(tag))); /*we go through every filtered tag with each project's tag to determine if it
        has it in there */


    const roleFilteredProjects = projectsWantedFiltered.filter(project => roleFilteredTags.length === 0 ||
    roleFilteredTags.every(tag => project.tags.roleTag.includes(tag)));
    return (
        <main>
            <h1> My Life's Work</h1>

            <TagFilterSearch projectfilterTags={setProjectFilteredTags} roleFilteredTags={setRoleFilteredTags}
            getterProjects={projectFilteredTags} getterRoles={roleFilteredTags} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
            style={{
                display: "grid",
                gridColumn: 'repeat(auto-fill, minmax(500px, 1fr))',
                gap: '1rem',
                padding: '1rem'
            }}>
                {roleFilteredProjects.map(project => (
                    <DefaultCard title={project.title} imgSrc={pic} alt={project.title} path={project.path} />
                ))}
            </div>

        </main>
    )
}