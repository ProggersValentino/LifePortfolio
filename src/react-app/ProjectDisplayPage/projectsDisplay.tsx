
import {projects} from "../../lib/data/projectData";
import {TagFilterSearch} from "../Components/tagFilterSearch.tsx";
import {useState} from "react";
import {DefaultCard} from "../Components/CardComponent";
import {DefaultTitle} from "../Components/TitleComponent.tsx";

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
            <DefaultTitle title={"My Life's Work"} className={""} />

            {/*<TagFilterSearch projectfilterTags={setProjectFilteredTags} roleFilteredTags={setRoleFilteredTags}
            getterProjects={projectFilteredTags} getterRoles={roleFilteredTags} />*/}
            <div className="bg-[var(--color-surface)] rounded-xl py-7 h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
            style={{
                display: "grid",
                gridColumn: 'repeat(auto-fill, minmax(500px, 1fr))',
                gap: '1rem',
                padding: '1rem'
            }}>
                {roleFilteredProjects.map(project => (
                    <DefaultCard title={project.title} imgSrc={project.thumbnailPic} alt={project.title} path={project.path} />
                ))}
            </div>

        </main>
    )
}