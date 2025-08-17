/*The purpose of this is to store all data to make up a project*/
import tantrum from '../../assets/tANTrumMain.png'
import gngImg from '../../assets/gngImg.png'
import CCgif from '../../assets/gifs/ComboSystem_ComboContainer.gif'

/*make sure to always export data so it can be called without it will error */
export const projects = [
    {
    id: 1,
    team:["Peter Erbeni", "Sebastion P", "Hailey Graham", "Jack May", "Tom F", "Lauchie S", "Parker", "Yuxuan Z"],
    tags:{
        roleTag: ["Programmer", "Producer"],
        projectTag: ["GoldenChild", "University"],
        techTags: ["Unreal Engine", "PC", "Steam"],
        skillTags: ["C++", "Blueprint", "Unreal", "PC", "Steam", "Git", "Gameplay", "Gameplay Tools"],
    },
    path: "/project/roman-rumble",
    title: "Roman Rumble",
    thumbnailPic: gngImg,
    sections:
        [{
            pid: 1,
            title: "About Roman Rumble",
            introP: "Roman Rumble is a round by round close combat game fusing Roman Gladiator Grandure with WWE charm. " +
                "The player plays a Gladiator who must appeal to the crowd through trial of combat where they must battle their" +
                "foes in all out gladiator WWE brawl. " +
                "During each round of combat, the crowd will throw the player items or powerups granted the player has appealed to them enough. " +
                "Once the player wins through surviving 5 rounds of combat where each round gets harder and harder with more enemies" +
                "My responsibilities fell on creating the player and its mechanics while picking up C++ for the " +
                "first time.",
            uri: {
                linkType: "img",
                link: ""
            },
            p: ""
        },
            {
                pid: 2,
                title: "",
                introP: "",
                uri: {
                    linkType: "img",
                    link: gngImg
                },
                p: ""
            },
            {
                pid: 3,
                title: "Combo System",
                introP: "One the main problems needed to be solved was creating a combo system to have some clear variety " +
                    "in combat while being accessible and easily modifiable for designers",
                uri: {
                    linkType: "img",
                    link: CCgif
                },
                p: "To make this this happen I created a custom UObject which was setup with all the necessary settings " +
                    " the designers would need to modify each combo type like main ability to activate, impact freeze upon hitting enemies " +
                    "etc. Then within the player is the main combo chain for the designers to modify to their desire"
            }]
},


    {
        id: 2,
        tags:{
            roleTag: ["Producer"],
            projectTag: ["University"]
        },
        path: "/project/tortal-welfare",
        title: "Tortal Welfare",
        thumbnailPic: tantrum,
        sections:
            [{
                pid: 1,
                title: "Subtitle",
                introP: "",
                uri: {
                    linkType: "img",
                    link: ""
                },
                p: "Roman Rumble is a round by round close combat game fusing Gladiator Grandure with WWE charm." +
                    "My responsibilities fell on creating the player and its mechanics while picking up C++ for the " +
                    "first time."
            },
                {
                    pid: 2,
                    title: "Subtitle",
                    introP: "One the main problems needed to be solved was creating a combo system to have some clear variety " +
                        "i",
                    uri: {
                        linkType: "img",
                        link: ""
                    },
                    p: "dasd"
                }]
    },


    {
        id: 3,
        tags:{
            roleTag: ["Programmer", "Voice Actor"],
            projectTag: ["GoldenChild", "University", "VR"]
        },
        path: "/project/tantrum",
        title: "tAntrum",
        thumbnailPic: tantrum,
        sections:
            [{
                pid: 1,
                title: "Subtitle",
                introP: "",
                uri: {
                    linkType: "img",
                    link: ""
                },
                p: "Roman Rumble is a round by round close combat game fusing Gladiator Grandure with WWE charm." +
                    "My responsibilities fell on creating the player and its mechanics while picking up C++ for the " +
                    "first time."
            },
                {
                    pid: 2,
                    title: "Subtitle",
                    introP: "One the main problems needed to be solved was creating a combo system to have some clear variety " +
                        "i",
                    uri: {
                        linkType: "img",
                        link: ""
                    },
                    p: "dasd"
                }]
    },
    {
        id: 3,
        tags:{
            roleTag: ["Programmer", "Designer"],
            projectTag: ["GoldenChild", "Motion Curve", "Mixed Reality"]
        },
        path: "/project/NDMR",
        title: "Nitro Development MR",
        thumbnailPic: tantrum,
        sections:
            [{
                pid: 1,
                title: "",
                introP: "",
                uri: {
                    linkType: "img",
                    link: ""
                },
                p: "Nitro Sibir Development Charging Mixed Reality was a project I had the privillage to work while at" +
                    " Motion Curve. This was a training module to teach and train miners the standard operating procedure " +
                    "to charge a wall and blow it up. My responsibilities resided with integrating a storyboard & manual " +
                    "into a mixed reality using Unity as the primary engine deploying to Meta Quest Headsets"
            },
                {
                    pid: 2,
                    title: "Rope Physics",
                    introP: "",
                    uri: {
                        linkType: "yt",
                        link: "xiHoU_ehcok"
                    },
                    p: ""
                },
                {
                    pid: 2,
                    title: "Email Sender",
                    introP: "",
                    uri: {
                        linkType: "yt",
                        link: "_Yp21omX-kg"
                    },
                    p: ""
                },
                {
                    pid: 4,
                    title: "Questionaire",
                    introP: "",
                    uri: {
                        linkType: "yt",
                        link: "_KFwkR_F-gQ"
                    },
                    p: ""
                }]
    }
]

export const projectTags = ["University", "Motion Curve", "Game Jams", "VR", "GoldenChild", "Mixed Reality"]

export const roleTags = ["Programmer", "Producer", "Voice Actor"]