import {DefaultImg} from "../../components/react/ImageComponent.tsx";
import {CardTitle, CardTitleCustomClass} from "./TitleComponent";
import { useSpring, animated, to } from '@react-spring/web'
import {useState} from "react";
import {DefaultParagraph} from "./ParagraphComponent";
import {OneActionButton} from "./ButtonComponent";
import "./ComponentsCSS/cardcomp.css"


/*TODO: make it take it in only the project type and not 50 different inputs*/
export function DefaultCard({ title, imgSrc, alt, path }) {

    const [flip, setFlip] = useState(true);
    const [hover, setHover] = useState(false);

   /*key hook to engage in animation*/
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))

    const {transform, opacity, scale3d} = useSpring({
        transform: `rotateY(${flip ? 180 : 0}deg)`,
        opacity: flip ? 1 : 0,
        scale3d: hover ? [1.05, 1.05, 1.05] : [1, 1, 1]
    })

    const handleFlip = () => {

        setFlip((flip) => !flip)
    }

    const hoverSwitch = () => {
        setHover((hover) => !hover)
    }

    return(
        <div onMouseEnter={hoverSwitch} onMouseLeave={hoverSwitch} className={"card rounded-lg"}
        style = {{
            /*width: imgWidth,
            height: imgHeight,*/
        }}>


            {/*front of card*/}
            <animated.div
                style={{ transform,
                    opacity,
                    scale3d,
                    rotateY: "180deg",
                }} className="">

                <a href={path} className={"relative"}>
                    <DefaultImg source={imgSrc} alt={alt} />
                    <CardTitleCustomClass title={title} className={"absolute bottom-5 left-5 w-full"} />
                </a>


            </animated.div>

            {/*back of the card*/}
            <animated.div
                style={{ transform,
                    scale3d,
            opacity: opacity.to((o) => 1 - o),
                    }} className="card-back">


                <a href={path}>
                    <DefaultParagraph className={"text-[10px] md:text-2xl"} para={"the information on this is kinda back but dont worry it gets better as I write out this small brief so " +
                        "stay tuned from some cool information "}/>
                </a>
            </animated.div>


        </div>


    )
}

export function PictureCard({ backContent, imgSrc, alt, path, imgWidth, imgHeight}) {

    const [flip, setFlip] = useState(true);
    const [hover, setHover] = useState(false);

    /*key hook to engage in animation*/
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))

    const {transform, opacity, scale3d} = useSpring({
        transform: `rotateY(${flip ? 180 : 0}deg)`,
        opacity: flip ? 1 : 0,
        scale3d: hover ? [1.05, 1.05, 1.05] : [1, 1, 1]
    })

    const handleFlip = () => {

        setFlip((flip) => !flip)
    }

    const hoverSwitch = () => {
        setHover((hover) => !hover)
    }

    return(
        <div onMouseEnter={hoverSwitch} onMouseLeave={hoverSwitch} className={"card rounded-lg"}
             style = {{
                 width: imgWidth,
                 height: imgHeight,
             }}>


            {/*front of card*/}
            <animated.div
                style={{ transform,
                    opacity,
                    scale3d,
                    rotateY: "180deg",
                }} className="">



                <a href={path} className={"relative"}>
                    <DefaultImg source={imgSrc} alt={alt} />
                </a>


            </animated.div>

            {/*back of the card*/}
            <animated.div
                style={{ transform,
                    scale3d,
                    opacity: opacity.to((o) => 1 - o),
                }} className="card-back">


                <a href={path} className={"relative"}>
                    <DefaultParagraph className={"text-[10px]"} para={backContent}/>
                </a>
            </animated.div>


        </div>


    )
}