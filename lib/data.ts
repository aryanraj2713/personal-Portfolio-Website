export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  email: string
  phone: string
  location: string
  socials: { label: string; url: string }[]
  resumeUrl: string
  calUrl: string
}

export interface Education {
  institution: string
  institutionUrl: string
  degree: string
  location: string
  period: string
  gpa?: string
}

export interface Experience {
  title: string
  company: string
  companyUrl: string
  location: string
  period: string
  type: 'job' | 'internship'
  bullets: string[]
}

export interface Project {
  name: string
  description: string
  stack: string[]
  bullets: string[]
  awards?: string[]
  github?: string
}

export interface Publication {
  title: string
  authors: { name: string; highlighted?: boolean }[]
  conference: string
  publisher: string
  volume: string
  date: string
  pages: string
  doi: string
  doiUrl: string
  springerUrl: string
  arxivUrl: string
  description: string
}

export interface Achievement {
  text: string
  type: 'gold' | 'silver' | 'bronze' | 'mention'
}

export interface Club {
  name: string
  role: string
  period: string
  description: string
  link?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface BlogArticle {
  title: string
  description: string
  url: string
  date: string
  readTime: string
  tags: string[]
}

export const personalInfo: PersonalInfo = {
  name: 'Aryan Raj',
  title: 'Software Engineer (AI/ML) at ValueLabs',
  subtitle:
    'Building deep learning solutions, generative AI products, and data infrastructure at scale.',
  email: 'aryanraj2713@gmail.com',
  phone: '+91 8287276911',
  location: 'Hyderabad, India',
  socials: [
    { label: 'GitHub', url: 'https://github.com/aryanraj2713' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aryanraj13/' },
    { label: 'X', url: 'https://x.com/aryanraj2713' },
    { label: 'Medium', url: 'https://medium.com/@aryanraj2713' },
  ],
  resumeUrl: '/Aryan_Raj.pdf',
  calUrl: 'https://cal.com/aryan-raj-kxydsh/30min',
}

export const education: Education[] = [
  {
    institution: 'SRM Institute of Science and Technology',
    institutionUrl: 'https://www.srmist.edu.in',
    degree:
      'B.Tech Computer Science and Engineering with spl. in Artificial Intelligence and Machine Learning',
    location: 'Chennai, IN',
    period: 'May 2021 - May 2025',
    gpa: '8.4/10',
  },
  {
    institution: 'Ganga International School',
    institutionUrl: 'https://www.gangainternationalschool.com',
    degree:
      'High School, CBSE (X and XII) Non Medical Sciences (With Computer Science and Commercial Arts)',
    location: 'Hiran Kudna, New Delhi',
    period: '',
  },
]

export const experience: Experience[] = [
  {
    title: 'Software Engineer (AI/ML)',
    company: 'ValueLabs',
    companyUrl: 'https://www.ValueLabs.com',
    location: 'Hyderabad, IN',
    period: 'Dec 2025 - Present',
    type: 'job',
    bullets: [
      'Building deep learning and generative AI proof-of-concepts (POCs) and MVPs for client projects, delivering compelling product demos and driving internal AI adoption initiatives across the organization.',
      'Contributing to the flagship product AiDE and its subsidiary tools, architecting integrations with various productivity platforms to enhance developer workflows and increase team efficiency.',
      'Architecting data analytics solutions, data warehousing infrastructure, and lakehouse architectures to support company-wide KPIs and metrics adoption, enabling data-driven decision making at scale.',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'SEOstack',
    companyUrl: 'https://www.seo-stack.io',
    location: 'Hyderabad, IN',
    period: 'Sep 2025 - Dec 2025',
    type: 'job',
    bullets: [
      'Building and deploying autonomous AI agents to automate complex SEO workflows and content analysis pipelines, reducing manual effort by 60% and improving turnaround times.',
      'Designing and implementing scalable machine learning infrastructure to support multi-step reasoning and real-time content optimization.',
      'Architecting prompt engineering frameworks and evaluation systems to ensure high-quality, contextually relevant SEO recommendations across diverse client domains.',
    ],
  },
  {
    title: 'Machine Learning Engineer (Intern)',
    company: 'HyperVerge',
    companyUrl: 'https://hyperverge.co/in/',
    location: 'Bengaluru, IN',
    period: 'Aug 2024 - July 2025',
    type: 'internship',
    bullets: [
      'Developed and fine-tuned LLM-based solutions to automate KYC and fraud detection workflows, tailored for real-world, domain-specific regulatory use cases across financial institutions.',
      'Led evaluation and benchmarking of LLMs on over a million real-world data points, setting up scalable performance monitoring pipelines and achieving industry-accepted False Acceptance Rate (FAR) and False Rejection Rate (FRR) thresholds.',
      'Optimized and deployed state-of-the-art computer vision and NLP models for identity verification, significantly improving inference speed and accuracy under production constraints.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Emendo AI',
    companyUrl: 'https://emendo.ai',
    location: 'California, USA (Remote)',
    period: 'Jan 2024 - Aug 2024',
    type: 'internship',
    bullets: [
      'Engineered and deployed AI solutions leveraging the AWS ecosystem with a focus on Generative AI to build scalable, client-centric applications.',
      'Developed and maintained 10+ Generative AI-based microservices with industry-standard integrations using AWS Lambda, API Gateway, and OpenTelemetry for observability.',
      'Architected scalable, serverless backends to support efficient retrieval and generation workflows across diverse application domains.',
    ],
  },
  {
    title: 'Research Intern',
    company: 'Indian Institute of Technology, Madras (IIT M)',
    companyUrl: 'https://www.iitm.ac.in',
    location: 'Chennai, IN',
    period: 'Feb 2023 - Jul 2023',
    type: 'internship',
    bullets: [
      'Collaborated with the Department of Ocean Engineering to design and implement a machine learning-based anti-collision system, improving accuracy of existing solutions by over 28%.',
      'Developed marine object detection, tracking, and localisation systems using stereo vision-based camera setups for alternative navigation in unmanned surface vehicles (USVs).',
      'Worked with state-of-the-art computer vision models and successfully deployed the solution on edge-based IoT hardware for real-time maritime applications.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'PaperPilot',
    description:
      'AI-powered research assistant for semantic search and summarization of academic papers',
    stack: ['Next.js', 'TailwindCSS', 'Python', 'Flask', 'Pinecone', 'Jina AI', 'LangChain'],
    bullets: [
      'Built a full-stack AI-powered research assistant platform for semantic search and summarization of academic papers with high precision retrieval.',
      'Implemented advanced RAG pipelines using Pinecone for vector storage and Jina AI embeddings, enabling context-aware paper discovery.',
      'Developed a Next.js frontend with TailwindCSS and a Flask backend, processing over 500+ papers with structured metadata extraction and citation analysis.',
    ],
  },
  {
    name: 'Open-KYC',
    description: 'AI-based KYC portal with facial authentication, OCR, and liveness detection',
    stack: ['Next.js', 'OpenCV', 'TensorFlow', 'Tesseract', 'ShadCN', 'WebRTC'],
    bullets: [
      'Built an AI-based KYC portal with features like facial authentication, Aadhaar/PAN card OCR, and liveness detection via video stream.',
      'Used OpenCV and TensorFlow for identity verification workflows, achieving high accuracy and security standards.',
    ],
    awards: ['1st place at Standard Chartered Hackathon 2024'],
  },
  {
    name: 'Educative.AI',
    description: 'Student assistance tool integrating OCR and fine-tuned LLMs',
    stack: ['Python', 'FastAPI', 'React.js', 'TailwindCSS', 'LLMs', 'TensorFlow'],
    bullets: [
      'Developed a student assistance tool integrating OCR and 10+ fine-tuned open-source LLMs to process handwritten and blackboard notes.',
      'Implemented a FastAPI backend and React.js frontend for features such as MCQ generation, speech-to-text doubt resolution, and structured note organization.',
      'Enabled automatic resource retrieval and summarization, enhancing accessibility and productivity for students.',
    ],
    awards: ['2nd place at Hack Nova 2024'],
  },
  {
    name: 'AI-RoadGuard',
    description: 'CNN-based accident detection system with real-time alerting',
    stack: ['React.js', 'CNN', 'Flask', 'Python', 'TensorFlow'],
    bullets: [
      'Engineered a CNN-based accident detection system achieving over 90% accuracy with 50% fewer false alerts than existing solutions.',
      'Developed a Flask backend and React.js frontend dashboard for real-time alerting to emergency services.',
    ],
    awards: ['Best Project in Open Innovation at MLH MesoHack 2022'],
  },
  {
    name: 'OneMed',
    description: 'AI-powered EHR platform with LLM summarization and voice-to-text',
    stack: ['Python', 'Next.js', 'JavaScript', 'LLMs', 'Pinecone', 'MongoDB', 'AWS'],
    bullets: [
      'Built a full-stack AI-powered EHR platform for hospitals, integrating LLM-based summarization and voice-to-text consultations.',
      'Developed a React Native app for syncing emergency data and patient conditions in real-time.',
      'Implemented scalable vector search with Pinecone for intelligent patient record retrieval.',
    ],
    awards: ['Top 10 at MozoHack 2024'],
  },
]

export const publications: Publication[] = [
  {
    title: 'Structured Relevance Assessment for Robust Retrieval-Augmented Language Models',
    authors: [
      { name: 'Astitva Veer Garg' },
      { name: 'Aryan Raj', highlighted: true },
      { name: 'Dr. Anitha D' },
    ],
    conference:
      'International Conference on Information Technology for Social Development (ICT4SD 2025)',
    publisher: 'Springer Nature',
    volume: 'Lecture Notes in Networks and Systems, vol 1652',
    date: 'October 31, 2025',
    pages: '73-82',
    doi: '10.1007/978-3-032-06691-6_8',
    doiUrl: 'https://doi.org/10.1007/978-3-032-06691-6_8',
    springerUrl: 'https://link.springer.com/chapter/10.1007/978-3-032-06691-6_8',
    arxivUrl: 'https://arxiv.org/pdf/2507.21287',
    description:
      'This paper addresses the challenges faced by Retrieval-Augmented Language Models (RALMs) in reducing factual errors by introducing a framework for structured relevance assessment. The work proposes a multi-dimensional scoring system for document relevance, embedding-based relevance scoring, and specialized benchmarking showing significant reductions in hallucination rates.',
  },
]

export const achievements: Achievement[] = [
  {
    text: 'Secured 1st place at the Standard Chartered Hackathon for developing OpenKYC, an innovative KYC solution that streamlined identity verification processes.',
    type: 'gold',
  },
  {
    text: 'Won 2nd place at Hack Nova 2024 with Educative.AI, an educational technology project later selected to represent at Innverve 2023, Army Institute of Technology (AIT), Pune.',
    type: 'silver',
  },
  {
    text: 'Received the Best Project Award in the Open Innovation category at MLH Meso Hack 2022 for the project AI-Roadguard.',
    type: 'gold',
  },
  {
    text: 'Authored technical articles on AI for prestigious Medium journals, including the DataX Journal.',
    type: 'mention',
  },
]

export const clubs: Club[] = [
  {
    name: 'Dify',
    role: 'Open Source Contributor',
    period: '',
    description:
      'Contributed to various open-source projects; notable contribution includes Dify, a project with over 100,000 stars on GitHub.',
    link: 'https://github.com/langgenius/dify',
  },
  {
    name: 'Next Tech Lab',
    role: 'Research Member',
    period: '2021-2025',
    description:
      'Conducted research as a member of Norman and McCarthy Labs, collaborating on web and machine learning projects, specializing in deep learning for image-related tasks.',
    link: 'https://nexttechlab.in',
  },
  {
    name: 'Data Science Community SRM',
    role: 'Technical Director',
    period: '2022-2023',
    description: 'Organized technical events, workshops, and hackathons including DS Hack 2.0.',
    link: 'https://www.dscommunity.in/people',
  },
  {
    name: 'SRM Quantum Computing Club',
    role: 'ML Lead',
    period: '',
    description:
      'Led machine learning initiatives, managing projects at the intersection of quantum computing and machine learning.',
  },
  {
    name: 'SRMKzilla',
    role: 'Event Domain Member',
    period: '',
    description:
      'Served as Event Domain Member of SRMKzilla, the official Mozilla club on campus, promoting community contributions and engagement.',
  },
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL (Postgres)', 'HTML', 'CSS', 'R'],
  },
  {
    category: 'Frameworks',
    items: [
      'React.js',
      'Next.js',
      'Node.js',
      'Flask',
      'FastAPI',
      'TailwindCSS',
      'JUnit',
      'Material-UI',
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'NLP',
      'LangChain',
      'LangGraph',
      'Llama-Index',
      'Transformers',
      'HuggingFace',
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      'Git',
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'Google Cloud Platform',
      'CDK',
      'Terraform',
      'Redis',
      'Pinecone',
    ],
  },
]

export const blogArticles: BlogArticle[] = [
  {
    title: 'Building the AI Agents That Can Think and Act',
    description:
      'Explore the fascinating world of AI agents that can reason, plan, and execute complex tasks autonomously. Learn about the architectures and methodologies that enable AI systems to think and act intelligently.',
    url: 'https://medium.com/@aryanraj2713/building-the-ai-agents-that-can-think-and-act-0b195ccd6ece?source=friends_link&sk=43ef2b34ec4da20f79c0ded805a7ba04',
    date: 'January 2026',
    readTime: '8 min read',
    tags: ['AI', 'Machine Learning', 'Agents'],
  },
  {
    title: 'Exploring Attention Mechanisms in Large Language Models',
    description:
      'Deep dive into the attention mechanisms that power modern large language models. Understand how transformers use attention to process and generate human-like text.',
    url: 'https://medium.com/data-science-community-srm/exploring-attention-mechanisms-in-large-language-models-33549ae2c5b8?source=friends_link&sk=0c12b79b1b0740ee5b18fd8a4b315aee',
    date: 'December 2025',
    readTime: '10 min read',
    tags: ['LLM', 'Transformers', 'Deep Learning'],
  },
  {
    title: 'EfficientNet: A New Approach to Model Scaling',
    description:
      'Discover how EfficientNet revolutionizes neural network scaling by balancing depth, width, and resolution. Learn about compound scaling and its impact on model efficiency.',
    url: 'https://medium.com/data-science-community-srm/efficientnet-a-new-approach-to-model-scaling-213a56b89bd0?source=friends_link&sk=6beb3d3b3235471a9f3ad42fd9dc2399',
    date: 'November 2025',
    readTime: '7 min read',
    tags: ['Computer Vision', 'Neural Networks', 'Optimization'],
  },
  {
    title: 'Should You Still Learn to Code Deeply in 2026?',
    description:
      'In an era of AI-powered code generation, is deep coding knowledge still valuable? Explore why understanding fundamentals remains crucial for software engineers and AI practitioners.',
    url: 'https://medium.com/data-science-community-srm/should-you-still-learn-to-code-deeply-in-2026-e8d05b8d2081?source=friends_link&sk=ddaccfcdeb4343c9bd62b473f2f65e32',
    date: 'January 2026',
    readTime: '6 min read',
    tags: ['Career', 'Programming', 'AI'],
  },
  {
    title: 'How to Become a 100x Python Developer',
    description:
      'Master the tools and practices that separate exceptional Python developers from the rest. Learn about modern development workflows, testing, and best practices.',
    url: 'https://medium.com/@aryanraj2713/how-to-become-a-100x-python-developer-master-the-tools-and-practices-that-matter-d796788c2aa7?source=friends_link&sk=fe5d918218b304b2c0c9a1684ee2a2ed',
    date: 'December 2025',
    readTime: '12 min read',
    tags: ['Python', 'Development', 'Best Practices'],
  },
]
