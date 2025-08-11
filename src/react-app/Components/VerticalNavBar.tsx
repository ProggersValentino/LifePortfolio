import {navigationPaths} from "../data/navigationPathingData"
import {animated, useSpring} from "@react-spring/web";
import {type Ref, useEffect, useRef, useState} from "react";
import "./ComponentsCSS/navbar.css"

export function NavBar() {
    const [navOut, setNavState] = useState<boolean>(false)



    return (
        <div style={{
            display: "flex",
        }}>
            <NavBarActivationBtn navState={setNavState} getter={navOut} />

            <NavContent navState={navOut}/>
        </div>

    )
}

export function HorizontalNavBar() {
    return (
        <div style={{
            display: "flex",
            width: "100%",
        }}>
            <nav className="navBarHori">
                <a href={"/projects/"}>Projects</a>
                <a href={"/aboutme"}>About Me</a>

            </nav>
        </div>

    )
}

export function NavBarActivationBtn({navState, getter}){

    /*navOut gets change and set here*/
    const changeState = () => {
        navState((getter:boolean) => !getter);
    }

    /*user clicks button
    *
    * button hides itself
    *
    * Navbar content arises
    * */

    return (
            <animated.button style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                width: '5px',
                height: '5px',
                top: 0,
                left: 0,
                padding: '15px',
                backfaceVisibility: 'hidden',
                transformOrigin: 'center center',
                zIndex: 998,
                color: 'red'
            }} onClick={changeState}>
                <div style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    opacity: getter ? 0 : 1,
                    zIndex: 1,
                }}>
                    |||
                </div>

                <div style={{
                    opacity: getter ? 1 : 0,
                    position: 'absolute',
                    justifyContent: 'center',
                    zIndex: 1,
                }}>
                    X
                </div>
            </animated.button>
        )

}

function NavContent({navState}){

    const elementRef: Ref<any> = useRef(null);

    const [width, setWidth] = useState(0);

    const [springs, api] = useSpring(() => ({
        from: {x: 0 - width},
        /*onRest: {
            /!*when animation finished it makes the navelement disapear*!/
            x: () => changeCss()
        }*/
    }))

   /* const changeCss = () => {
        if(elementRef.current){
            elementRef.style = navState ? "visible" : "hidden"
        }
    }*/

    const popOut = () =>{

        api.start({
            from: {x: 0 - width},
            to: {x: -1},

        })
    }

    const popIn = () =>{
        api.start({
            from: {x: -1},
            to: {x: 0 - width},

        })
    }

    useEffect(() => {
        if(elementRef.current)  setWidth(elementRef.current.offsetWidth)

        if(navState){
            popOut()
        }
        else{
            popIn()
        }
    })

    return(
        <animated.div
            ref={elementRef} style={{
            display: "flex",
            position: 'absolute',
            justifyContent: 'left',
            zIndex: 997,
            backgroundColor: "green",
            height: "100%",
            visibility: "visible",
            padding: 30,
            paddingRight: 60,
            ...springs

        }}>
            <nav className="nav-bar">
                <ul>
                    <li><NavLink to="/" onClick={popIn}>Home</NavLink></li>

                    {/*gets all the project routes from the data set
                {navigationPaths.map(route => (
                    <li><NavLink to={route.path}>{route.pageName}</NavLink></li>
                    ))}*/}

                    <li><NavLink to="/projects" onClick={popIn}>Projects</NavLink></li>

                </ul>
            </nav>
        </animated.div>


        /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to={"/"} end>Home</NavLink>
            <NavLink to={"/proj"} end>Project</NavLink>
        </nav>*/
    )
}
