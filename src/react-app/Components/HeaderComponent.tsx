import {HorizontalNavBar} from "./VerticalNavBar.tsx";
import "./ComponentsCSS/header.css"
import {HomeTitle} from "./TitleComponent.tsx";

export function HeaderComponent() {
    return(
        <div className={"pt-3 relative header sticky top-0 "}>
            <header className={"grid grid-cols-3 "} style={{
            }}>
                <div className={"pr-10"}>
                    <a href={"/LifePortfolio/"} className={""}>Peter Erbeni</a>
                </div>
                <div className={""}>
                    <HorizontalNavBar />
                </div>

            </header>
        </div>
    )
}