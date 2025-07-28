import "./ComponentsCSS/titlecomp.css"


export function DefaultTitle({title, className=""})
{
    return (
        <h1 className={`defaultTitle ${className}`}>{title}</h1>
    )
}

export function HomeTitle({title}: {title?: string})
{
    return (
        <header className={"defaultTitle"}>{title}</header>
    )
}

export function CardTitle({title}: {title?: string}){
    return (
        <h1 className={"cardTitle"}>{title}</h1>
    )

}

export function CardTitleCustomClass({title, className}) {
    return (
        <h1 className={className + " cardTitle"}>{title}</h1>
    )
}