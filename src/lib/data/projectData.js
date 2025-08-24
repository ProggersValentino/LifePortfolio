/*The purpose of this is to store all data to make up a project*/
import tantrum from '../../assets/tANTrumMain.png'
import NDMRCover from "../../assets/NDMRCover.png"
import tortalWelfareCover from "../../assets/TortalWelfareCover.png"
import gngImg from '../../assets/gngImg.png'
import CCgif from '../../assets/gifs/ComboSystem_ComboContainer.gif'

/*make sure to always export data so it can be called without it will error */
export const projects = [
    {
    id: 1,
    team:["Peter Erbeni", "Sebastion Poutanen", "Hailey Graham", "Jack May", "Tom Fasham", "Lauchie Sharman", "Parker Laansma", "Yuxuan Zhou"],
    tags:{
        roleTag: ["Programmer", "Producer"],
        projectTag: ["GoldenChild", "University"],
        techTags: ["Unreal Engine", "PC", "Steam"],
        skillTags: ["C++", "Blueprint", "Unreal", "PC", "Steam", "Git", "Gameplay", "Gameplay Tools"],
    },
    contributions:["- \tDevelop and integrated combat abilities using the given animations",
    "-\tDeveloped Player Combat", "-\tCreated an Arena Event System", "-\tMade designer friendly tooling to assist them with balancing game mechanics",
    "-\tWorked with Programmers to create a code architecture design"],
    outcomes:["This project was the first project I worked in C++ with Unreal Engine allowing me to grow my language tech stack. " +
    "Furthermore, this was the first melee-based game I’ve developed so it provided a lot of learning in how melee-based games like God Of War work behind the scenes to deliver that satisfying" +
    " gameplay experience.",
        "Roman Rumble was also the first I’ve contributed in where it was released on steam for the world to see and play giving experience into how to release a game using steam."],
    path: "/project/roman-rumble",
    title: "Roman Rumble",
    thumbnailPic: gngImg,
        displayURIs: [{
            linkType: "img",
            link: gngImg
        },],
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
            uri: [{
                linkType: "img",
                link: ""
            }],
            p: ""
        },
            {
                pid: 2,
                title: "",
                introP: "",
                uri: [{
                    linkType: "img",
                    link: ""
                }],
                p: ""
            },
            ]
},


    {
        id: 1,
        team:["Peter Erbeni", "Aerin Larrazabal", "Alexander Saffigna-Hayes", "Paige Martin"],
        tags:{
            roleTag: ["Programmer", "Producer"],
            projectTag: ["University"],
            techTags: ["Unity", "PC"],
            skillTags: ["C#", "Unity", "SQL", "Database Management", "PC", "Git", "Gameplay", "Gameplay Tools"],
        },
        contributions:["-\tCreated and implemented 3 mini games and 3 sub-mini games",
            "-\tImplemented a local database integration with the game to store and retrieve player data between sessions & scenes",
            "-\tCreated tutorial system for the player tutorial ",
            "-\tscene transition system",
            "-\tManaged team through project management tools and delegating tasks to each discipline for completion"],
        outcomes:["The outcomes from this project was the learning process of incorporating mini games inside a main game as well as the first time implementing proper scene management " +
        "with having more than one scene active manually managing the loading and unloading of them to ensure proper structure is maintained. " +
        "Furthermore, I learn how to integrate a local database a game where key data that needs to be persistent across scenes and sessions like player gold can be stored and retrieved.",
            "Lastly, this project was the first real exposure to doing a producer role in managing a team, " +
            "delegating tasks to them and ensuring that those tasks get done directing the overall direction of the game and how it should be completed. "],
        path: "/project/tortal-welfare",
        title: "Tortal Welfare",
        thumbnailPic: tortalWelfareCover,
        displayURIs: [{
            linkType: "yt",
            link: "_RV8bCqdR3s"
        },],
        sections:
            [{
                pid: 1,
                title: "About Tortal Welfare",
                introP: "Turtle Welfare is an isometric, point and click game with a variety of simple minigames that the player experiences while learning about turtles. " +
                    "Players have the option to take control of both a conservation ranger and a sea turtle, " +
                    "switching between them, as the minigames completed in one perspective positively affect the other, making the difficulty of these minigames easier for the other perspective. ",
                uri: [{
                    linkType: "img",
                    link: ""
                }],
                p: "The primary goal of the game is to diminish the difficulty bar to 0 ending the game but allowing the player to continue playing if they so desire. " +
                    "This was to fulfill the client brief in communicating the importance of turtles and their conservation to school aged students in the grades 4 to 6"
            },

                ]
    },


    {
        id: 1,
        team:["Peter Erbeni", "Hailey Graham", "Sebastion Poutanen", "Eden Takenaka"],
        tags:{
            roleTag: ["Programmer", "Voice Actor"],
            projectTag: ["University", "GoldenChild", "VR"],
            techTags: ["Unity", "Meta Quest", "Meta Store", ],
            skillTags: ["C#", "Unity", "Voice Acting", "Virtual Reality", "Git", "Gameplay", "Gameplay Tools"],
        },
        contributions:["-\tCreated custom path generation system using splines",
            "-\tDesigned initial VR concept",
            "-\tIncorporated Event Bus and Message Bus Pattern in core architecture",
            "-\tIncorporated Single Responsibility and Interface Segregation SOLID principles in core architecture",
            "-\tVoice acted the main NPC character",
            "-\tImplemented main mechanic of player shrinking and unshrinking onto towers",
            "-\tImplemented basic enemy wave system",
            "-\tImplemented Tutorial System for tutorialization"],
        outcomes:["This project strengthened my basic skills to SOLID principles in " +
        "the code architecture more specifically on the Single Responsibility and Interface Segregation as well as continual improvement in my event bus / message bus pattern with static utility events.",
            "The project also achieved a showcase spot at QUT Open Day and Immersive festival where we had a dedicated section to show our game to upcoming university students and industry professionals"],
        path: "/project/tantrum",
        title: "tANTrum",
        thumbnailPic: tantrum,
        displayURIs: [{
            linkType: "yt",
            link: "_pve7hGCJBk"
        },
            {
                linkType: "img",
                link: tantrum
            },],
        sections:
            [{
                pid: 1,
                title: "About tANTrum",
                introP: "tANTrum is a VR game centred around tower-defence like gameplay where you’re a ghost that must protect your best friend (a living picnic basket called Basko) from being eaten alive from hungry ants. " +
                    "You defend Basko by placing down towers but also get involved in the action through continual maintenance of towers when they break down and a personal weapon to help the defence. " +
                    "This game was developed in Unity and deployed on the headset alone so that there was no requirement for cables.",
                uri: [{
                    linkType: "img",
                    link: ""
                }
                    ],
                p: ""
            },
                {
                    pid: 1,
                    title: "Process",
                    introP: "This project was part of the IGB388: Immersive Environments subject at QUT where we were tasked with creating an engaging VR game with an interactable NPC. " +
                        "For the first part of development each of our team members had to make a prototype of a VR game that can be completed by the end of the semester. " +
                        "I of originally designed the concept for tANTrum.",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "Early Concept Development",
                    introP: "When developing our ideas we were instructed to create a design document and ensure that our idea made use of VR affordances and do research of existing VRs to get an idea of " +
                        "whats possible and ensure that the idea separates itself from what other competitors are doing.",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: "I had the initial idea of making a tower defence where the player could shrink down and possess each tower and control it from aiming " +
                        "to firing and towers that were not possessed had basic AI to further encourage the need to possess a tower. With some research, the idea seemed to be a " +
                        "strong choice as most of the VR tower defence games had the player get involved with in the action but its only in the form of “god mode” but they play more a" +
                        " support role rather than a key role in the defence. The original idea for the NPC was that it was a friend (a living human being) that sells you the towers over a " +
                        "stall and gives you encouraging words. " +
                        "This shown through the below content of the early design"
                },
                {
                    pid: 1,
                    title: "Prototyping Concept",
                    introP: "After completion of the design document, the next step was creating a prototype of our idea with the goal of implementing its core loop. " +
                        "There were 4 core components that are needed for prototype being, enemy pathing & tower placement generation, Player shrinking and possessing towers, enemy waves, and NPC. " +
                        "Because I’m not an artist, all " +
                        "the art was sourced from an AI 3D asset generation site to meet the needs of the theme but is all temporary until our artist came on to make the assets",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "Enemy Pathing & Tower Placement",
                    introP: "For the first component of enemy pathing and tower placement, I opted for Unity’s Spline package due to being able to replicate a similar experience to Bloons Tower Defence " +
                        "where the enemies follow a spline path around the map. The issue now was to how to change the pathing to the player’s need, which after some thought " +
                        "I designed a system where the player had to place pegs down into the ground and once happy the player would confirm, and a spline would generate based on the placement of those points. " +
                        "The tower placement was a little trickier as it involved some math when calculating the offset point based off the spline location but was eventually solved using cross product. " +
                        "For the sake of prototype, " +
                        "the enemy pathing was hard laid out with the expectation the implementation of the player being able to make it will come in the later development stage.",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "Enemy Waves",
                    introP: "For the enemy waves, I setup a system for the enemy that would connect to the spline on spawn and apply a " +
                        "translation calculation on every update tick to move them across the spline. " +
                        "For spawning I used an asynchronous method where once spawned an enemy it would await x number of seconds before spawning another until the pool of enemies had been exhausted.",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "Player Shrinking & Possessing Tower",
                    introP: "Next the player shrinking and possessing a tower. This was an interesting case being that the player needs to able to shrink down and still be able to interact with the world around them. " +
                        "After some research I found that shrinking the player was the best approach in regards for simplicity and efficiency, " +
                        "but after implementing it I came across a bug where the controllers wouldn’t show when shrunk and upon further investigation found that shrinking " +
                        "the player past 0.005 makes the controllers not visible and fixed it by adjusting the scale value to its limit being 0.005.",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "NPC",
                    introP: "Lastly, the NPC, originally the idea was that it would be a human manning the stall to sell you items, however, because the end goal I wanted if this game got " +
                        "selected was for it to run standalone on the headset, I feared that a human character model would be to expensive considering the role it played in the game was not so focal." +
                        " So, after some thought I decided to change the NPC to a living picnic basket which fixes both problems simultaneously where the poly count would be significantly less and it played a more " +
                        "focal role in the game being the objective to protect allowing a lot more interaction options between the player and it. ",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "Voice Acting",
                    introP: "Because this was a prototype, it was allowed to have multiple UI boards placed around the scene to instruct the player what to do which was easy sure " +
                        "but because for this game there needed some explanation the scene would be very polluted with UI boards. " +
                        "The solution was that I opted to create a tutorial where the player would feed Basko a food item and he would explain how the game worked. ",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: "This of course meant that Basko needed a voice to tell the player about the game which I wanted him to have a mischievous fun type of personality. " +
                        "Using AI voiceovers was a possibility but I did not think it would suit for the style of personality and it’s not as fun. " +
                        "Which then left the fun option of doing the voice acting myself, which was infinitely more fun and freer, so to match " +
                        "the personality of mischievous and fun I put a butchered voice impression of Master Yoda mixed with Golem which turned out amazing (funny bad type) and suited the Basko as a character. "
                },
                {
                    pid: 1,
                    title: "Further Development",
                    introP: "After submitting the prototype, we worked in groups to develop one of the VR experiences generated by each team member. " +
                        "This was even a hard choice for the teaching team as they gave us two options, one being mine and the other Sebastion’s to which meant we needed to deliberate. " +
                        "The team discussed and concluded that while tANTrum was " +
                        "ambitious with the workload to bring it to a polished state, the project would align better with a showcase experience. ",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 1,
                    title: "Polished Product",
                    introP: "Over the course of the second half the semester, my team polished and added content to better serve the game. One of the big changes that occurred was that the player would not possess the " +
                        "towers to take control of them but rather maintain and fix them when they break down and provide the player with " +
                        "their own personal weapon that can be used in “god mode” and when shrunk down onto the tower. " +
                        "This was to simplify the development process as well as " +
                        "solved a design problem giving more purpose to why the player would shrink and unshrink from each tower and not just stay shrunk. ",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: "Furthermore, instead of having a physical store, the building would be adjusted to have a wrist menu that the player can easily access. " +
                        "This change was instanced because at that point there was a lot of moving that the player had to do which wasn’t necessary to the " +
                        "gameplay so Sebastion suggested that a build menu on the player’s wrist would reduce the amount of moving the player needed to do getting into the action faster."
                },
                {
                    pid: 1,
                    title: "",
                    introP: "With these changes established, I worked on the strawberry catapult which incorporated a state machine for being dormant, active " +
                        "and broken as well as lifetime until it broke making the player shrink down to fix it.",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: "Furthermore, I recorded more voicelines for a proper tutorial Sebastion would implement into the game as " +
                        "at that point in time it was just a bunch of voicelines that could be activated in any order. "
                },
                {
                    pid: 1,
                    title: "Final Game",
                    introP: "Here is a video showcasing the result of the tANTrum. Overall, " +
                        "this project was the most fun I’ve ever had and felt it challenged my skillset of the SOLID principles and use of " +
                        "the publish-listen pattern in the code architecture.",
                    uri: [{
                        linkType: "yt",
                        link: "_pve7hGCJBk"
                    }],
                    p: ""
                },
            ]
    },
    {
        id: 1,
        team:["Peter Erbeni", "Motion Curve Colleagues"],
        tags:{
            roleTag: ["Programmer"],
            projectTag: ["University", "Motion Curve", "GoldenChild"],
            techTags: ["Unity", "MR", "Meta Quest"],
            skillTags: ["C#", "Unity", "MR", "Git", "Gameplay", "Gameplay Tools"],
        },
        contributions:["-\tImplemented Task System tooling to create a structured MR training experience",
            "-\tImplemented a rope algorithm using Verlet integration to simulate a rope and rope like interactions",
            "-\tImplemented a Questionnaire system to properly test players that go through the MR experience",
            "-\tImplemented an Email Reporting system that sent an email to the trainer of all the questions that the player attempted",
            ],
        outcomes:["This project was one of my first Mixed Reality projects that I had the privilage to develop while working at Motion Curve. It taught me that" +
        " there is a time and place for creating systems from scratch and just finding packages online to use in projects as before I had some " +
        "stubbornness to where using packages takes away from learning and control over the system you’re trying to " +
        "implement which it does but when you have limited time if the option is there it should be used so this opened my eyes to when packages should be used. " +
            "delegating tasks to them and ensuring that those tasks get done directing the overall direction of the game and how it should be completed. ",

        "Lastly, it taught me valuable skills how to properly break down a problem step by step and significantly simplifying the problem to be easily" +
        " achieve as before my reliance of creating custom systems was based off tutorial videos of a similar implementation and then I would adjust it."],
        path: "/project/NDMR",
        title: "Nitro Development Charging Mixed Reality",
        thumbnailPic: NDMRCover,
        displayURIs: [{
            linkType: "yt",
            link: "xiHoU_ehcok"
        }],
        sections:
            [{
                pid: 1,
                title: "About Nitro Mixed Reality",
                introP: "",
                uri: [{
                    linkType: "img",
                    link: ""
                }],
                p: "Nitro Sibir Development Charging Mixed Reality is a training module to teach and train miners the standard operating procedures " +
                    "of how to charge a wall and blow it up. Throughout the MR experience, players would be tested on their knowledge of certain procedures" +
                    "they would've learnt before going on the MR using either multiple choice, short response or terminolgy matching. After they completed the module" +
                    "they then had to send a report to their trainer's email which outlined all the questions they completed and what their answers were for each one."
            },
                {
                    pid: 2,
                    title: "Task System",
                    introP: "the first problem that needs to be solved was having a task system to define each task and execute all tasks in a particular " +
                        "order while also executing the correct audio at the correct time. Breaking it down into a step-by-step process I found a common pattern within each task that " +
                        "there is an entry stage to introduce the task, middle stage to listen for completion of that task and end to do an outro and move onto the next task. Building off that, " +
                        "I found that the best solution involved using scriptable objects with a task manager to manage the order and execution of each task",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: ""
                },
                {
                    pid: 2,
                    title: "Rope Physics",
                    introP: "With the module centred around a hose like piece of equipment it was a requirement from the client that the player needed to interact and use a rope, granted this is " +
                        "in mixed reality with no controllers. This became a more prominent issue as there are not many resources available of making an interactive rope and the resources that didn’t fit " +
                        "the requirements for the problem. " +
                        "There were 3 different methods I tried to settle onto the one that worked best.",
                    uri: [{
                        linkType: "yt",
                        link: "xiHoU_ehcok"
                    }],
                    p: "So first I found the simplest way to do it in Unity which was to add in a mesh created by the artists " +
                        "and use the hinge component on each bone of the skeleton restricting its movements. This method was the most unstable where the rope would stretch " +
                        "and distort itself in any way possible at any interaction with the environment or the player. " +
                        "Obviously, this was not a good solution"
                },
                {
                    pid: 1,
                    title: "",
                    introP: "After some research, there is an apparent equation called verlet integration where its used simulate motion of particles and their trajectories.\n" +
                        "The second method uses Meta’s Cryptic Cabinet rope, where they used a modified version of verlet integration with a skeletal " +
                        "mesh rope to create a dangling rope to use. Once looking at the code and integrating myself, the rope turned out a lot smoother than " +
                        "the first where when interacting with the player it stayed put. Although this method fell through when it interacted with environment like " +
                        "walls or floors which it did not behave consistently.\n",
                    uri: [{
                        linkType: "img",
                        link: ""
                    }],
                    p: "The third method resorted to integrate and modifying the version of verlet integration meta used " +
                        "and build a customised version of the rope where I spawned box collisions on a set number of nodes spaced out evenly acting " +
                        "as the grab points for the player to grab onto. " +
                        "This method turned out to be the best as both interactions with the environment and player consistent as shown in the video below."
                },
                {
                    pid: 4,
                    title: "Questionaire",
                    introP: "Another key requirement from the client was that they wanted to test leaner’s knowledge through a questionnaire to ensure they understood what was being taught to them. " +
                        "Breaking down the problem, the pattern seemed familiar with the task system where there was an entry being a new question popping up, middle being listening for the question to be " +
                        "answered and in cases for multiple choice checking if its right or wrong, and exit being clean up for next question.",
                    uri: [{
                        linkType: "yt",
                        link: "_KFwkR_F-gQ"
                    }],
                    p: "Recognizing the pattern I incorporated something similar with scriptable objects " +
                        "to handle the setup of individual questions and a question manager to manage the order and execution of each question."
                },
                {
                    pid: 2,
                    title: "Email Sender",
                    introP: "Lastly, the client wished to have the results sent through an email attached with a excel report the progress leaners made which " +
                        "included data such as how many times it took to answer a question, they’re answer for each question etc. ",
                    uri: [{
                        linkType: "yt",
                        link: "_Yp21omX-kg"
                    }],
                    p: "This was solved using some NPM packages and SMTP2Go as the main API to send it. This also required me to create a emailer which " +
                        "would store each attempt at a question in the given report format requested by the client. "
                },
                ]
    },
]

export const projectTags = ["University", "Motion Curve", "Game Jams", "VR", "GoldenChild", "Mixed Reality"]

export const roleTags = ["Programmer", "Producer", "Voice Actor"]