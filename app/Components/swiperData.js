const slides = [
    [
        {
            id: 1,
            divisionimg: '/Images/Div-Logo/Administrator.webp',
            img: '/Images/Divisions/Admin.webp',
            title: 'ADMINISTRATOR',
            description: 'Dynamic in-game combat showcase from Zenless Zone Zero.',
            skills: [
                { name: 'Leadership', value: 85 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 95 }
            ]
        },
        {
            id: 2,
            divisionimg: '/Images/Div-Logo/Bitmap.webp',
            img: '/Images/Divisions/Bitmap.webp',
            title: 'BITMAP',
            description: 'A gritty alley view from the underworld city.',
            skills: [
                { name: 'Pixel Art', value: 95 },
                { name: 'Animation', value: 80 },
                { name: 'UI Design', value: 83 }
            ]
        },
        {
            id: 3,
            divisionimg: '/Images/Div-Logo/Console.webp',
            img: '/Images/Divisions/Console.webp',
            title: 'CONSOLE',
            description: 'Character portrait from the main storyline.',
            skills: [
                { name: 'Game Logic', value: 88 },
                { name: 'Debugging', value: 92 },
                { name: 'Optimization', value: 85 }
            ],
        }
    ],
    [
        {
            id: 4,
            divisionimg: '/Images/Div-Logo/Developer.webp',
            img: '/Images/Divisions/Developer.webp',
            title: 'DEVELOPER',
            description: 'A character stands amidst chaos, ready for battle in the urban ruins.',
            skills: [
                { name: 'Leadership', value: 95 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 90 }
            ]
        },
        {
            id: 5,
            divisionimg: '/Images/Div-Logo/Encryptor.webp',
            img: '/Images/Divisions/Encryptor.webp',
            title: 'ENCRYPTOR',
            description: 'Bright lights and vibrant colors dominate this busy market street.',
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 90 }
            ]
        },
        {
            id: 6,
            divisionimg: '/Images/Div-Logo/Extension.webp',
            img: '/Images/Divisions/Extension.webp',
            title: 'EXTENSION',
            description: 'A neon-lit alleyway straight out of a futuristic cityscape.',
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        }
    ],
    [
        {
            id: 7,
            divisionimg: '/Images/Div-Logo/Modul.webp',
            img: '/Images/Divisions/Module.webp',
            title: 'MODULE',
            description: 'The squad assembles for a group shot before diving into action.',
            skills: [
                { name: 'Leadership', value: 92 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 90 }
            ]
        },
        {
            id: 8,
            divisionimg: '/Images/Div-Logo/ProjectManager.webp',
            img: '/Images/Divisions/ProjectManager.webp',
            title: 'PROJECT MANAGER',
            description: 'Two central characters showcase power and chemistry in this scene.',
            skills: [
                { name: 'Leadership', value: 95 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 95 }
            ]
        },
        {
            id: 9,
            divisionimg: '/Images/Div-Logo/Snapshot.webp',
            img: '/Images/Divisions/Snapshot.webp',
            title: 'SNAPSHOT',
            description: 'A sweeping view of the city at dusk with cyberpunk aesthetics.',
            skills: [
                { name: 'Leadership', value: 85 },
                { name: 'Documentation', value: 90 },
                { name: 'Organization', value: 85 }
            ]
        }
    ],
    [
        {
            id: 10,
            divisionimg: '/Images/Div-Logo/Website.webp',
            img: '/Images/Divisions/Website.webp',
            title: 'WEBSITE',

            description: 'Dynamic in-game combat showcase from Zenless Zone Zero.',
            skills: [
                { name: 'Programming', value: 93 },
                { name: 'Problem Solving', value: 87 },
                { name: 'Version Control', value: 90 }
            ]
        },
        {
            id: 11,
            divisionimg: '/Images/Div-Logo/Null.png',
            img: '/Images/Divisions/img_02.webp',
            title: 'Underground Cityscape',
            description: 'A gritty alley view from the underworld city.',
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 12,
            divisionimg: '/Images/Div-Logo/Null.png',
            img: '/Images/Divisions/img_03.webp',
            title: 'Main Protagonist',
            description: 'Character portrait from the main storyline.',
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        }
    ],
    // [
    //     {
    //         id: 13,
    //         divisionimg: '/Images/Div-Logo/Null.png',
    //         img: '/Images/Divisions/img_07.webp',
    //         title: 'Team Pose',
    //         description: 'The squad assembles for a group shot before diving into action.',
    //         teamMembers: [
    //             { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
    //             { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
    //         ],
    //         skills: [
    //             { name: 'Leadership', value: 90 },
    //             { name: 'Documentation', value: 80 },
    //             { name: 'Organization', value: 85 }
    //         ]
    //     },
    //     {
    //         id: 14,
    //         divisionimg: '/Images/Div-Logo/Null.png',
    //         img: '/Images/Divisions/img_08.webp',
    //         title: 'Dynamic Duo',
    //         description: 'Two central characters showcase power and chemistry in this scene.',
    //         teamMembers: [
    //             { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
    //             { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
    //         ],
    //         skills: [
    //             { name: 'Leadership', value: 90 },
    //             { name: 'Documentation', value: 80 },
    //             { name: 'Organization', value: 85 }
    //         ]
    //     },
    //     {
    //         id: 15,
    //         divisionimg: '/Images/Div-Logo/Null.png',
    //         img: '/Images/Divisions/img_09.webp',
    //         title: 'City Overlook',
    //         description: 'A sweeping view of the city at dusk with cyberpunk aesthetics.',
    //         teamMembers: [
    //             { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
    //             { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
    //         ],
    //         skills: [
    //             { name: 'Leadership', value: 90 },
    //             { name: 'Documentation', value: 80 },
    //             { name: 'Organization', value: 85 }
    //         ]
    //     }
    // ],
];

export default slides;