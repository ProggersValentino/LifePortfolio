import {Tag} from "../Components/TagComponent"
import {DefaultTitle} from "~/Components/TitleComponent";
import {projects} from "~/data/projectData.js"
import {DefaultParagraph} from "~/Components/ParagraphComponent";
import type {Route} from "./+types/XProject"
import {GNGLayout} from "../Projects/GritNGlory/GritNGlory"

/*each project page follows this format of display*/
export default function GNGProject()
{
    return(
    <>
        <GNGLayout project={1} />
    </>

    )
}



