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
      school: "SRM Institute of Science and Technology,Chennai",
      degree:
        "B.Tech-Computer Science and Engineering with specialization in Software Engineering",
      start: "2021",
      end: "2025",
    },
    {
      school: "Ganga International School,New Delhi",
      degree:
        "Senior Secondary School",
      start: "2007",
      end: "2021",
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
      company: "Emendo AI",
      link: "https://emendo.ai",
      badges: ["Remote"],
      title: "Machine Learning Engineer Intern",
      logo: ParabolLogo,
      start: "2024",
      end: "Aug 2024",
      description:
        "At Emendo (CA-based PropTech startup), engineered agentic AI systems and GenAI solutions using serverless AWS microservices, slashing costs by 40%. Integrated vector databases and fine-tuned LLMs (Llama-2, GPT-3.5) to automate construction workflows and enhance domain-specific accuracy." 
    },
    {
      company: "Indian Institute of Technology, Madras",
      link: "https://www.iitm.ac.in/",
      badges: ["On-Site"],
      title: "Deep Learning Research Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Engaged with the Department of Ocean Engineering to design and implement an anti-collision system utilizing Machine Learning techniques and increasing accuracy of existing systems by over 28%.Developed marine object detection, tracking, and localization systems using Stereo camera technology.",
    },
  ],
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C/C++",
    "Tensorflow",
    "Pytorch",
    "FastAPI",
    "Flask",
    "Django",
    "MySQL",
    "LLM and GenAI",
    "Amazon Web Services",
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
      title: "Llama Scholar",
      techStack: ["LLM", "Python", "FastAPI", "Qdrant", "RAG","Next.js","WhatsApp API"],
      description:
        "Whatsapp based exam helper.",
      logo: CDGOLogo,
      link: {
        label: "github.com",
        href: "https://github.com/aryanraj2713/Llama-Scholar",
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
  achievements: [
    {
      title: "achievements",
      description: ["Secured first place at the Standard Chartered Hackathon for developing OpenKYC, an innovative know-your-customer solution that streamlined identity verification processes.","Won second place at Hack Nova 2024 with Educative.AI, an educational technology project that was subsequently selected to represent at Innverve 2023, held at Army Institute of Technology (AIT) in Pune.","Received the best project award in the Open Innovation category at MLH Meso Hack 2022 for the project AI-Roadguard." ]
    },
  ],
  clubs: [
    {
      title: "clubs",
      description: ["Conducted research at Next Tech Lab (2021-2025) as a member of Norman and McCarthy Lab, collaborating on multiple web and machine learning projects with specialization in deep learning for image-related tasks.","Served as Technical Director at Data Science Community SRM (2022-2023), organizing technical events, workshops, and hackathons including DS Hack 2.0, while contributing to one of the university's most prestigious technical clubs.","Led machine learning initiatives at SRM Quantum Computing Club, heading projects at the intersection of quantum computing and machine learning, while organizing specialized events such as talks and the Qqantathon 2.0 hackathon.",]
    },
  ],

} as const;
