import {type Ref, useEffect, useRef, useState} from "react";
import '../../styles/global.css'
import {projectTags} from "../../lib/data/projectData";
import {roleTags} from "../../lib/data/projectData";
import {animated, useSpring} from "@react-spring/web";


export function TagFilterSearch({projectfilterTags, roleFilteredTags, getterRoles, getterProjects}) {
    const [field, setField] = useState([])

    return(
       <div className={"relative"}>
           <div className={"grid grid-col-2"}>
               <ExtractTags title={"Project Filters"} tagSet={projectTags} tags={projectfilterTags} getterTags={getterProjects}/>
               <ExtractTags title={"Role Filters"} tagSet={roleTags} tags={roleFilteredTags} getterTags={getterRoles}/>
           </div>

       </div>


    )
}



function ExtractTags({title, tagSet, tags, getterTags}) {

    const divRef : Ref<any> = useRef(null);

    const [height, setHeight] = useState(0);

    const [isVisible, setVisible] = useState(false)

    const {transform, opacity} = useSpring({
        transform: isVisible ? `translateY(${-height - 10})` : 'translateY(0px)',
        opacity: isVisible ? 1 : 0,
        config: {duration: 200}
    })

    const toggleVisibility = () => {
        setVisible((visible) => !visible)
    }

    const addTagToFilter = (tag : string) => {
        tags(prev => [...prev, tag]);

    }

    /*filter out tags that are already selected for filtering*/
    const filteredActive = tagSet.filter(tag => !getterTags.includes(tag) )

    useEffect(() => {
       if(divRef.current) setHeight(divRef.current.offsetHeight);
    }, []);

    return (
        <div className={"relative"} style={{
            /*overflow: 'hidden',*/
        }}>
            <animated.div onClick={toggleVisibility} className="mb-3 align-middle wood-container-filter z-70 shadow-xl"
             style={{
                zIndex: 999,
                 display: 'flex'
             }}>
                <div className={"wood-container-filter-border"}>
                    <h1>{title} </h1>
                </div>
                <div className={""}>
                    <DisplaySelection selectedTags={getterTags} tagSet={tags}/>
                </div>

            </animated.div>

            <animated.div ref={divRef} className={"wood-dropdown w-full absolute z-60"} style={{
                opacity,
                visibility: !isVisible ? 'hidden' : 'visible',
            }}>
                {filteredActive.map((tag : string) => (
                    <div className="form-check p-1.5">

                        <animated.button className={"w-full left-0"} onClick={() => addTagToFilter(tag)}>
                            {tag}
                        </animated.button>
                    </div>
                ))}

            </animated.div>
        </div>
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
            padding: '10px',
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


