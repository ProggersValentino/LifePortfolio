import {HomeTitle} from "../Components/TitleComponent.tsx";
import {DefaultTitle} from "../Components/TitleComponent.tsx";
import {DefaultImg} from "../Components/ImageComponent";
import portfolioImg from "../../assets/portfoliophoto.jpg"
import {SmallSideParagraph} from "../Components/ParagraphComponent";
import {projects} from "../data/projectData";

import "./home.css"
import {educationData} from "../data/educationData.jsx"

export function HomePage()
{
    const goldenChildren = projects.filter(golden => golden.tags.projectTag.includes("GoldenChild"))

    return (
        <>
            <HomeTitle title={"Welcome to Peter's Portfolio"} />

            <div className="w-100 overview">
                <DefaultImg divclassName={"w-100 md:max-w-lg border-[var(--soil-umber)] border-9 rounded rounded-2xl " +
                    "md:shadow-xl/30 shadow-[var(--sun-ray)]"} source={"/images/portfoliophoto.jpg"} alt={"Portfolio Photo"} />
                {/*<img alt={"yes"} src={"../../images/portfoliophoto.jpg"}></img>*/}
                <div className={"inset-shadow-sm/50 p-10"}>
                    <SmallSideParagraph para ={"A man who !loves programming based on the Gold Coast"} />
                </div>

            </div>

            {/*<div className={"wood-container md:rounded-2xl h-full"}>
                <div className={"bg-[var(--chestnut-tan)] outline-4 outline-[var(--soil-umber)] rounded-t-2xl"}>
                    <DefaultTitle className={"text-[var(--amber-sap)]   text-shadow-[var(--charcoal)]"} title={"Golden Child Projects"} />
                </div>

*/}
        </>
    )
}