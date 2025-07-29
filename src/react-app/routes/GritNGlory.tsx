import {Tag} from "../Components/TagComponent"
import {DefaultTitle} from "../Components/TitleComponent";
import {projects} from "../data/projectData"
import {DefaultParagraph} from "../Components/ParagraphComponent";
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



