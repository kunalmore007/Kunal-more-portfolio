import { ExperienceItem, SkillCategory, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Kunal More",
  title: "Computer Science Educator & Software Engineer",
  headline: "Passionate Computer Engineer with 3+ years bridging enterprise backend development and high-impact CS education.",
  email: "morekunal635@gmail.com",
  linkedin: "https://www.linkedin.com/in/kunalpmore",
  linkedinUsername: "kunalpmore",
  location: "Pune / Mumbai / Palghar, Maharashtra, India",
  experienceYears: "03+",
  studentsMentored: "350+",
  technologiesMastered: "15+",
  bioSummary: "A dynamic and skilled professional with 03+ years of work experience, a passion for technology, and a strong foundation in computer engineering. With a concrete foundation in numerous programming languages and technologies, I am committed to leveraging my skills to drive innovation and contribute to impactful projects. I am a keen and quick learner who is always willing to go beyond the Scope of Work to execute such learnings.",
  pillars: [
    {
      title: "Enterprise Backend Engineering",
      desc: "Built scalable RESTful banking microservices at HSBC with Java, Spring Boot, Jenkins, and AWS cloud architecture.",
      icon: "Server"
    },
    {
      title: "Computer Science Pedagogy",
      desc: "Educating CBSE Classes XI & XII in CS & IT, curating rigorous practical curricula in programming, databases, and networks.",
      icon: "GraduationCap"
    },
    {
      title: "Cybersecurity & Cryptography",
      desc: "Leading high-engagement student clubs and workshops covering modern encryption, hashing, and secure software concepts.",
      icon: "ShieldCheck"
    },
    {
      title: "DSA & Problem Solving Mentorship",
      desc: "Trained over 350+ engineering candidates and learners in Data Structures, Algorithms, C/C++, Java, Python, and SQL.",
      icon: "Code2"
    }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "st-john",
    role: "Computer Science Teacher",
    organization: "St. John International School",
    organizationType: "academic",
    location: "Palghar, Maharashtra, India",
    period: "August 2024 - Present",
    duration: "Current Role",
    category: "teaching",
    current: true,
    badge: "Current Academic Role",
    summary: "Leading the Senior Secondary Computer Science & Information Technology Department for CBSE Classes XI & XII.",
    bullets: [
      "Teaching Computer Science and Information Technology to Classes XI and XII, aligned precisely with the rigorous CBSE curriculum.",
      "Creating detailed lesson plans and conducting hands-on practical sessions in laboratory environments on programming (Python, C++), relational databases (MySQL), and networking fundamentals.",
      "Delivered engaging interactive sessions on cryptography, cipher mechanisms, and modern encryption standards as the Faculty Lead of the Cyber Security Club.",
      "Actively organizing and leading school STEM exhibitions, technology symposiums, and code hackathons.",
      "Designing and evaluating algorithmic problem sets, practical board exam labs, and capstone software projects to elevate student learning outcomes."
    ],
    skills: ["Python", "Computer Networks", "Cybersecurity & Cryptography", "MySQL", "CBSE CS Curriculum", "Data Structures", "Pedagogy"]
  },
  {
    id: "compufield",
    role: "Senior Programming Faculty",
    organization: "Compufield Computer Institute",
    organizationType: "institute",
    location: "Mumbai, Maharashtra, India",
    period: "June 2023 - April 2024",
    duration: "11 months",
    category: "teaching",
    badge: "Faculty Leadership",
    summary: "Trained multi-disciplinary batches of engineers, professionals, and aspiring developers across modern full-stack web and core software technologies.",
    bullets: [
      "Instructed comprehensive programming and engineering courses: C/C++, Core Java, Python, JavaScript, PHP, Data Analysis with Python, and Full Stack Web Development (XAMPP stack).",
      "Emphasized practical hands-on application of JavaScript, PHP, and MySQL for production-oriented web development.",
      "Delivered specialized modules on Python Data Analysis covering structured data workflows, data manipulation, and scripting.",
      "Provided individualized mentorship and debug code reviews, fostering a collaborative and inquiry-driven classroom environment."
    ],
    skills: ["Core Java", "Python", "JavaScript", "PHP", "MySQL", "Data Analysis", "C/C++", "XAMPP Stack", "Web Development"]
  },
  {
    id: "private-tutor",
    role: "Private Technical Tutor & Engineering Mentor",
    organization: "Self-employed",
    organizationType: "mentorship",
    location: "Palghar, Maharashtra, India",
    period: "December 2021 - May 2023",
    duration: "1 year 6 months",
    category: "teaching",
    badge: "1-on-1 Mentorship",
    summary: "Delivered personalized 1-on-1 computer science and engineering coursework mentoring for university engineering undergraduates.",
    bullets: [
      "Conducted one-on-one deep dive sessions for engineering students across C/C++, Core Java, PHP, JavaScript, and Python.",
      "Assisted students in bridging theoretical university concepts into practical applications through live coding katas and real-world projects.",
      "Delivered rigorous hands-on training on relational database management, schema design, and complex SQL querying in MySQL.",
      "Guided students in mastering Data Structures and Algorithms (Trees, Graphs, Sorting, Dynamic Programming) to elevate campus placement problem-solving performance."
    ],
    skills: ["Data Structures & Algorithms", "C/C++", "Core Java", "Python", "MySQL", "PHP", "Problem Solving"]
  },
  {
    id: "hsbc",
    role: "Trainee Software Engineer",
    organization: "HSBC",
    organizationType: "corporate",
    location: "Pune, Maharashtra, India",
    period: "August 2021 - December 2021",
    duration: "5 months",
    category: "industry",
    badge: "Enterprise Banking",
    summary: "Developed mission-critical RESTful microservices for global banking and retail financial operations in collaboration with Marks & Spencer.",
    bullets: [
      "Spearheaded REST API development for core retail banking features in direct collaboration with the Marks & Spencer banking project team.",
      "Utilized Java, Spring Boot, Apache Maven, Jenkins CI/CD pipelines, and AWS cloud infrastructure to deliver secure, highly scalable microservices.",
      "Played a key role in the end-to-end implementation of critical financial endpoints, automated testing, and deployment workflows.",
      "Collaborated closely with cross-functional solution architects, security leads, and QA teams to ensure seamless API contract compliance within distributed banking systems."
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "AWS Cloud", "Jenkins CI/CD", "Maven", "Banking Architecture", "Microservices"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "Code",
    description: "Core languages used for backend engineering, systems, scripts, and pedagogy.",
    skills: [
      { name: "Java (Java 8 / Core Java)", level: "Expert", experienceYears: "4+ yrs", highlight: true, contexts: ["HSBC", "St. John", "Compufield", "PICT"], category: "languages" },
      { name: "Python", level: "Expert", experienceYears: "3+ yrs", highlight: true, contexts: ["St. John", "Compufield", "Private Mentorship"], category: "languages" },
      { name: "C / C++", level: "Advanced", experienceYears: "4+ yrs", highlight: false, contexts: ["Compufield", "Private Mentorship", "PICT"], category: "languages" },
      { name: "JavaScript / ES6+", level: "Advanced", experienceYears: "3+ yrs", highlight: true, contexts: ["Compufield", "Web Dev Courses", "Full Stack Projects"], category: "languages" },
      { name: "PHP", level: "Proficient", experienceYears: "2+ yrs", highlight: false, contexts: ["Compufield", "XAMPP Web Stack"], category: "languages" },
      { name: "SQL", level: "Expert", experienceYears: "4+ yrs", highlight: true, contexts: ["HSBC", "St. John", "Compufield", "Certifications"], category: "languages" }
    ]
  },
  {
    id: "frameworks-backend",
    title: "Backend & Web Frameworks",
    iconName: "Layers",
    description: "Frameworks for enterprise microservices, REST APIs, and full-stack web applications.",
    skills: [
      { name: "Spring Boot", level: "Advanced", experienceYears: "2+ yrs", highlight: true, contexts: ["HSBC Banking API", "Marks & Spencer Project"], category: "frameworks-backend" },
      { name: "RESTful API Design", level: "Expert", experienceYears: "3+ yrs", highlight: true, contexts: ["HSBC", "Web Services", "API Contracts"], category: "frameworks-backend" },
      { name: "Node.js & Express", level: "Advanced", experienceYears: "2+ yrs", highlight: false, contexts: ["Full Stack Web Dev", "API Mocking"], category: "frameworks-backend" },
      { name: "XAMPP Stack (Apache / MySQL / PHP)", level: "Advanced", experienceYears: "3+ yrs", highlight: false, contexts: ["Compufield", "Web Dev Labs"], category: "frameworks-backend" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & Tools",
    iconName: "Cloud",
    description: "Cloud infrastructure, continuous integration, build orchestration, and version control.",
    skills: [
      { name: "AWS Cloud Technologies", level: "Proficient", experienceYears: "2+ yrs", highlight: true, contexts: ["HSBC Cloud Services"], category: "cloud-devops" },
      { name: "Jenkins CI/CD", level: "Proficient", experienceYears: "2+ yrs", highlight: true, contexts: ["HSBC Automated Build Pipelines"], category: "cloud-devops" },
      { name: "Apache Maven", level: "Advanced", experienceYears: "3+ yrs", highlight: false, contexts: ["HSBC", "Java Spring Boot Projects"], category: "cloud-devops" },
      { name: "Git & GitHub", level: "Advanced", experienceYears: "4+ yrs", highlight: false, contexts: ["All Projects", "Curriculum Labs"], category: "cloud-devops" },
      { name: "Linux / Unix Shell", level: "Advanced", experienceYears: "4+ yrs", highlight: false, contexts: ["Lab Servers", "PICT", "Compufield"], category: "cloud-devops" }
    ]
  },
  {
    id: "data-security",
    title: "Data, Security & Algorithms",
    iconName: "Database",
    description: "Database management, cryptography, data structures, and data analysis.",
    skills: [
      { name: "MySQL & Relational Design", level: "Expert", experienceYears: "4+ yrs", highlight: true, contexts: ["HSBC", "St. John", "Compufield", "HackerRank Certs"], category: "data-security" },
      { name: "Data Structures & Algorithms (DSA)", level: "Expert", experienceYears: "4+ yrs", highlight: true, contexts: ["Engineering Mentorship", "Problem Solving Cert"], category: "data-security" },
      { name: "Cryptography & Encryption", level: "Advanced", experienceYears: "2+ yrs", highlight: true, contexts: ["St. John Cyber Security Club"], category: "data-security" },
      { name: "Data Analysis with Python (Pandas/NumPy)", level: "Advanced", experienceYears: "2+ yrs", highlight: false, contexts: ["Compufield", "Data Analysis Courses"], category: "data-security" },
      { name: "Computer Networking & Protocols", level: "Advanced", experienceYears: "3+ yrs", highlight: false, contexts: ["St. John CBSE XI-XII Labs"], category: "data-security" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Pune Institute of Computer Technology (PICT)",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science",
    period: "2018 - 2021",
    location: "Pune, Maharashtra, India",
    highlight: "Premier Tier-1 Engineering Institute for Computer Science in Maharashtra",
    description: [
      "Rigorous core curriculum in Advanced Algorithms, Operating Systems, Database Management, Computer Networks, and Object-Oriented Software Engineering.",
      "Built solid foundation in C/C++, Java, and systems architecture enabling seamless transition to enterprise software engineering at HSBC.",
      "Participated actively in technical symposiums, coding competitions, and academic peer tutoring."
    ]
  },
  {
    institution: "Maharashtra State Board of Technical Education (MSBTE)",
    degree: "Diploma in Engineering",
    field: "Computer Engineering",
    period: "2015 - 2018",
    location: "Maharashtra, India",
    highlight: "Foundation in Hardware, Microprocessors, Systems & Structured Programming",
    description: [
      "Developed foundational hands-on expertise in digital electronics, computer architecture, C programming, and relational databases.",
      "Graduated with top academic standing, securing direct lateral admission to Pune Institute of Computer Technology."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "sql-intermediate",
    name: "SQL Intermediate Certification",
    issuer: "HackerRank / Verified Technical Assessment",
    category: "database",
    skillsCovered: ["Complex Joins", "Subqueries", "Window Functions", "Query Optimization", "Schema Grouping"],
    description: "Demonstrates high proficiency in advanced relational queries, multi-table aggregations, and performance-tuned SQL data extraction."
  },
  {
    id: "java-8",
    name: "Java 8 Certified",
    issuer: "Oracle / Industry Assessment",
    category: "programming",
    skillsCovered: ["Functional Interfaces", "Lambdas", "Stream API", "Optional", "Concurrency & Collections"],
    description: "Validates mastery of modern Java 8 paradigms, streams processing, functional programming constructs, and object-oriented architecture."
  },
  {
    id: "problem-solving",
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank / Technical Assessment",
    category: "problem-solving",
    skillsCovered: ["Data Structures", "Dynamic Programming", "Graph Traversal", "Sorting & Searching", "Complexity Analysis"],
    description: "Evaluates algorithmic efficiency, time/space complexity optimization, and recursive problem formulation."
  },
  {
    id: "sql-basic",
    name: "SQL Basic Certification",
    issuer: "HackerRank / Verified Assessment",
    category: "database",
    skillsCovered: ["Basic Select Queries", "Filtering & Ordering", "Data Manipulation", "Primary/Foreign Keys"],
    description: "Fundamental relational database querying, table creation, record manipulation, and standard ANSI SQL operators."
  },
  {
    id: "core-java",
    name: "Core Java Certified",
    issuer: "Technical Training Assessment",
    category: "programming",
    skillsCovered: ["OOP Principles", "Polymorphism", "Exception Handling", "Multithreading", "JVM Internals"],
    description: "Deep foundation in Java runtime architecture, class hierarchies, interfaces, and multithreaded application execution."
  },
  {
    id: "higher-ed-teaching",
    name: "Higher Education Teaching & Computer Software Training",
    issuer: "Academic & Institute Accreditations",
    category: "pedagogy",
    skillsCovered: ["CBSE Curriculum Design", "Lab Demonstrations", "Technical Mentorship", "Student Progress Evaluation"],
    description: "Formally recognized for structured pedagogical methods, technical curriculum formulation, and 1-on-1 mentorship excellence."
  }
];
