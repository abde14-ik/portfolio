import { content } from "./content";

export type NavItem = {
    id: string;
    label: string;
};

export const navItems: NavItem[] = [
    { id: "hero", label: content.nav.home },
    { id: "about", label: content.nav.about },
    { id: "education", label: content.nav.education },
    { id: "skills", label: content.nav.skills },
    { id: "experience", label: content.nav.experience },
    { id: "projects", label: content.nav.projects },
    { id: "leadership", label: content.nav.leadership },
    { id: "contact", label: content.nav.contact },
];

export type Profile = {
    name: string;
    title: string;
    goal: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    arabicName: string;
    tifinaghName: string;
    strava?: string;
    resumeUrl: string;
};

export const profile: Profile = {
    name: "Abdelilah IKBI",
    title: "Engineering student at INPT specializing in distributed systems.",
    goal: "Combining technical discipline with a human-centric approach to automation.",
    location: "Morocco (Open to international/remote)",
    email: "abdeikbi200@gmail.com",
    phone: "+212 625125152",
    linkedin: "https://www.linkedin.com/in/abdelilah-ikbi-103597283/",
    github: "https://github.com/abde14-ik/",
    arabicName: "اقبي عبد الاله",
    tifinaghName: "ⵉⵇⴱⵉ ⵄⴰⴱⴷ ⵍⵉⵍⴰⵀ",
    strava: "https://www.strava.com/athletes/142286490",
    resumeUrl: "/resume.pdf",
};

export type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    location?: string;
    tasks: string[];
};

export const experience: ExperienceItem[] = [
    {
        role: "Cloud Infrastructure Intern",
        company: "MAROC DATACENTER (MDC)",
        period: "06/2025 - 08/2025",
        location: "Temara, Morocco",
        tasks: [
            "Designing an automated private cloud on VMware vSphere.",
            "Setting up TrueNAS, Ansible automation, Wazuh security, and Veeam backup.",
        ],
    },
    {
        role: "Data Collector",
        company: "Haut Commissariat au Plan du Maroc",
        period: "08/2024 - 09/2024",
        tasks: [
            "HCP Summer Campaign data collection.",
            "Developed resilience and attention to detail in field operations.",
        ],
    },
];

export type Project = {
    name: string;
    tech: string[];
    desc: string;
    codeUrl?: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        name: "BoardGameListing - CI/CD & K8s",
        tech: ["Jenkins", "Kubernetes", "AWS EC2", "SonarQube", "Trivy"],
        desc: "Full CI/CD pipeline for a Spring Boot app using Jenkins, Kubernetes on AWS EC2, SonarQube, and Trivy.",
    },
    {
        name: "Local RAG Microservices",
        tech: ["Python", "FastAPI", "LangChain", "Ollama", "Docker", "Terraform"],
        desc: "Offline document Q&A system using local LLMs with Python, FastAPI, LangChain, Ollama, Docker, and Terraform.",
    },
    {
        name: "Azure Pet Store",
        tech: ["Azure DevOps", "AKS", "Bicep", "Azure Functions"],
        desc: "N-tier microservices architecture on Azure using Azure DevOps, AKS, Bicep, and Azure Functions.",
    },
    {
        name: "Readers Haven",
        tech: ["React", "Node.js", "Kubernetes", "Prometheus", "Grafana", "MongoDB"],
        desc: "Collaboratively built a full-stack microservices app with React and Node.js, orchestrated via Kubernetes with a full monitoring stack (Prometheus/Grafana) and a secure API Gateway pattern.",
    },
    {
        name: "3-Tier DevOps CI/CD Pipeline",
        tech: ["Jenkins", "AWS EKS", "Docker", "SonarQube", "Trivy", "Helm"],
        desc: "Built a robust Jenkins pipeline for a 3-tier application, integrating DevSecOps tools (SonarQube, Trivy) and automating deployment to AWS EKS using Helm and dynamic infrastructure.",
    },
];

export type Skills = {
    Cloud: string[];
    DevOps: string[];
    IaC: string[];
    Monitoring: string[];
    Programming: string[];
};

export const skills: Skills = {
    Cloud: ["AWS", "Azure", "OpenStack", "VMware vSphere"],
    DevOps: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
    IaC: ["Terraform", "Ansible", "Bicep"],
    Monitoring: ["Grafana", "Prometheus", "Wazuh", "PRTG"],
    Programming: ["Python", "Java", "JavaScript", "Bash"],
};

export const languages = ["English", "French", "Arabic", "Tamazight"];

export const about = {
    technical: [
        "Cloud & DevOps engineering student at INPT specializing in ubiquitous and distributed systems, cloud, and IoT.",
        "Passionate about automation, infrastructure as code, and building reliable cloud-native platforms.",
        "Hands-on with VMware, Azure, AWS, Kubernetes, CI/CD pipelines, and observability tooling.",
    ],
    beyondCode: [
        "Founder of INPT Runners, bringing people together around discipline, consistency, and wellbeing.",
        "Curious reader interested in technology, leadership, and personal growth.",
        "Enjoy building communities and initiatives where people can grow together beyond the classroom.",
    ],
};

export type VolunteeringItem = {
    role: string;
    org: string;
    period: string;
    description: string;
    image?: string;
};

export const volunteering: VolunteeringItem[] = [
    {
        role: "Founder",
        org: "INPT Runners (Student Running Club)",
        period: "02/2025 - Present",
        description:
            "Founded the first student running community. Organized weekly runs to promote mental resilience and discipline—values I bring to engineering teams.",
    },
    {
        role: "Head of DevOps Cell",
        org: "CIT Club (Computer & Telecom Club)",
        period: "09/2024 - 05/2025",
        description:
            "Led workshops on Cloud & CI/CD. Mentored peers in containerization and automation best practices.",
    },
    {
        role: "Vice President",
        org: "MSC (Math & Science Club)",
        period: "09/2024 - 05/2025",
        description:
            "Managed club operations and promoted scientific curiosity through events and seminars.",
    },
];

export const contact = {
    email: profile.email,
    location: profile.location,
    availability: "Currently seeking an end-of-study (PFE) internship in Cloud & DevOps.",
};
