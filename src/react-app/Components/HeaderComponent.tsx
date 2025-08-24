import {HorizontalNavBar} from "./VerticalNavBar.tsx";
import "./ComponentsCSS/header.css"
import {HomeTitle} from "./TitleComponent.tsx";

export function HeaderComponent() {
    return(
        <div className={"flex flex-wrap header sticky top-0 "}>
            <header className={"flex flex-wrap"} style={{
            }}>
                <div className={"w-full"}>
                    <a href={"/"} className={""}>Peter Erbeni</a>
                </div>
                <div className={"w-full"}>
                    <HorizontalNavBar />
                </div>

            </header>
        </div>
    )
}