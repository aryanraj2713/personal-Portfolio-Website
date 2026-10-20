# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: engineering leads and founders evaluating Aryan Raj as an engineer to hire or collaborate with. They are technical readers who look past titles. They open projects, check the stack and the measured outcomes, follow the publication, and want to see how he thinks about building systems.

Secondary audiences reach the site too (recruiters screening résumés, potential consulting clients, readers of his writing), but a page that satisfies a technical lead will also serve them.

## Product Purpose

aryanraj.cv is Aryan Raj's personal portfolio and résumé site. It exists to show credible, inspectable evidence that he can design and ship production ML systems and the backend and data infrastructure under them, and then to make it easy to start a conversation.

Success means a technical visitor leaves convinced and takes any one of several next steps. These all count equally:

- book a 30-minute call (Cal.com)
- open or download the résumé PDF
- email him or use the contact form
- go deeper into projects, work history, writing, and the paper

## Positioning

He is an ML and backend engineer, with equal weight on both. He builds the model or agent layer (LLMs, multi-agent GenAI, RAG, computer vision, evaluation at scale) and also the infrastructure that carries it to production (serverless backends, data warehouses and lakehouses, schema migrations, observability).

The site's claim is breadth that has shipped: enterprise GenAI at ValueLabs, LLM-driven KYC and fraud detection evaluated on over a million real data points at HyperVerge, AWS GenAI microservices at Emendo AI, and edge-deployed maritime vision at IIT Madras. A peer-reviewed RAG paper backs it up.

Avoid positioning him as a pure researcher, or as a frontend or full-stack generalist.

## Operating Context

- Technical evaluators skim the page first, then verify. Each claim should lead to evidence: a company link, a GitHub repo, the DOI or arXiv link, a Medium article.
- Visitors often arrive from LinkedIn, GitHub, X, Medium, or a shared résumé link. AI assistants and crawlers also read the site through `/llms.txt`, structured metadata, the sitemap, and robots rules.
- The site has a light theme by default with a dark-mode toggle, a ⌘K command palette, and a `/blog` index that links out to Medium.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3, framer-motion, and lucide-react. Deploy config exists for both Netlify (`netlify.toml`) and Vercel (Speed Insights).
- All content lives in `lib/data.ts`: personal info, experience, education, projects, publications, achievements, clubs, skills, and blog articles. `app/llms.txt/route.ts` and `app/layout.tsx` metadata repeat parts of it and must stay consistent with it.
- The home page has these sections: Hero, About, Meeting, Work, Education, Projects, Writing, Engineering (skills, publications, achievements, community), Contact, and Footer.
- Performance and SEO are standing concerns. The repo has web-vitals monitoring, a performance budget script, deferred styles, and an OG/Twitter image route.
- Known inconsistency: the page `<title>` and metadata say "Machine Learning Engineer & Backend Developer", while `personalInfo.title` says "Software Engineer (AI/ML) at ValueLabs". The confirmed positioning is ML + Backend engineer.
- Open question: two résumé PDFs exist (`public/Aryan_Raj.pdf`, `public/Aryan_Raj_ML_Engineer.pdf`). Only the first is linked.

## Brand Commitments

- Name: Aryan Raj. Domain: www.aryanraj.cv.
- Existing assets: the portrait at `public/aryan_image.jpeg`, the favicon and app icon set in `app/`, and the social profiles listed in `personalInfo.socials`.
- Voice in the current copy: direct and first-person in the CTAs ("Let's talk."), with outcome-focused résumé bullets.

## Evidence on Hand

- Work history with quantified outcomes: 50% licensing cost reduction (ValueLabs), 60% less manual effort (SEO Stack), 1M+ data points of LLM evaluation with FAR/FRR targets (HyperVerge), 10+ GenAI microservices (Emendo AI), and a 28% accuracy gain (IIT Madras).
- Publication: "Structured Relevance Assessment for Robust Retrieval-Augmented Language Models", Springer LNNS vol. 1652 (ICT4SD 2025), DOI 10.1007/978-3-032-06691-6_8, arXiv 2507.21287.
- Awards: 1st place at Standard Chartered Hackathon 2024 (Open-KYC), 2nd place at Hack Nova 2024 (Educative.AI), Best Open Innovation at MLH MesoHack 2022 (AI-RoadGuard), and Top 10 at MozoHack 2024 (OneMed).
- Projects: PaperPilot, Open-KYC, Educative.AI, AI-RoadGuard, and OneMed.
- Writing: five Medium articles, some published in the Data Science Community SRM journal.
- Community: open-source contributor to Dify; roles at Next Tech Lab, DSC SRM, the SRM Quantum Computing Club, and SRMKzilla.
- Résumé PDF and the Cal.com booking link.
- Not on hand, so never fabricate any of these: testimonials, client logos, employer endorsements, production metrics beyond those in `lib/data.ts`, live demos, or screenshots of employer work.

## Product Principles

1. **Proof over adjectives.** Every capability claim points to a number, a link, a repo, or the paper. A technical reader should be able to verify anything in one click.
2. **Both halves of the stack.** Show the ML work and the backend and data infrastructure together, as one engineer who takes systems to production.
3. **Every next step stays in reach.** The call, the résumé, email, and deeper exploration are equal options. None of them should be buried, and none should crowd out the others.
4. **One source of truth.** `lib/data.ts` drives everything the site says. Metadata, `llms.txt`, and the résumé must not contradict it.
5. **Fast and machine-readable.** Performance budgets, accessible markup, and clean structured data matter as much as appearance, because both people and AI agents read this site.
