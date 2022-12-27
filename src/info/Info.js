import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Aryan",
    lastName: "Raj",
    initials: "aryanRaj", 
    position: "AI/ML Enthusiast and Front-End Developer.",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🏛️',
            text: 'Computer Science Undergrad at SRM Institute of Science and Technology'
        },
        {
            emoji: '🌎',
            text: 'Currently I live in Chennai,Tamil Nadu'
        },
        {
            emoji: "♟️",
            text: "I love Playing Chess."
        },
        {
            emoji: "📧",
            text: "aryanraj2713@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/aryan.raj__/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/aryanraj2713",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/aryanraj13/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/aryanraj2713",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "I am a Computer Science Undergrad at SRM Institute of Science and Technology. Machine Learning and Artificial Intelligence enthusiast. Learning Web development and MLOPS .Can code in Python, C and C++. Currently learning lots of fields and frameworks including React.js and front-end web development as well as designing.Clubs and communities I am a part of:- Front-end Developer | ML Enthusiasts | Member at Next Tech Lab (McCarthy Lab) | Member at SRMKZILLA | Technical Member at GeeksForGeeks SRMIST | Python Developer at Enactus",
    skills:
        {
            proficientWith: ['C++', 'C','React.js', 'Git and Github', 'Python', 'Tensorflow', 'Keras', 'Sk-Learn','HTML,CSS,Javascript','OpenCV'],
            exposedTo: ['Figma', 'Java', 'Flask']
        }
    ,
    hobbies: [
        {
            label: 'Chess',
            emoji: '♟️'
        },
        {
            label: 'Geo-politics',
            emoji: '🌏'
        },
        {
            label: 'Travelling',
            emoji: '✈️'
        }


    ],
    portfolio: [ 
        {
            title: "AIroadGuard",
            live: "https://drive.google.com/drive/folders/1-lZ9JB3BImHUUeWZQGRCfAA23EdrMrSD?usp=sharing",
            source: "https://github.com/aryanraj2713/AIroadGuard", 
            image: mock1
        },
        {
            title: "AI based NextTechLab Website",
            live: "https://drive.google.com/file/d/1SNRj6a41NycKK7BnrzfCd8jiI0Gl-Cu2/view?usp=sharing",
            source: "https://github.com/aryanraj2713/NextTechLab-Website",
            image: mock2
        },
        {
            title: "YOLO Object Detection on Jetson Nano",
            live: "https://user-images.githubusercontent.com/93781577/189527141-5a412f5c-7793-498a-8708-5013a0a5fde1.mp4",
            source: "https://github.com/aryanraj2713/Jetson-Nano-YOLO-Object-Detection",
            image: mock3
        },
        {
            title: "Vision-Sehyog",
            live: "under-developement",
            source: "https://github.com/aryanraj2713/Vision-Sehyog",
            image: mock4
        },
        {
            title: "Hand-Writing Recognition(Model)",
            live: "Not deployed",
            source: "https://github.com/aryanraj2713/Hand-Writing-Recognition",
            image: mock5
        }
    ]
}