import { useState } from "react";
import {Col, Form} from 'react-bootstrap'
import {projectTags} from "~/data/projectData";
import {roleTags} from "~/data/projectData";
import {animated} from "@react-spring/web";


export function TagFilterSearch({projectfilterTags, roleFilteredTags, getterRoles, getterProjects}) {
    const [field, setField] = useState([])

    return(
       <>
           <ExtractTags title={"Project Filters"} tagSet={projectTags} tags={projectfilterTags} getterTags={getterProjects}/>
           <ExtractTags title={"Role Filters"} tagSet={roleTags} tags={roleFilteredTags} getterTags={getterRoles}/>

       </>


    )
}



function ExtractTags({title, tagSet, tags, getterTags}) {


    const addTagToFilter = (tag : string) => {
        tags(prev => [...prev, tag]);

    }

    /*filter out tags that are already selected for filtering*/
    const filteredActive = tagSet.filter(tag => !getterTags.includes(tag) )


    return (
        <>
            <div className="mb-3"
             style={{
                 display: 'flex'
             }}>
                <h1>{title + ":"} </h1>
                <DisplaySelection selectedTags={getterTags} tagSet={tags}/>
            </div>

            {filteredActive.map((tag : string) => (
                <div className="form-check">

                    <animated.button onClick={() => addTagToFilter(tag)}>
                        {tag}
                    </animated.button>
                </div>
            ))}
        </>
    )
}

/*using the getter var from the root parent generate a filter button for each tag from the getter var*/
export function DisplaySelection({selectedTags, tagSet}){

    const hasValues = () => {
        if (selectedTags.length > 0) {
            return selectedTags.map(tag => (
                <FilterButton tagName={tag} setterAction={tagSet}/>
            ))
        }
    }

    return(
        <div style={{
            display: 'flex',
            gap: '10px',
            paddingLeft: '10px',
            paddingRight: '10px'
        }}>
            { hasValues() }

        </div>

    )
}

/*individual filter button comp*/
export function FilterButton({tagName, setterAction}){

    const deleteBtn = () => {
        setterAction(prev => prev.filter(tag => tag !== tagName))
    }


    return(
        <animated.button onClick={deleteBtn} style={{
            display: 'flex',
            paddingLeft: '10px',
            paddingRight: '10px',
            border: '1px solid red',
            borderRadius: '10px'
        }}>
            <div>
                {tagName}
            </div>

            <div
            style={{
                paddingLeft: '5px',

            }}>
                x
            </div>
        </animated.button>
    )
}


