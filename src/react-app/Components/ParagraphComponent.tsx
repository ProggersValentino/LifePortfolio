import "./ComponentsCSS/paracomp.css"


export function DefaultParagraph({para}: {para?: string})
{
    return (
        <p>{para}</p>
    )
}

export function SmallSideParagraph({para}: {para?: string}) {
    return (
        <div className={"sidePara"}>
            <p>{para}</p>
        </div>

    )
}