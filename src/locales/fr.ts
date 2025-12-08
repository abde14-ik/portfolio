import type { EnContent } from "./en";

export const fr = {
    nav: {
        home: "Index",
        about: "À propos du club",
        education: "Formation",
        skills: "Le Lexique",
        experience: "Expérience",
        projects: "Ex Libris",
        leadership: "Leadership",
        contact: "Contact",
        githubAria: "Profil GitHub",
        linkedinAria: "Profil LinkedIn",
        stravaAria: "Profil Strava",
    },
    navbar: {
        items: [
            { id: "hero", label: "Index" },
            { id: "inkwell", label: "The Inkwell" },
            { id: "about", label: "À propos du club" },
            { id: "projects", label: "Ex Libris" },
            { id: "skills", label: "Le Lexique" },
        ],
        about: "À propos du club",
        skills: "Le Lexique",
        projects: "Ex Libris",
        contact: "Contact",
        subtitle: "LITERATUM • Les paroles s'envolent, les écrits restent.",
    },
    common: {
        present: "Présent",
        viewCredential: "Voir le diplôme",
        viewCode: "Voir le Code",
        liveDemo: "Démo Live",
        readMore: "Lire la suite",
    },
    hero: {
        avatar: "/philosophy.jpg",
        badge: "LITERATUM • Les paroles s'envolent, les écrits restent.",
        bio: "Un coin de bibliothèque pour celles et ceux qui aiment les textes exigeants et les conversations qui prennent leur temps.",
        statusDot: "Séance de lecture en cours",
        location: "[Ville, Pays]",
        remote: "Ouvert à l'international & au remote",
        locationMeta: "[Ville, Pays] • Ouvert à l'international & au remote",
        metaLine: "[Ville, Pays] • Ouvert à l'international & au remote",
        ctaViewProjects: "Voir les Projets",
        ctaDownloadResume: "Télécharger le CV",
        resumeUrl: "[Link to Resume]",
        openToOpportunities: "Ouvert aux collaborations réfléchies et aux cercles de lecture",
        engineeringMeetsHumanity: "Les paroles s'envolent, les écrits restent.",
        snapshotTitle: "Folio",
        snapshotFocusLabel: "Étagère actuelle",
        snapshotFocusValue: "Classiques · Philosophie · Essais",
        snapshotStacksLabel: "Thèmes",
        snapshotStacksValue: "Psychologie · Traumatisme · Société",
        snapshotSoftSkillsLabel: "Soft skills",
        snapshotSoftSkillsValue: "Leadership · Communauté",
        statusTitle: "En direct",
        statusCloudLabel: "Cloud",
        statusCloudValue: "En ligne",
        statusBookLabel: "Lecture du moment",
        statusBookValue: "The Myth of Normal",
        statusBookAuthor: "Dr. Gabor Maté",
        statusBookSubtitle: "Trauma, Illness & Healing in a Toxic Culture",
        statusRunLabel: "Rythme",
        statusRunValue: "Rencontres hebdomadaires",
        statusRunSubtitle: "Lecture lente, discussions longues.",
        statusFocusLabel: "Focus actuel",
        statusFocusValue: "Littérature & salles silencieuses",
        statusReadingLabel: "Lecture",
        statusTrainingLabel: "Entraînement",
        establishedLine: "Fondé en MMXXIV à l'Institut National des Postes et Télécommunications.",
        status: {
            focusSub: "Infrastructure as Code & automatisation",
            professionalLabel: "Focus professionnel",
            trainingSub: "Préparation marathon",
            books: [
                { title: "Le Mythe de la Normalité", author: "Dr. Gabor Maté" },
                { title: "L'Homme Irrationnel", author: "William Barrett" },
            ],
        },
        snapshot: {
            focus: "Focus Actuel",
            reading: "Lecture",
            training: "Entraînement",
        },
    },
    about: {
        heading: "À Propos",
        subheading:
            "Un espace pour la lecture lente, les marges annotées et les discussions tranquilles autour des livres.",
        bio:
            "Un coin de bibliothèque pour celles et ceux qui aiment les textes exigeants et les conversations qui prennent leur temps.",
        engineeringTitle: "Profil du lecteur",
        profileTitle: "Profil du lecteur",
        profileItems: [
            "Ouvert aux profils curieux, qu'ils viennent de l'ingénierie, du design ou des humanités.",
        ],
        beyondCodeTitle: "Au-delà du CV",
        beyondTitle: "Au-delà du CV",
        beyondItems: [
            "Ici, on lit pour comprendre un peu mieux le monde, pas pour remplir une checklist.",
        ],
        languagesTitle: "Langues",
        languagesSubtitle: "Communication multilingue",
        languagesList: ["Anglais", "Français", "Arabe", "Tamazight"],
    },
    aboutClub: {
        heading: "À propos du club",
        subheading:
            "LITERATUM a été fondé dans l'enceinte de l'INPT pour offrir un sanctuaire de pensée au milieu du bruit technologique. Nous sommes un collectif d'ingénieurs et de penseurs dévoués à l'écrit.",
        engineeringTitle: "Ce qu'est le club",
        profileTitle: "Ce qu'est le club",
        profileItems: [
            "Un petit cercle de lecture pour celles et ceux qui aiment les marges annotées, les textes longs et les conversations qui se construisent sur plusieurs semaines.",
            "Nous lisons philosophie, fiction et essais avec la curiosité de l'ingénieur et la patience de l'humaniste.",
            "Chaque séance associe un texte principal à un prompt simple, en laissant de la place au silence, aux annotations et aux retours partagés.",
        ],
        beyondCodeTitle: "Atmosphère & rituels",
        beyondTitle: "Atmosphère & rituels",
        beyondItems: [
            "Lumière chaude plutôt qu'écrans dès que possible.",
            "Notes manuscrites, extraits imprimés et musique de fond discrète.",
            "Une préférence pour la bienveillance, la lenteur et l'idée que chacun vient ici pour apprendre.",
        ],
    },
    lexicon: {
        heading: "Le Lexique",
        subheading: "Genres, traditions et thèmes vers lesquels nous revenons souvent dans nos lectures.",
        categories: [
            {
                id: "philosophy",
                label: "Philosophie",
                items: ["Existentialisme", "Stoïcisme", "Phénoménologie", "Éthique"],
            },
            {
                id: "fiction",
                label: "Fiction",
                items: ["Classiques russes", "Modernisme", "Réalisme magique", "Nouvelle"],
            },
            {
                id: "poetry",
                label: "Poésie",
                items: ["Romantisme", "Symbolisme", "Vers libre moderne"],
            },
            {
                id: "nonFiction",
                label: "Non‑fiction",
                items: ["Mémoire", "Essai", "Histoire intellectuelle"],
            },
            {
                id: "themes",
                label: "Thèmes",
                items: ["Aliénation", "Foi & doute", "Ville comme personnage", "Mémoire"],
            },
        ],
    },
    education: {
        heading: "",
        subheading: "",
        items: [],
    },
    experience: {
        heading: "",
        subheading: "",
        items: [],
    },
    archives: {
        heading: "Ex Libris",
        subheading:
            "Une curation d'œuvres explorées par la Syntax Society.",
        items: [
            {
                title: "L'Étranger",
                author: "Albert Camus",
                year: "1942",
                genre: "Roman existentialiste",
                dateDiscussed: "Semaine 01",
                seriesLabel: "Existentialisme",
                notes:
                    "Nous avons suivi la manière dont une lumière ordinaire devient une force oppressante, miroir de la distance émotionnelle et morale de Meursault.",
            },
            {
                title: "Crime et Châtiment",
                author: "Fiodor Dostoïevski",
                year: "1866",
                genre: "Roman psychologique russe",
                dateDiscussed: "Semaine 02",
                seriesLabel: "Culpabilité & Rédemption",
                notes:
                    "La discussion s'est concentrée sur le tiraillement de Raskolnikov entre théorie et conscience, et sur la ville de Saint-Pétersbourg comme paysage fiévreux.",
            },
            {
                title: "Pensées pour moi-même",
                author: "Marc Aurèle",
                year: "IIᵉ siècle apr. J.-C.",
                genre: "Philosophie stoïcienne",
                dateDiscussed: "Semaine 03",
                seriesLabel: "Stoïcisme",
                notes:
                    "Nous avons relié les pratiques stoïciennes (visualisation négative, journal, devoir) à la vie d'ingénieur moderne et aux périodes d'astreinte.",
            },
            {
                title: "L'Art d'aimer",
                author: "Erich Fromm",
                year: "1956",
                genre: "Philosophie psychanalytique",
                dateDiscussed: "Semaine 04",
                seriesLabel: "Éthique humaniste",
                notes:
                    "Conversation autour de l'amour comme art discipliné, et de ce que cela implique pour le soin apporté à la collaboration et au travail d'équipe.",
            },
        ],
    },
    leadership: {
        heading: "",
        subheading: "",
        humanSideLabel: "",
        humanSideTitle: "",
        humanSide: "",
        initiatives: "",
        items: [],
    },
    library: {
        heading: "Fondations intellectuelles",
        tagline: "Les paroles s'envolent, les écrits restent.",
        items: [
            {
                title: "The Art of Loving",
                author: "Erich Fromm",
                image: "/the art of loving.jpg",
                theme: "Discipline active",
                synopsis:
                    "Fromm soutient que l'amour n'est pas un vague sentiment, mais un art qui exige discipline, concentration et patience pour être maîtrisé.",
                connection:
                    "Appliquer cette même discipline active et ce soin aux dynamiques d'équipe et à la responsabilité du code.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "Man for Himself",
                author: "Erich Fromm",
                image: "/man for himself.jpg",
                theme: "Éthique humaniste",
                synopsis:
                    "Une enquête sur la psychologie de l'éthique, défendant que notre plus grande vertu est d'être fidèles à notre propre nature (productivité).",
                connection:
                    "Ancrer les décisions d'ingénierie dans l'intégrité plutôt que dans les seuls indicateurs.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "The Art of Being",
                author: "Erich Fromm",
                image: "/the art of being.jpg",
                theme: "Pleine conscience",
                synopsis:
                    "Un guide pour fonctionner pleinement dans un monde distrait grâce à la pratique de la pleine conscience et au dépassement des illusions.",
                connection:
                    "Apporter un état de Flow et une concentration profonde à la conception d'architectures complexes et au débogage.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "Ethics: A Very Short Introduction",
                author: "Simon Blackburn",
                image: "/ethics.jpg",
                theme: "Systèmes moraux",
                synopsis:
                    "Blackburn explore les grands climats éthiques de notre époque (Kant, utilitarisme) et la manière dont nous justifions nos valeurs.",
                connection:
                    "Utiliser ces cadres pour arbitrer les compromis éthiques en IA, vie privée et automatisation.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "Philosophy: The Basics",
                author: "Nigel Warburton",
                image: "/philosophy.jpg",
                theme: "Logique critique",
                synopsis:
                    "Une introduction claire aux grandes questions de la réalité, de la science et de l'esprit, invitant à un scepticisme rigoureux.",
                connection:
                    "Aiguiser les capacités d'analyse de cause racine nécessaires pour diagnostiquer les pannes distribuées.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "Le Mythe de la Normalité",
                author: "Dr. Gabor Maté",
                image: "/normal.jpg",
                theme: "Santé systémique",
                synopsis:
                    "Maté décortique la façon dont la société moderne génère la maladie, en reliant les traumatismes individuels aux pressions systémiques plus larges.",
                connection:
                    "Comprendre comment le stress systémique affecte la fiabilité — autant dans la biologie humaine que dans les clusters cloud.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "L'Homme Irrationnel",
                author: "William Barrett",
                image: "/irrational-man.jpg",
                theme: "Existentialisme",
                synopsis:
                    "Un exposé de référence sur la philosophie existentialiste, qui interroge la quête de sens à l'ère mécaniste.",
                connection:
                    "Naviguer dans l'ambiguïté et le « facteur humain » au sein de systèmes logiciels déterministes.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "L'Étranger",
                author: "Albert Camus",
                image: undefined,
                theme: "Roman existentialiste",
                synopsis:
                    "Le récit de Meursault, un homme apparemment indifférent dont le crime révèle l'absurdité radicale du monde.",
                connection:
                    "Texte central pour discuter de l'aliénation, du soleil comme force hostile et du procès comme théâtre moral.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "Crime et Châtiment",
                author: "Fiodor Dostoïevski",
                image: undefined,
                theme: "Roman psychologique russe",
                synopsis:
                    "L'itinéraire tourmenté de Raskolnikov entre théorie froide et conscience brûlante, dans une Saint-Pétersbourg fiévreuse.",
                connection:
                    "Support idéal pour explorer la culpabilité, la rédemption et la ville comme personnage.",
                curator: "IKBI Abdelilah",
            },
            {
                title: "Pensées pour moi-même",
                author: "Marc Aurèle",
                image: undefined,
                theme: "Philosophie stoïcienne",
                synopsis:
                    "Les notes intimes d'un empereur romain qui tente de vivre avec rectitude dans un monde changeant.",
                connection:
                    "Texte de chevet pour les séances consacrées à la discipline intérieure et aux rituels quotidiens.",
                curator: "IKBI Abdelilah",
            },
        ],
    },
    inkwell: {
        heading: "The Inkwell",
        subheading: "Prompt d'écriture hebdomadaire",
        prompt:
            "Dans <em>L'Étranger</em>, Camus utilise le soleil comme une force hostile. Rédigez un paragraphe décrivant un décor qui reflète le conflit intérieur d'un personnage.",
        placeholder: "Commencez votre réflexion ici...",
        note: "Cet espace est purement local – rien de ce que vous écrivez n'est envoyé. Considérez-le comme une marge personnelle.",
    },
    contact: {
        heading: "Construisons quelque chose de durable.",
        subheading:
            "Si vous recherchez quelqu'un qui se soucie de la fiabilité, de la qualité et des personnes, ce modèle est prêt à être adapté à votre parcours.",
        form: {
            nameLabel: "Nom",
            namePlaceholder: "Votre nom",
            emailLabel: "Email",
            emailPlaceholder: "vous@entreprise.com",
            messageLabel: "Message",
            messagePlaceholder:
                "Parlez-moi de votre équipe, de vos projets ou de vos attentes pour le PFE.",
            submitLabel: "Envoyer le message",
            staticNote:
                "Ce formulaire envoie directement via EmailJS. Vous pourrez adapter le template ou le fournisseur plus tard.",
        },
        info: {
            emailLabel: "Email",
            locationLabel: "Localisation",
            availabilityLabel: "Disponibilité",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            stravaLabel: "Strava",
        },
        meta: {
            location: "Rabat, Campus INPT",
            availability: "[Votre disponibilité actuelle ou ce que vous recherchez.]",
        },
        status: {
            idle: "Envoyer le message",
            sending: "Envoi...",
            success: "Message envoyé ! Merci pour votre message.",
            error: "Une erreur est survenue. Réessayez ou contactez-moi par email.",
        },
        placeholders: {
            name: "John Doe",
            email: "john@example.com",
            message: "Parlez-moi de votre projet...",
        },
        states: {
            sending: "Envoi en cours...",
            success: "Message envoyé !",
            error: "Erreur. Réessayez.",
        },
    },
    endorsements: {
        heading: "",
        subheading: "",
        roleAt: "",
        items: [],
    },
    guestbook: {
        heading: "",
        subheading: "",
    },
    footer: {
        owner: "[Your Name]",
        rights: "Tous droits réservés.",
        builtBy: "Conçu et Développé par",
    },
};
