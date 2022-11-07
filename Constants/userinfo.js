//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Nandhini Natarajan", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'NandhiniNatarajan@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '(443)-883-9357', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/NandhiniNatarajan1', icon: faGithubAlt },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Nandhini.",
        subtitle: "I am a motiviated and Senior at Dulaney High School with a curious mind. I excell in technical and scientific tasks as well as collaboration and teamworks skills. I think I have a unique mindset and love to contribute value to a community! "
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Technical", 
            skills: ["Autodesk Revit/Inventor", "Autodesk CAD", "Design"] 
        },
        {
            category: "Coding",
            skills: ["JavaScript/HTML", "Java", "Object-Oriented Programming", "Data structures"]
        },
        {
            category: "Economics",
            skills: ["Excel", "Statistical modeling", "Data Visualization"]
        },
        {
            category: "Soft Skills",
            skills: ["Problem-solving", "Communication", "Negotiation"]
        },
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
                description: 'GPA: 3.7, QPA: 5.36, 8 AP Classes' 
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
                time: 'Summer 2021 - June 2022',
                
            },
            {
                company: 'Uber Bagels and Deli',
                position: 'Team Member',
                time: 'June 2021 - January 2020',
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
    capabilities: 'Skills',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
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