import {DefaultImg} from "./ImageComponent.tsx";


export default function CarouselComp(content:any[]) {

    let index = 0
    const lastIndex = content.length - 1;

    return (
        <div className="flex gap-3 w-full">

            <div className="align-middle">
                <button className="bg-amber-500" onClick="Cycle(1)">
                    V
                </button>
            </div>

            <div className="w-full">
                {
                    content?.[index]?.linkType == "img" ?
                        <div>
                            <DefaultImg source={content?.[index]?.link} alt={content?.[index]?.linkType}/>
                        </div>
                        :
                        <div className="py-4 flex justify-center">
                            <YouTube class={"rounded-2xl max-w-[900px]"} title={"Some title"}
                                     videoId={content?.[index]?.link}/>
                        </div>
                }
            </div>

            <div>
                <button onClick="Cycle(-1)" className="bg-amber-500">
                    V
                </button>
            </div>
        </div>
    )
}