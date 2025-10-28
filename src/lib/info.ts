interface Testimonial {
    name: string;
    comment: string;
    rating: number;
    image?: string;
}
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
            comment: "Called Wes at 8am today and he picked up on the first ring. He was at my place by 945am, repaired by broken AC, and was gone by 11am. He flushed the coil and replaced some of the capacitors. He also provided some guidance on how best to set the thermostat for optimal cooling on my first and second floor. 10/10 would recommend Wes.",
            rating: 5
        },

        {
            name: "K",
            comment: "Excellent work, very well versed in his HVAC craft. Tremendous amount of knowledge and experience. Wes went out of his way to explain what he was doing during the installation of our new Bryant Heat Pump System.  Honest and has a good sense of humor. We would highly recommend his work and his pricing, especially for senior homeowners. Good Followup and Responsive Service.",
            rating: 5
        },
        {
            name: "Kristie Vuocolo",
            comment: "We have used Wes several times - he has replaced our water heater and performed several repairs on our heating system. He is professional, highly knowledgeable and respectful. Most importantly, Wes is honest!! We have recommended him to several friends and family, as we could not be happier with his service!",
            rating: 5
        },
        {
            name: "Bette Steinmetz",
            comment: "I was having such a time, with a warranty company coming out to fix my AC.\n" +
                "Finally I just called Wes, and within minutes he was at my door. Fixed my AC within the hour. Fabulous service nice guy just went to work and got the job done, so I had AIR before the weekend.   Could not ask for better service.\n" +
                "For all of you with WARRANTY service company be very wary , they are not trustworthy  use Wes instead.  Less problems.\n" +
                "Bette Ann Steinmetz",
            rating: 5
        },
        {
            name: "Francesca D'Angelo",
            comment: "G W Acker saved me! My AC broke during a heat wave and GW Acker came out right away. He did an amazing job. It was a tough job but he fixed it! He was very honest, great price and very professional. I will be using him again. I am very happy with the service provided!",
            rating: 5
        }

    ]
}