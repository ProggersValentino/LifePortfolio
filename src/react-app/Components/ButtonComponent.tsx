import {animated, Controller, useSpring} from "@react-spring/web";
import {useState} from "react";



export function OneActionButton({actionEvent, className = ""}) {

    const [hover, setHover] = useState(false);

    const {opacity} = useSpring({
        opacity: hover ? 1 : 0.5
    })

    const toggle = () => {
        /*api.start({
            from: {opacity: hover ? 0.5 : 1},
            to: {opacity: hover ? 1 : 0.5},
            reverse: hover
        })*/
        setHover((hover) => !hover)
    }

    return(
            <animated.button className={`bg-blue-500 ${className}`} onClick={actionEvent} onMouseEnter={toggle} onMouseLeave={toggle}
                             style={{
                opacity

            }}>
                ()
            </animated.button>
    )
}

