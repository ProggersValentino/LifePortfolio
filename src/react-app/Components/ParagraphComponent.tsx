import "./ComponentsCSS/paracomp.css"


export function DefaultParagraph({className="", para})
{
    return (
        <p className={`${className}`}>{para}</p>
    )
}

export function SmallSideParagraph({className, para}) {
    return (
        <div className={"sidePara "}>
            <p className={`${className}`}>{para}</p>
        </div>

    )
}