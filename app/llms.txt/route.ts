import { NextResponse } from 'next/server'

export async function GET() {
  const llmsTxt = `# LLMs.txt for aryanraj13.vercel.app

## About
This is the portfolio website of Aryan Raj, a Machine Learning Engineer and Backend Developer specializing in AI solutions, Large Language Models (LLMs), computer vision, and scalable web applications.

## Contact
- Name: Aryan Raj
- Email: aryanraj2713@gmail.com
- Phone: +91-8287276911
- Website: https://aryanraj13.vercel.app/
- LinkedIn: https://www.linkedin.com/in/aryanraj13/
- GitHub: https://github.com/aryanraj2713
- Twitter/X: https://x.com/aryanraj2713
- Medium: https://medium.com/@aryanraj2713

## Professional Summary
Aryan Raj is a Machine Learning Engineer and Backend Developer with expertise in:
- Machine Learning & Artificial Intelligence
- Large Language Models (LLMs) and RAG systems
- Computer Vision and Image Processing
- Natural Language Processing (NLP)
- Backend Development (Python, FastAPI, Next.js)
- Cloud Infrastructure (AWS)
- MLOps and Production ML Systems

## Education
- B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning from SRM Institute of Science and Technology, Chennai, India
- High School (CBSE X and XII) Non Medical Sciences from Ganga International School, New Delhi, India

## Current Position
Machine Learning Engineer at SEOstack (September 2025 - Present)

## Previous Experience
- Machine Learning Engineering Intern at HyperVerge (August 2024 - July 2025), Bengaluru, India
- Worked on KYC solutions and fraud detection systems

## Key Skills
- Programming Languages: Python, JavaScript, TypeScript
- ML Frameworks: TensorFlow, PyTorch
- LLM Tools: LangChain, LangGraph, LlamaIndex
- Backend: FastAPI, Next.js, React
- Cloud: AWS
- DevOps: Docker, Kubernetes
- Specializations: RAG (Retrieval Augmented Generation), Computer Vision, NLP

## Awards & Achievements
- 1st place at Standard Chartered Hackathon 2024 for OpenKYC
- 2nd place at Hack Nova 2024 for Educative.AI
- Best Project Award in Open Innovation at MLH MesoHack 2022 for AI-RoadGuard

## Publications
- "Structured Relevance Assessment for Robust Retrieval-Augmented Language Models" (2025)
  - Published in Springer Nature
  - Authors: Aryan Raj, Astitva Veer Garg, Dr. Anitha D
  - URL: https://arxiv.org/pdf/2507.21287
  - Focus: LLM-based automated evaluation for educational assessments

## Website Structure
- Home: https://aryanraj13.vercel.app/
- Education: https://aryanraj13.vercel.app/#education
- Experience: https://aryanraj13.vercel.app/#experience
- Projects: https://aryanraj13.vercel.app/#projects
- Skills: https://aryanraj13.vercel.app/#skills
- Publications: https://aryanraj13.vercel.app/#publications
- Contact: https://aryanraj13.vercel.app/#contact

## Sitemap
https://aryanraj13.vercel.app/sitemap.xml

## Robots.txt
https://aryanraj13.vercel.app/robots.txt

## Key Topics
- Machine Learning Engineering
- Large Language Models (LLMs)
- Retrieval Augmented Generation (RAG)
- Computer Vision
- Natural Language Processing
- Backend Development
- AI Solutions
- MLOps
- Python Development
- Next.js Development
- AWS Cloud Engineering
- KYC Solutions
- Fraud Detection

## Research Interests
- Retrieval-Augmented Generation (RAG) systems
- Large Language Model evaluation
- Educational assessment automation
- Computer vision applications
- Production ML systems

## Last Updated
${new Date().toISOString().split('T')[0]}
`

  return new NextResponse(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
