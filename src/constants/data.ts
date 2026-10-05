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
    title: "Cloud, DevOps & Platform Engineer",
    goal: "Building reliable cloud platforms and backend services through automation and engineering discipline.",
    location: "Morocco (open to opportunities in Morocco and internationally)",
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
        role: "Backend Java Intern",
        company: "Oracle Cloud Subscriptions (OCI)",
        period: "03/2026 - 09/2026",
        location: "Casablanca, Morocco",
        tasks: [
            "Built a configuration-driven Java audit framework with Dropwizard, Guice, and Hibernate for scheduled operational checks.",
            "Implemented safe, parameterized SQL detectors and automated tests with JUnit, Mockito, and H2.",
            "Added OCI Monitoring metrics and Terraform-managed MQL alarms, and validated deployments across development and pre-production environments.",
        ],
    },
    {
        role: "Cloud Infrastructure Intern",
        company: "MAROC DATACENTER (MDC)",
        period: "06/2025 - 08/2025",
        location: "Temara, Morocco",
        tasks: [
            "Deployed a VMware vSphere private cloud with TrueNAS shared storage and Ansible-based virtual machine provisioning.",
            "Integrated PRTG monitoring, Veeam backup and recovery, and Wazuh security monitoring.",
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
    Cloud: ["Oracle Cloud Infrastructure (OCI)", "AWS", "Azure", "OpenStack", "VMware vSphere"],
    DevOps: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
    IaC: ["Terraform", "Ansible", "Bicep"],
    Monitoring: ["OCI Monitoring", "Grafana", "Prometheus", "Wazuh", "PRTG", "Veeam"],
    Programming: ["Java", "Spring Boot", "Dropwizard", "SQL", "Python", "JavaScript", "Bash"],
};

export const languages = ["English", "French", "Arabic", "Tamazight"];

export const about = {
    technical: [
        "INPT engineering graduate specializing in distributed systems and cloud, focused on Cloud, DevOps, and platform engineering.",
        "Completed a Backend Java internship with Oracle Cloud Infrastructure's Oracle Cloud Subscriptions team in 2026.",
        "Hands-on with Java services, OCI, AWS, Azure, VMware, Kubernetes, CI/CD, Terraform, Ansible, and observability.",
    ],
    beyondCode: [
        "Founder of INPT Runners, bringing people together around discipline, consistency, and wellbeing.",
        "Curious reader interested in technology, leadership, and personal growth.",
        "Enjoy building communities and initiatives where people can grow together beyond the workplace.",
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
    availability: "Available for full-time opportunities from October 2026 in Morocco and internationally.",
};
