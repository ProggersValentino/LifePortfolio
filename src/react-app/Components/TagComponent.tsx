
export function Tag({tags}: {tags: Array<any>})
{
    return(

        <div>{tags?.map(tag => (<>{tag} </>))}</div>
    )
}