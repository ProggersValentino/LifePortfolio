/*The purpose of this is to store all data to make up a project*/
import tantrum from "../Projects/tantrum/tANTrumMain.png"
import gngImg from "../Projects/GritNGlory/gngImg.png"

export class ProjectInfo{

}

/*make sure to always export data so it can be called without it will error */
export const projects = [
    {
    id: 1,
    tags:{
        roleTag: ["Programmer", "Producer"],
        projectTag: ["GoldenChild", "University"]
    },
    path: "/proj/GNG",
    title: "Grit n Glory",
    thumbnailPic: gngImg,
    paragraphs:
        [{
            pid: 1,
            p: "dsdsa"
        },
            {
                pid: 2,
                p: "dasd"
            }]
},
    {
        id: 2,
        tags:{
            roleTag: ["Producer"],
            projectTag: ["GoldenChild", "University"]
        },
        path: "/proj/TortalWelfare",
        title: "Tortal Welfare",
        thumbnailPic: tantrum,
        paragraphs:
            [{
                pid: 1,
                p: "dsdsa"
            },
                {
                    pid: 2,
                    p: "dasd"
                }]
    },
    {
        id: 3,
        tags:{
            roleTag: ["Programmer", "Voice Actor"],
            projectTag: ["GoldenChild", "University", "VR"]
        },
        path: "/proj/tANTrum",
        title: "tAntrum",
        thumbnailPic: tantrum,
        paragraphs:
            [{
                pid: 1,
                p: "figma"
            },
                {
                    pid: 2,
                    p: "well put paragraph"
                }]
    }
]

export const projectTags = ["University", "Motion Curve", "Game Jams", "VR", "GoldenChild"]

export const roleTags = ["Programmer", "Producer", "Voice Actor"]