import {HorizontalNavBar} from "./VerticalNavBar.tsx";
import "./ComponentsCSS/header.css"

export function HeaderComponent() {
    return(
        <div className={"header sticky top-0"}>
            <header style={{
            }}>

                <HorizontalNavBar />
            </header>
        </div>
    )
}