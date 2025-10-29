export const brand = {
    name: "Jeff Bass Plumbing",
    logo: {
        src: "/static/logo/img.png",
        alt: "Jeff Bass Plumbing logo",
        hasText: false,
        logoText: "GW"
    },
    years: 17,
    reviews: 14,
    area: "Bucks County",
    address: "Warminster, PA",
    phone: {
        url: "+12154895339",
        display: "(267) 549-1184"
    },

    stats: [
        {
            number: 14,
            title: "Happy Clients",
            symbol: "+"
        },
        {
            number: 17,
            title: "Years Experience",
            symbol: "+"
        },
        {
            number: 4000,
            title: "Projects Completed",
            symbol: "+"
        }
    ],
    testimonials: [
        {
            name: "Ryan McCarthy",
            comment:
                "Called Mike at 8am about a leaking pipe—he answered right away and was at my house by 9:30am. He repaired the leak, checked the water pressure, and made sure everything was running smoothly. Fast, professional, and honest service. 10/10 would recommend!",
            rating: 5,
        },
        {
            name: "K",
            comment:
                "Exceptional work and a deep understanding of his plumbing trade. Mike explained each step of the process while replacing our main water line. Very fair pricing, especially for senior homeowners. Great follow-up and reliable service.",
            rating: 5,
        },
        {
            name: "Kristie Vuocolo",
            comment:
                "We’ve used Mike several times—he replaced our water heater and unclogged our drains. Always professional, knowledgeable, and respectful. Most importantly, he’s honest! We’ve recommended him to friends and family because he truly delivers quality service.",
            rating: 5,
        },
        {
            name: "Bette Steinmetz",
            comment:
                "I had issues with my warranty company not fixing a plumbing leak. Finally, I called Mike directly—he showed up within the hour and fixed it on the spot. Great attitude, fair pricing, and the job was done right the first time. Skip the warranty hassle and call him instead!",
            rating: 5,
        },
        {
            name: "Francesca D'Angelo",
            comment:
                "Mike saved the day! My basement flooded late at night, and he came out immediately to stop the leak and repair the pipe. Super professional, honest, and efficient. Excellent service and great pricing. Highly recommend!",
            rating: 5,
        },
    ]
}
export interface Project {
    heading: string;
    description: string;
    images: {
        src: string;
        alt: string;
    }[];
    size: string;
}
const UNSPLASH_ACCESS_KEY = 'sy2-KEwJFB1PaSHhsYjja78eakzVarGes3O-VcpkmHs';

export const projectsData = [
    {
        heading: "Residential Bathroom Remodel",
        description: "Complete plumbing installation for a new bathroom, including sink, toilet, shower, and modern fixtures.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=modern-bathroom-plumbing&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Modern bathroom with plumbing fixtures",
            },
        ],
        size: "small",
    },
    {
        heading: "Kitchen Sink Replacement",
        description: "Upgraded kitchen sink and faucet with new PEX water lines and garbage disposal installation.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=plumber-kitchen-sink&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Plumber working under kitchen sink",
            },
        ],
        size: "small",
    },
    {
        heading: "Water Heater Installation",
        description: "Installed a 50-gallon gas water heater with expansion tank and pressure relief valve.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=water-heater&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Water heater setup in a utility room",
            },
        ],
        size: "small",
    },
    {
        heading: "Sewer Line Replacement",
        description: "Replaced damaged clay sewer line with PVC piping using trenchless technology for minimal lawn disruption.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=sewer-pipe-excavation&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Sewer line excavation",
            },
        ],
        size: "small",
    },
    {
        heading: "Commercial Pipe Fitting",
        description: "Completed copper pipe installation for a restaurant kitchen with high water demand systems.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=copper-pipes-plumbing&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Copper pipe plumbing installation",
            },
        ],
        size: "small",
    },
    {
        heading: "Emergency Leak Repair",
        description: "Responded to a burst pipe in a residential basement, repaired and insulated the line to prevent future freezing.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=plumber-water-leak&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Plumber fixing water leak in basement",
            },
        ],
        size: "small",
    },
    {
        heading: "Toilet Replacement",
        description: "Removed old inefficient toilet and installed a new dual-flush water-saving model.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=modern-toilet&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Modern toilet installation",
            },
        ],
        size: "small",
    },
    {
        heading: "Outdoor Spigot Installation",
        description: "Installed frost-proof outdoor faucet with shutoff valve for garden hose access year-round.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=outdoor-faucet-spigot&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Outdoor garden spigot",
            },
        ],
        size: "small",
    },
    {
        heading: "Shower Valve Replacement",
        description: "Replaced faulty shower valve with a thermostatic mixing valve for precise temperature control.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=shower-valve-plumbing&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Shower valve replacement",
            },
        ],
        size: "small",
    },
    {
        heading: "Basement Bathroom Addition",
        description: "Installed new drainage, venting, and water lines for a full basement bathroom addition.",
        images: [
            {
                src: `https://api.unsplash.com/photos/random?query=basement-bathroom-plumbing&client_id=${UNSPLASH_ACCESS_KEY}`,
                alt: "Basement bathroom plumbing installation",
            },
        ],
        size: "small",
    },
];
