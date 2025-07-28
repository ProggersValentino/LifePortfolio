import {projects} from "~/data/projectData";
import {DefaultTitle} from "~/Components/TitleComponent";
import {Tag} from "~/Components/TagComponent";
import {DefaultParagraph} from "~/Components/ParagraphComponent";

export function GNGLayout({project})
{
    const projectData = projects.find(p => p.id === project);

    const foundPara = projectData.paragraphs?.find((para) => para.pid === 1).p; /*when you find you extract the whole dataset*/
    return(
        <>
            <DefaultTitle title={projectData.title}/>
            <Tag tags={projectData.tags?.roleTag ?? []}/>

            <DefaultParagraph para={foundPara}/>


        </>
    )
}