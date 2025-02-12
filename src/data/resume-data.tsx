import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { start } from "repl";

export const RESUME_DATA = {
  name: "Aryan Raj",
  initials: "Aryan Raj",
  location: "Bengaluru, India",
  locationLink:
    "https://www.google.com/maps/place/SRM+Institute+of+Science+and+Technology/@12.823033,80.0418411,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f712b82a78d9:0xfdb944a3aee53831!8m2!3d12.823033!4d80.044416!16zL20vMGJwNzl6?entry=ttu",
  about:
    "Undergraduate student with majors in Computer Science and Engineering. Machine Learning enthuiast and exploring new fields in software developement.",
  summary: "",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQFTTQxUQkVsJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721766976683?e=1744848000&v=beta&t=6b9_2-kKn6xDG7EnWYXvDaEReriqwvfXrbAE2Q5xnhA",
  personalWebsiteUrl: "",
  contact: {
    email: "aryanraj2713@gmail.com",
    tel: "+91 8287276911",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aryanraj2713",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryanraj13/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/aryanraj2713",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree:
        "B.Tech-Computer Science and Engineering with specialization in Software Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "HyperVerge",
      link: "https://www.hyperverge.co",
      badges: ["On-Site"],
      title: "Machine Learning Engineer Intern",
      logo: AmbitLogo,
      start: "Aug 2024",
      end: "Present",
      description: "Spearheaded advanced deep learning solutions to automate KYC verification and fraud detection, including specialized systems for color-printout detection and photo forgery identification. Engineered state-of-the-art models using image processing, transformers, and neural networks, optimizing performance to reduce FAR/FRR levels to <1% while ensuring regulatory compliance and scalability." 
    },
    {
      company: "Emendo.AI",
      link: "https://emendo.ai",
      badges: ["Remote"],
      title: "Machine Learning Engineer Intern",
      logo: ParabolLogo,
      start: "2024",
      end: "Aug 2024",
      description:
        "Emendo is a startup based in California, USA. Emendo aims to revolutionalize renovation and construction work. Worked on a serverless application and AWS to build AI based sollution to catrer the clients need.",
    },
    {
      company: "Indian Institute of Technology, Madras",
      link: "https://www.iitm.ac.in/",
      badges: ["On-Site"],
      title: "Research Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Engaged with the Department of Ocean Engineering to design and implement an anti-collision system utilizing Machine Learning techniques and increasing accuracy of existing systems by over 28%.Developed marine object detection, tracking, and localization systems using Stereo camera technology.",
    },
    {
      company: "Next Tech Lab",
      link: "https://www.nexttechlab.in",
      badges: ["Research Lab"],
      title: "Member- Norman and McCarthy Lab",
      logo: ClevertechLogo,
      start: "2021",
      end: "2025",
      description:
        "Contributed to a portfolio of web and ML based projects, gaining proficiency in various web and ML technologies. Collaborated with McCarthy Lab (ML/DL) for over a year, making substantial contributions to multiple projects.",
    },
    {
      company: "Data Science Community SRM",
      link: "dscommunity.in",
      badges: ["Club/Community"],
      title: "Technical Director",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2023",
      description:
        "Served as a member and technical director of one the the most prestigious technical club in the university. Organised a number of technical events,workshops and hackathons.Organised and montored hackathon like DS hack 2.0. ",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "C/C++",
    "Tensorflow",
    "Pytorch",
    "FastAPI",
    "Flask",
    "Django",
    "MySQL",
    "LLM and GenAI",
  ],
  projects: [
    {
      title: "AI-KYC-Application",
      techStack: [
        "Winner-Standard Chartered hackathon",
        "WebRTC",
        "Next.js",
        "Python",
        "Node/Express",
        "WebRTC",
        "VGG",
        "tensorFlow",
      ],
      description: "Online Video KYC Reimagined with AI",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/aryanraj2713/AI-KYC-Application",
      },
    },
    {
      title: "ThriveStart",
      techStack: ["RAG","Next.JS","ShadCN","Python","FastAPI","TailwindCSS","Tensorflow","Groq","Mistral","CREWS"],
      description:
        "Unta﻿ngle the Startup Labyrinth with AI-powered Matching, Real-Time Analytics & Smart Growth ",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/aryanraj2713/ThriveStart",
      },
    },
    {
      title: "Educative.AI",
      techStack: [
        "2nd Position-Hack Nova",
        "Python",
        "Next.js",
        "LLMs",
        "OCR",
        "FastAPI",
      ],
      description:
        "Educative.AI, your ultimate study companion designed to simplify learning, boost understanding, and maximize your grades",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/aryanraj2713/educative.ai",
      },
    },
    {
      title: "PaperPilot.AI",
      techStack: ["React.js", "Flask", "TF-IDF", "KNN", "TailwindCSS"],
      description:
        "PaperPilot is an innovative research paper recommendation system that leverages artificial intelligence to provide personalized recommendations to researchers and scholars.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/aryanraj2713/PaperPilot.AI",
      },
    },
    {
      title: "AI.roadGuard",
      techStack: [
        "MLH Meso Hack 2022 Open Innovation Winner",
        "Next.js",
        "CNN",
        "Python",
        "Tensorflow",
      ],
      description:
        "Convolutional neural networks to detect accidents using CCTV footage and notify the emergency services ",
      logo: Minimal,
      link: {
        label: "github.com/",
        href: "https://github.com/aryanraj2713/AIroadGuard",
      },
    },
    {
      title: "PotSafe",
      techStack: ["Python", "CNN", "YOLOv7", "MiDAS", "PyTorch"],
      description:
        "PotSafe is a pothole detection system that uses image processing techniques to automatically detect locate determine the severity of potholes on roads",
      logo: BarepapersLogo,
      link: {
        label: "github.com/",
        href: "https://github.com/aryanraj2713/Potsafe",
      },
    },
    {
      title: "Object-Detection-in-Jetson-Nano",
      techStack: [
        "University Project",
        "Jetson Nano",
        "NVIDIA Jetson Specialists",
        "Python",
        "YOLOv3",
      ],
      description: "Deep Learning on the NVIDIA Jetson Nano Developer",
      logo: YearProgressLogo,
      link: {
        label: "github.com/",
        href: "https://github.com/aryanraj2713/Jetson-Nano-YOLO-Object-Detection",
      },
    },
    {
      title: "PhishGuardian",
      techStack: ["KNN", "Decision Trees", "HTML/CSS", "JavaScript", "Flask"],
      description:
        "PhishGuardian is a phishing detection system that uses machine learning algorithms to detect phishing websites",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/aryanraj2713/Phish-Guardian",
      },
    },
    {
      title: "NextTechLab Website",
      techStack: ["MediaPipe", "Python", "React.js", "Node.js", "GraphQL"],
      description:
        "Next Tech Lab's website with integrated ML and gesture control made for NTL Hack'2022.",
      logo: EvercastLogo,
      link: {
        label: "nexttechlab.in",
        href: "https://github.com/aryanraj2713/NextTechLab-Website",
      },
    },
    {
      title: "OneMed",
      techStack: [
        "LLMs",
        "Python",
        "React.js",
        "Node.js",
        "FastAPI",
        "tailwindCSS",
      ],
      description:
        "OneMed is an innovative Electronic Health System (EHS) / Electronic Health Repository (EHR) platform designed to streamline and enhance the healthcare experience for both patients and medical practitioners.",
      logo: EvercastLogo,
      link: {
        label: "github.com/",
        href: "https://github.com/aryanraj2713/OneMed",
      },
    },
    {
      title: "Personal Portfolio Website",
      techStack: ["Git", "React.js", "TypeScript", "Side Project"],
      description:
        "Perosnal Portfolo Website made with React.js and TypeScript for showcasing skill,education and Projects. Printable and Minimalist.",
      logo: EvercastLogo,
      link: {
        label: "github.com/",
        href: "https://github.com/aryanraj2713/Personal-Portfolio-Website",
      },
    },
  ],
} as const;
