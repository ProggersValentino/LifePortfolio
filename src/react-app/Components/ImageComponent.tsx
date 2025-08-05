import "./ComponentsCSS/imagecomp.css"
import {useState} from "react"

export function DefaultImg({source, alt, divclassName = ""}) {
    return(
        <div className={divclassName} style={{
            overflow: "hidden"
        }}>
            <img className={"object-fill object-center"} src={source.src} alt={alt}></img>
        </div>
    )
}
