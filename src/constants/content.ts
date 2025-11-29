export const content = {
    nav: {
        home: "Home",
        about: "About",
        education: "Education",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        leadership: "Leadership",
        contact: "Contact",
        githubAria: "GitHub profile",
        linkedinAria: "LinkedIn profile",
        stravaAria: "Strava profile",
    },
    navbar: {
        subtitle: "Cloud & DevOps Engineering Student",
    },
    hero: {
        avatar: "/ikbi.jpg",
        badge: "Cloud & DevOps Engineering · PFE Internship",
        ctaViewProjects: "View Projects",
        ctaDownloadResume: "Download Resume",
        openToOpportunities: "Open to international & remote opportunities",
        engineeringMeetsHumanity: "Engineering meets humanity",
        snapshotTitle: "Snapshot",
        snapshotFocusLabel: "Focus",
        snapshotFocusValue: "Cloud · CI/CD · IaC",
        snapshotStacksLabel: "Stacks",
        snapshotStacksValue: "Azure · AWS · VMware",
        snapshotSoftSkillsLabel: "Soft skills",
        snapshotSoftSkillsValue: "Leadership · Community",
        statusTitle: "Live status",
        statusCloudLabel: "Cloud",
        statusCloudValue: "Online",
        statusBookLabel: "Current read",
        statusBookValue: "The Myth of Normal",
        statusBookAuthor: "Dr. Gabor Maté",
        statusBookSubtitle: "Trauma, Illness & Healing in a Toxic Culture",
        statusRunLabel: "Total Distance",
        statusRunValue: "846 km",
        statusRunSubtitle: "Marathon PB: 3h 39m • 5K: 18:59",
    },
    about: {
        heading: "About Me",
        subheading:
            "An engineering mindset grounded in automation and reliability, with a human side shaped by running, community and curiosity.",
        engineeringTitle: "Engineering Profile",
        beyondCodeTitle: "Beyond the Code",
        languagesTitle: "Languages",
        languagesSubtitle: "Multilingual communication",
    },
    skills: {
        heading: "Skills Matrix",
        subheading:
            "A toolbox focused on shipping reliable, observable cloud platforms and CI/CD pipelines.",
        categories: {
            cloud: "Cloud Platforms",
            devOps: "DevOps & Delivery",
            iaC: "Infrastructure as Code",
            monitoring: "Monitoring & Observability",
            programming: "Programming",
        },
    },
    experience: {
        heading: "Experience",
        subheading:
            "Hands-on roles applying cloud, automation and data skills in real environments.",
    },
    projects: {
        heading: "Featured Projects",
        subheading:
            "Selected work that demonstrates cloud-native thinking, DevOps practices, and infrastructure as code.",
        viewProjectLabel: "View project",
        viewCodeLabel: "View code",
        liveDemoLabel: "Live demo",
    },
    leadership: {
        heading: "Leadership & Volunteering",
        subheading:
            "Spaces where engineering meets humanity: building communities, mentoring peers, and leading by example.",
        humanSideLabel: "Human side",
        humanSideTitle: "Leading initiatives beyond the classroom",
    },
    library: {
        heading: "Intellectual Foundations",
        tagline:
            "Engineering is about building systems. Philosophy is about understanding who uses them.",
        items: [
            {
                title: "The Art of Loving",
                author: "Erich Fromm",
                theme: "Human Connection",
                connection: "Understanding the human element in distributed systems and team dynamics.",
                image: undefined,
            },
            {
                title: "Man for Himself",
                author: "Erich Fromm",
                theme: "Humanistic Ethics",
                connection:
                    "Grounding automation and DevOps decisions in human-centric, ethical principles.",
                image: undefined,
            },
            {
                title: "The Art of Being",
                author: "Erich Fromm",
                theme: "Mindfulness",
                connection:
                    "Bringing presence and focus to incident response, SRE practice, and long-term reliability.",
                image: undefined,
            },
            {
                title: "Ethics: A Very Short Introduction",
                author: "Simon Blackburn",
                theme: "Moral Philosophy",
                connection:
                    "Applying moral philosophy to AI, cloud governance, and automation trade-offs.",
                image: undefined,
            },
            {
                title: "Philosophy: The Basics",
                author: "Nigel Warburton",
                theme: "Critical Thinking",
                connection:
                    "Sharpening reasoning skills for architecture decisions and debugging complex systems.",
                image: undefined,
            },
        ],
    },
    contact: {
        heading: "Let's automate the future together.",
        subheading:
            "If you're looking for a Cloud & DevOps PFE intern who cares about reliability, automation and people, I'd love to talk.",
        form: {
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "you@company.com",
            messageLabel: "Message",
            messagePlaceholder:
                "Tell me a bit about your team, projects, or expectations for the PFE.",
            submitLabel: "Send (static demo)",
            staticNote:
                "This is a static form for the portfolio demo. You can connect it later to your preferred email or form provider.",
        },
        info: {
            emailLabel: "Email",
            locationLabel: "Location",
            availabilityLabel: "Availability",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            stravaLabel: "Strava",
        },
    },
    endorsements: {
        heading: "Community & Endorsements",
        subheading:
            "Praise from managers, peers and community members I've had the pleasure of working with.",
        items: [
            {
                name: "Placeholder – IT Manager",
                role: "IT Manager",
                company: "MAROC DATACENTER (MDC)",
                image: "/placeholders/avatar-1.jpg",
                text: "Abdelilah brings a rare mix of technical discipline and community leadership. His work on the Private Cloud project was outstanding.",
                linkedinUrl: "#",
            },
            {
                name: "Placeholder – Peer",
                role: "Peer & Fellow Student",
                company: "INPT",
                image: "/placeholders/avatar-2.jpg",
                text: "A disciplined engineer who understands the 'Why' behind the code. His leadership in the Runners club shows his dedication.",
                linkedinUrl: "#",
            },
        ],
    },
    guestbook: {
        heading: "Leave a mark.",
        subheading: "Feedback, encouragement, or just saying hello.",
    },
} as const;
