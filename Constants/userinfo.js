
import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Nandhini Natarajan",
    contact: {
        email: 'NandhiniNatarajan@gmail.com', 
        phone: '(443)-883-9357', 
        countrycode: '+1' 
    },
    socials: [
        { type: 'github', link: 'https://github.com/NandhiniNatarajan1', icon: faGithubAlt },
    ],
    greeting: {
        title: "Hey there, I am Nandhini.",
        subtitle: "I am a motiviated Senior at Dulaney High School with a curious mind. I excel in technical and scientific tasks as well as collaboration and teamworks skills. I think I have a unique mindset and love to contribute to the community! "
    },
    capabilities: [
        
        {
            category: "Software", 
            skills: ["Microsoft Azure"] 
        },
        {
            category: "Technical", 
            skills: ["Autodesk Inventor", "Autodesk CAD", "Microsoft Excel"] 
        },
        {
            category: "Miscellaneous",
            skills: ["American Red Cross CPR and First Aid certified", "American Boating Association License", "Food Handler's Card"]
        }

    ],
    about: {
        //bottom of home page.
        content: "Learn more about me!",
        resume: "/" 
    },
    education: {
        visible: true, 
        educationList: [
            {
                time: ' Aug 2019 - May 2023', 
                title: 'High School Diploma', 
                organization: 'Dulaney High School', 
                description: 'GPA: 3.88, QPA: 5.36' 
            },
            {
                time: ' Aug 2021 - May 2023', 
                title: 'Dual Enrollment', 
                organization: 'Community College of Baltimore County', 
                description: 'GPA: 3.75, Dean\'s List'
            },
        ],
    },
    experience: {
        visible: true, 
        experienceList: [
            {
                company: 'Ritas', 
                position: 'Production Manager', 
                time: 'March 2020 - Current', 
                
            },
            {
                company: 'Coffee and Tea',
                position: 'Barista',
                time: 'February 2021 - June 2022',
                
            },
            {
                company: 'Uber Bagels and Deli',
                position: 'Team Member',
                time: 'June 2020 - January 2021',
                description: ''
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Projects',
    workMainPage: 'Projects',
    capabilities: 'Certifications',
    about: 'About Me',
    education: 'Education',
    experience: 'Work Experience',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}