import {projects} from "~/data/projectData";
import {DefaultTitle} from "~/Components/TitleComponent";
import {Tag} from "~/Components/TagComponent";
import {DefaultParagraph} from "~/Components/ParagraphComponent";
import {TWLayout} from "../Projects/tortalwelfare/tortalwelfare"

export default function TWProject(){
    return(
        <TWLayout project={2} />
    )
}

