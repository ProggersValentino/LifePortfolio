/*The purpose of this is to store all data to make up a project*/
import tantrum from '../../assets/tANTrumMain.png'
import NDMRCover from "../../assets/NDMRCover.png"
import tortalWelfareCover from "../../assets/TortalWelfareCover.png"
import gngImg from '../../assets/RR_Header.jpg'
import SNImg from "../../assets/ScratchNetBanner.png"
import RR_powerUpsGif from '../../assets/gifs/Steam page Gif(powerups and end screen).gif'
import RR_verticalPost from '../../assets/RR_verticlePoster.png'

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
    contributions:["Developed and integrated combat abilities using the given animations",
        "Developed Player Combat",
        "Created an Arena Event System",
        "Made designer-friendly tooling to assist with balancing game mechanics",
        "Worked with programmers to create a code architecture design"],
    outcomes:["This project was my first experience working in C++ with Unreal Engine, allowing me to expand my technical skill set. " +
    "Additionally, it was the first melee-based game I developed, providing valuable insight into how titles like God of War create a satisfying gameplay experience behind the scenes. " +
    "Roman Rumble was also the first project I contributed to that was released on Steam, giving me hands-on experience in publishing a game for the world to see and play."],
    path: "/project/roman-rumble",
    title: "Roman Rumble",
    thumbnailPic: gngImg,
        displayURIs: [{
            linkType: "img",
            link: gngImg
        },
            {
                linkType: "yt",
                link: "YPE6fHLPLpU"
            }

        ],
    sections:
        [{
            pid: 1,
            title: "About Roman Rumble",
            introP: "Roman Rumble is a round-based close combat game that combines Roman gladiator grandeur with WWE-style showmanship. " +
                "The player takes on the role of a gladiator who must win over the crowd through intense battles against their foes in an all-out gladiator brawl. " +
                "During each round, the crowd may throw items or power-ups to the player if they have impressed them enough. " +
                "The goal is to survive five increasingly difficult rounds of combat. " +
                "My responsibilities included developing the player and their mechanics while learning C++ for the first time.",
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
        team:["Peter Erbeni"],
        tags:{
            roleTag: ["Programmer", "Producer"],
            projectTag: ["University"],
            techTags: ["Unity", "PC"],
            skillTags: ["C++", "Socket Programming", "Multi-threading", "PC", "Unity", "Git", "Package", "Game Networking", "Bit Manipulation", "Low-level",
            ],
        },
        contributions:["Integrated and built custom DLLs into a unity game",
            "Incorporated a client-hosted listen server architecture",
            "Designed and integrated UDP packet-based systems using C++ socket programming to facilitate reliable connection like packet acknowledgement and delta compression",
            "Debugged and maintained DLL code through Visual Studio Debugger"],
        outcomes:["This was my first exposure to networking concepts for games in a low-level environment, providing an opportunity to expand my technical skill set in C++. " +
        "By the end of the project, I had significantly solidified my C++ experience and gained a deeper understanding of managing both the stack and heap effectively. " +
        "Additionally, I learned the basics of multi-threading and techniques for making code thread-safe to prevent deadlocks, data corruption, and inaccuracies. " +
        "Finally, the project gave me a comprehensive understanding of how game networking is integrated across systems to ensure reliable connections."
        ],
        path: "/project/scratchnet",
        title: "ScratchNet",
        thumbnailPic: SNImg,
        displayURIs: [{
            linkType: "img",
            link: SNImg
        },
            {
                linkType: "yt",
                link: "FsBN_Iy5CbY"
            },
        ],
        sections:
            [{
                pid: 1,
                title: "About",
                introP: "ScratchNet is a custom networking package developed in C++ that can be integrated into Unity to connect 2–4 players over a local network developed over the course of 6 weeks. " +
                    "It uses socket programming to manage UDP packets for both client and server communication, following a client-hosted listen server architecture. " +
                    "In this setup, one client hosts the session as the server while other clients join, similar to implementations seen in games like Peak and Repo. " +
                    "The system includes packet acknowledgment, CRC checking, delta packet compression, serialization, and client/server synchronization, enabling reliable communication between all players.",
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
        contributions:["Created and implemented three mini-games and three sub-mini-games",
            "Integrated a local database into the game to store and retrieve player data between sessions and scenes",
            "Developed a tutorial system for player onboarding",
            "Implemented a scene transition system",
            "Managed the team using project management tools like Youtrack and delegated tasks across disciplines to ensure completion"],
        outcomes:["The outcomes of this project included learning how to incorporate mini-games within a main game, as well as implementing proper scene management for the first time. " +
        "This involved manually managing the loading and unloading of multiple active scenes to maintain a proper structure. " +
        "Additionally, I learned how to integrate a local database into a game to store and retrieve key data, such as player gold, that needed to persist across scenes and sessions. " +
        "Lastly, this project provided my first real experience in a producer role, managing a team, delegating tasks, and ensuring their completion while guiding the overall direction of the game."
        ],
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
                introP: "Turtle Welfare is an isometric point-and-click game featuring a variety of simple mini-games that teach players about turtles through interactive experiences. " +
                    "Players can take control of both a conservation ranger and a sea turtle, switching between the two perspectives. " +
                    "Mini-games completed in one perspective positively impact the other, reducing the difficulty and creating a connected, symbiotic gameplay experience",
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
        contributions:["Created a custom path generation system using splines",
            "Designed the initial VR concept",
            "Integrated Event Bus and Message Bus patterns into the core architecture",
            "Applied Single Responsibility and Interface Segregation SOLID principles within the core architecture",
            "Voice-acted the main NPC character",
            "Implemented the main mechanic allowing the player to shrink and unshrink onto towers",
            "Developed a basic enemy wave system",
            "Implemented a tutorial system for player onboarding"
        ],
        outcomes:["This project strengthened my foundational understanding of SOLID principles in code architecture, particularly Single Responsibility and Interface Segregation, while also improving my implementation of the Event Bus and Message Bus patterns using static utility events. " +
        "The project was also showcased at the QUT Open Day and Immersive Festival, where we had a dedicated section to present our game to prospective university students and industry professionals."
        ],
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
                introP: "tANTrum is a VR tower-defense game where you play as a ghost tasked with protecting your best friend, a living picnic basket named Basko, from swarms of hungry ants. " +
                    "You defend Basko by placing towers and actively participating in the action through repairing broken towers and using a personal weapon to aid in the defense. " +
                    "The game was developed in Unity and deployed as a standalone VR experience, eliminating the need for cables."
                ,
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
        contributions:["Implemented a Task System tool to create a structured MR training experience",
            "Developed a rope algorithm using Verlet integration to simulate realistic rope behavior and interactions",
            "Created a Questionnaire System to assess players during the MR training experience",
            "Implemented an Email Reporting System that sent trainers a summary of all questions attempted by the player and their responses",
            ],
        outcomes:["This project was one of my first Mixed Reality projects developed during my time at Motion Curve. It taught me the importance of balancing custom development with the use of existing packages. " +
        "Previously, I believed that using external packages limited learning and control, but this experience showed me that when time and efficiency are crucial, leveraging reliable packages can be the smarter choice. " +
        "It also enhanced my ability to manage time and make informed technical decisions.",

            "Lastly, this project strengthened my problem-solving skills by teaching me how to systematically break down complex problems into smaller, more achievable tasks. " +
            "Before this, my approach relied heavily on adapting tutorial-based systems, but through this experience, I learned to independently simplify and design efficient solutions."],
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
                introP: "Nitro Sibir Development: Charging Mixed Reality is a training module designed to teach miners the standard operating procedures for charging and detonating walls. " +
                    "Throughout the MR experience, players are tested on their understanding of various procedures they learned beforehand using multiple-choice, short-answer, and terminology-matching questions. " +
                    "After completing the module, a report is automatically sent to their trainer’s email, detailing each question attempted and the player’s responses.",
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