import {HomeTitle} from "../Components/TitleComponent.tsx";
import {DefaultTitle} from "../Components/TitleComponent.tsx";
import {DefaultImg} from "../Components/ImageComponent";
import portfolioImg from "./portfoliophoto.jpg"
import {SmallSideParagraph} from "../Components/ParagraphComponent";
import {projects} from "../data/projectData";
import {DefaultCard, PictureCard} from "../Components/CardComponent";
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
                    "md:shadow-xl/30 shadow-[var(--sun-ray)]"} source={portfolioImg} alt={"Portfolio Photo"} />

                <div className={"inset-shadow-sm/50 p-10"}>
                    <SmallSideParagraph para ={"A man who !loves programming based on the Gold Coast"} />
                </div>

            </div>

            <div className={"wood-container md:rounded-2xl h-full"}>
                <div className={"bg-[var(--chestnut-tan)] outline-4 outline-[var(--soil-umber)] rounded-t-2xl"}>
                    <DefaultTitle className={"text-[var(--amber-sap)]   text-shadow-[var(--charcoal)]"} title={"Golden Child Projects"} />
                </div>


                <div className={"goldenChildren h-full grid-cols-1 md:grid-cols-3 md:w-full p-5"}>
                    {/*grabs and displays all projects that are tagged goldenchild*/}
                    {goldenChildren.map (golden => (
                        <DefaultCard key={golden} title={golden.title} imgSrc={golden.thumbnailPic} alt={golden.title}
                                     path={golden.path} imgHeight={200} imgWidth={400} />
                    ))}
                </div>

            </div>

            <div className={"wood-container md:rounded-2xl h-full"} style={{
                marginTop: "5%",
                marginBottom: "5%",
                }}>

                <div className={"bg-[var(--chestnut-tan)] outline-4 outline-[var(--soil-umber)] rounded-t-2xl"}>
                    <DefaultTitle className={"text-[var(--amber-sap)]"} title={"Education/Experience"} />
                </div>


                <div className={"education h-full grid-cols-1 md:grid-cols-5 md:w-full p-5"}>
                    {educationData.map (education => (
                        <PictureCard backContent={education.name} imgSrc={education.imgSrc} alt={education.name}
                                     path={education.uri} />
                    ))}

                </div>
            </div>

        </>
    )
}