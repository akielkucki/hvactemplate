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
        description:
            "Complete plumbing installation for a new bathroom, including sink, toilet, shower, and modern fixtures.",
        images: [
            { src: "/projects/1.jpg", alt: "Modern bathroom plumbing installation" },
            { src: "/projects/2.jpg", alt: "Toilet and sink installation" },
            { src: "/projects/3.jpg", alt: "Shower fixture plumbing" },
            { src: "/projects/4.jpg", alt: "Bathroom tile and pipework" },
            { src: "/projects/5.jpg", alt: "Completed modern bathroom" },
        ],
        size: "small",
    },
    {
        heading: "Kitchen Sink Replacement",
        description:
            "Upgraded kitchen sink and faucet with new PEX water lines and garbage disposal installation.",
        images: [
            { src: "/projects/2.jpg", alt: "Kitchen sink replacement process" },
            { src: "/projects/3.jpg", alt: "PEX water line connection" },
            { src: "/projects/4.jpg", alt: "Faucet installation by plumber" },
            { src: "/projects/5.jpg", alt: "New stainless steel kitchen sink" },
            { src: "/projects/6.jpg", alt: "Completed kitchen plumbing upgrade" },
        ],
        size: "small",
    },
    {
        heading: "Water Heater Installation",
        description:
            "Installed a 50-gallon gas water heater with expansion tank and pressure relief valve.",
        images: [
            { src: "/projects/3.jpg", alt: "Gas water heater installation" },
            { src: "/projects/4.jpg", alt: "Expansion tank and pressure valve setup" },
            { src: "/projects/5.jpg", alt: "Utility room pipe connections" },
            { src: "/projects/6.jpg", alt: "Plumber connecting gas line" },
            { src: "/projects/1.jpg", alt: "Installed water heater system" },
        ],
        size: "small",
    },
    {
        heading: "Sewer Line Replacement",
        description:
            "Replaced damaged clay sewer line with PVC piping using trenchless technology for minimal lawn disruption.",
        images: [
            { src: "/projects/4.jpg", alt: "Sewer line excavation process" },
            { src: "/projects/5.jpg", alt: "PVC sewer pipe installation" },
            { src: "/projects/6.jpg", alt: "Plumber inspecting underground piping" },
            { src: "/projects/1.jpg", alt: "Trenchless sewer repair equipment" },
            { src: "/projects/2.jpg", alt: "Completed sewer line replacement" },
        ],
        size: "small",
    },
    {
        heading: "Commercial Pipe Fitting",
        description:
            "Completed copper pipe installation for a restaurant kitchen with high water demand systems.",
        images: [
            { src: "/projects/5.jpg", alt: "Commercial copper pipe installation" },
            { src: "/projects/6.jpg", alt: "Restaurant plumbing layout" },
            { src: "/projects/1.jpg", alt: "Plumber soldering copper pipes" },
            { src: "/projects/2.jpg", alt: "Industrial pipe fittings" },
            { src: "/projects/3.jpg", alt: "Finished restaurant plumbing system" },
        ],
        size: "small",
    },
    {
        heading: "Emergency Leak Repair",
        description:
            "Responded to a burst pipe in a residential basement, repaired and insulated the line to prevent future freezing.",
        images: [
            { src: "/projects/6.jpg", alt: "Burst pipe repair in basement" },
            { src: "/projects/1.jpg", alt: "Plumber fixing a leaking pipe" },
            { src: "/projects/2.jpg", alt: "Insulating water line" },
            { src: "/projects/3.jpg", alt: "Moisture prevention system setup" },
            { src: "/projects/4.jpg", alt: "Basement plumbing after repair" },
        ],
        size: "small",
    },
    {
        heading: "Toilet Replacement",
        description:
            "Removed old inefficient toilet and installed a new dual-flush water-saving model.",
        images: [
            { src: "/projects/1.jpg", alt: "Plumber removing old toilet" },
            { src: "/projects/2.jpg", alt: "Installing new water-saving toilet" },
            { src: "/projects/3.jpg", alt: "Wax ring and flange setup" },
            { src: "/projects/4.jpg", alt: "Dual-flush button mechanism" },
            { src: "/projects/5.jpg", alt: "Completed modern toilet install" },
        ],
        size: "small",
    },
    {
        heading: "Outdoor Spigot Installation",
        description:
            "Installed frost-proof outdoor faucet with shutoff valve for garden hose access year-round.",
        images: [
            { src: "/projects/2.jpg", alt: "Outdoor faucet installation" },
            { src: "/projects/3.jpg", alt: "Connecting outdoor water line" },
            { src: "/projects/4.jpg", alt: "Wall-mounted frost-proof spigot" },
            { src: "/projects/5.jpg", alt: "Plumber testing outdoor faucet" },
            { src: "/projects/6.jpg", alt: "Completed exterior plumbing setup" },
        ],
        size: "small",
    },
    {
        heading: "Shower Valve Replacement",
        description:
            "Replaced faulty shower valve with a thermostatic mixing valve for precise temperature control.",
        images: [
            { src: "/projects/3.jpg", alt: "Removing old shower valve" },
            { src: "/projects/4.jpg", alt: "Installing thermostatic mixing valve" },
            { src: "/projects/5.jpg", alt: "Shower plumbing adjustment" },
            { src: "/projects/6.jpg", alt: "Testing water pressure and temp" },
            { src: "/projects/1.jpg", alt: "Finished shower valve install" },
        ],
        size: "small",
    },
    {
        heading: "Basement Bathroom Addition",
        description:
            "Installed new drainage, venting, and water lines for a full basement bathroom addition.",
        images: [
            { src: "/projects/4.jpg", alt: "Basement plumbing rough-in" },
            { src: "/projects/5.jpg", alt: "Drainage and vent pipe setup" },
            { src: "/projects/6.jpg", alt: "PEX water line installation" },
            { src: "/projects/1.jpg", alt: "Bathroom framing and pipework" },
            { src: "/projects/2.jpg", alt: "Completed basement bathroom" },
        ],
        size: "small",
    },
];

