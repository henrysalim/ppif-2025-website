const slides = [
    [
        {
            id: 1,
            divisionimg: '/Images/Div-Logo/Administrator.webp',
            img: '/Images/dummy_test/img_01.webp',
            title: 'Zenless Combat',
            description: 'Dynamic in-game combat showcase from Zenless Zone Zero.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 2,
            divisionimg: '/Images/Div-Logo/Bitmap.webp',
            img: '/Images/dummy_test/img_02.webp',
            title: 'Underground Cityscape',
            description: 'A gritty alley view from the underworld city.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Pixel Art', value: 95 },
                { name: 'Animation', value: 80 },
                { name: 'UI Design', value: 83 }
            ]
        },
        {
            id: 3,
            divisionimg: '/Images/Div-Logo/Console.webp',
            img: '/Images/dummy_test/img_03.webp',
            title: 'Main Protagonist',
            description: 'Character portrait from the main storyline.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
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
            img: '/Images/dummy_test/img_04.webp',
            title: 'Urban Combat Zone',
            description: 'A character stands amidst chaos, ready for battle in the urban ruins.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 5,
            divisionimg: '/Images/Div-Logo/Encryptor.webp',
            img: '/Images/dummy_test/img_05.webp',
            title: 'Street Market Scene',
            description: 'Bright lights and vibrant colors dominate this busy market street.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 6,
            divisionimg: '/Images/Div-Logo/Extension.webp',
            img: '/Images/dummy_test/img_06.webp',
            title: 'Cyberpunk Alley',
            description: 'A neon-lit alleyway straight out of a futuristic cityscape.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
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
            img: '/Images/dummy_test/img_07.webp',
            title: 'Team Pose',
            description: 'The squad assembles for a group shot before diving into action.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 8,
            divisionimg: '/Images/Div-Logo/ProjectManager.webp',
            img: '/Images/dummy_test/img_08.webp',
            title: 'Dynamic Duo',
            description: 'Two central characters showcase power and chemistry in this scene.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 9,
            divisionimg: '/Images/Div-Logo/Snapshot.webp',
            img: '/Images/dummy_test/img_09.webp',
            title: 'City Overlook',
            description: 'A sweeping view of the city at dusk with cyberpunk aesthetics.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        }
    ],
    [
        {
            id: 10,
            divisionimg: '/Images/Div-Logo/Website.webp',
            img: '/Images/dummy_test/img_01.webp',
            title: 'Zenless Combat',

            description: 'Dynamic in-game combat showcase from Zenless Zone Zero.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Programming', value: 93 },
                { name: 'Problem Solving', value: 87 },
                { name: 'Version Control', value: 90 }
            ]
        },
        {
            id: 11,
            divisionimg: '/Images/Div-Logo/Null.png',
            img: '/Images/dummy_test/img_02.webp',
            title: 'Underground Cityscape',
            description: 'A gritty alley view from the underworld city.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
            skills: [
                { name: 'Leadership', value: 90 },
                { name: 'Documentation', value: 80 },
                { name: 'Organization', value: 85 }
            ]
        },
        {
            id: 12,
            divisionimg: '/Images/Div-Logo/Null.png',
            img: '/Images/dummy_test/img_03.webp',
            title: 'Main Protagonist',
            description: 'Character portrait from the main storyline.',
            teamMembers: [
                { name: 'Yuzuha', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250716024914' },
                { name: 'Vivian', photo: 'https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250423003356' }
            ],
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
    //         img: '/Images/dummy_test/img_07.webp',
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
    //         img: '/Images/dummy_test/img_08.webp',
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
    //         img: '/Images/dummy_test/img_09.webp',
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