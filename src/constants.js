// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Android-related logos
import kotlinLogo from './assets/tech_logo/kotlin.png';
import jetpackComposeLogo from './assets/tech_logo/jetpackcompose.png';
import androidStudioLogo from './assets/tech_logo/androidstudio.png';
import roomdbLogo from './assets/tech_logo/roomdb.png';
import retrofitLogo from './assets/tech_logo/retrofit.png';
import mvvmLogo from './assets/tech_logo/mvvm.png';

// Company & Education Logos
import projectLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonLogo from './assets/company_logo/newtonschool_logo.png';
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logos
import risklensLogo from './assets/work_logo/cs_prep.png';
import sportnovaLogo from './assets/work_logo/cm.png';
import aiCodeReviewLogo from './assets/work_logo/github_det.png';
import libraryMgmtLogo from './assets/work_logo/bookshop.png';

// Certificates Logos
import nptelCert from './assets/certificates/NPTEL.png';
import fccCert from './assets/certificates/Responsive web design.png';
import lpuCert from './assets/certificates/Intenship.png';
import chatgptCert from './assets/certificates/chatgpt-4.png';

// LeetCode Logo
import leetcodeImg from './assets/Leetcode.png';

// Project Mockups
import carPriceMockup from './assets/project_mockups/car_price.png';
import meditationMockup from './assets/project_mockups/meditation.jpg';
import javaMockup from './assets/project_mockups/java_img.webp';
import localBusinessMockup from './assets/project_mockups/Local_business.jpg';
import recipeMockup from './assets/Recipe.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'JavaScript (ES6+)', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Sass', logo: sassLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'PHP', logo: null },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'CI/CD Pipelines', logo: null },
      { name: 'Linux/Bash', logo: null },
      { name: 'Cloud Fundamentals', logo: null },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: glaLogo,
    role: "Hackathon Participant",
    company: "LPU Hackathons & Coding Events",
    date: "2025 - Present",
    desc: "Actively participated in multiple hackathons and coding competitions at LPU, collaborating in teams to design and build working prototypes under tight deadlines. Gained hands-on experience in rapid prototyping, team coordination, and delivering end-to-end solutions.",
    skills: ["React", "Node.js", "MongoDB", "Teamwork", "Problem Solving"],
  },
  {
    id: 1,
    img: projectLogo,
    role: "Full Stack Developer",
    company: "Collaborative Projects with Peers",
    date: "2025 - Present",
    desc: "Worked with a team on real-world full stack web projects including responsive dashboards and RESTful APIs. Took ownership of both frontend and backend modules, integrated REST APIs, and followed industry practices like MVC architecture and JWT authentication. Focused on building scalable, user-centric web applications.",
    skills: ["MERN Stack", "React", "Node.js", "REST APIs", "JWT", "Git & GitHub"],
  },
  {
    id: 2,
    img: agcLogo,
    role: "DevOps & Automation Enthusiast",
    company: "Self-Learning & Practice",
    date: "2025 - Present",
    desc: "Exploring DevOps tools and practices — containerization (Docker), CI/CD pipelines, Git workflows, and cloud fundamentals. Building and automating deployment pipelines for web projects. Focused on learning infrastructure as code and streamlining development workflows.",
    skills: ["Docker", "Git & GitHub", "CI/CD", "Linux", "REST APIs", "Automation"],
  },
];



export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Lovely Professional University (LPU), Phagwara",
    date: "Aug 2023 - Present",
    grade: "CGPA: N/A",
    desc: "Pursuing B.Tech in Computer Science and Engineering at LPU. Currently in 6th semester; focusing on Data Structures, DBMS, OS, Web Development, DevOps and projects.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "S.D.K.M.V Sen. Sec. School, Phagwara, Punjab",
    date: "Apr 2022 - Mar 2023",
    grade: "PSEB",
    desc: "Completed Class XII (Intermediate) from S.D.K.M.V Sen. Sec. School (PSEB), Phagwara, Punjab.",
    degree: "Intermediate (XII) - PCMB",
  },
  {
    id: 2,
    img: bsaLogo,
    school: "S.D.K.M.V Sen. Sec. School, Phagwara, Punjab",
    date: "Apr 2020 - Mar 2021",
    grade: "PSEB",
    desc: "Completed Class X from S.D.K.M.V Sen. Sec. School (PSEB), Phagwara, Punjab.",
    degree: "Matriculation (X)",
  },
];

export const certificates = [
  {
    id: 0,
    img: nptelCert,
    title: "Cloud Computing",
    organization: "NPTEL (IIT Kharagpur)",
    date: "Jan-Apr 2025",
    desc: "Successfully completed the 12-week NPTEL course on Cloud Computing with a consolidated score of 58%. Covered cloud architecture, virtualization, and deployment models.",
  },
  {
    id: 1,
    img: lpuCert,
    title: "Machine Learning Made Easy",
    organization: "Lovely Professional University (LPU)",
    date: "July 2025",
    desc: "Earned a Certificate of Merit for the course 'Machine Learning Made Easy: From Basics to AI Applications' organized by the Centre for Professional Enhancement.",
  },
  {
    id: 2,
    img: fccCert,
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    date: "Nov 2023",
    desc: "Earned the Responsive Web Design Developer Certification, representing approximately 300 hours of coursework covering HTML5, CSS3, Flexbox, and Grid.",
  },
  {
    id: 3,
    img: chatgptCert,
    title: "Introduction to Hardware and Operating Systems",
    organization: "IBM (via Coursera)",
    date: "Oct 2025",
    desc: "Completed the IBM certification course covering the fundamentals of hardware components and operating system operations.",
  },
];

export const leetcodeData = {
  username: "b91qdN8Moz",
  profileLink: "https://leetcode.com/u/b91qdN8Moz/",
  rank: "1,345,598",
  solved: "150 / 3873",
  easy: "33 / 932",
  medium: "60 / 2026",
  hard: "20 / 915",
  contestRating: "N/A",
  totalActiveDays: "52",
  maxStreak: "40",
  image: leetcodeImg,
};
export const achievements = [
  {
    id: 0,
    title: "DSA Problem Solver",
    subtitle: "150+ Problems",
    desc: "Regularly solve data structure and algorithm problems across LeetCode and other platforms to sharpen logic and interview readiness.",
    icon: "🚀"
  },
  {
    id: 1,
    title: "50 Days Badge on LeetCode",
    subtitle: "50 Days Badge 2026",
    desc: "Earned the prestigious LeetCode 50 Days Badge 2026 by consistently solving problems for 50 days, demonstrating dedication and consistency.",
    icon: "🏅"
  },
  {
    id: 2,
    title: "Hackathon & Team Collaboration",
    subtitle: "2 Events",
    desc: "Participated in multiple hackathons and coding events, delivering prototypes with strong teamwork under deadlines.",
    icon: "🤝"
  }
];


export const projects = [
  {
    id: 0,
    title: "Automatic Car Price Prediction",
    description: "An ML-based project that predicts car prices using various features. Built with Python and Machine Learning algorithms to analyze datasets and deliver accurate price estimates. Explores data preprocessing, model training, and evaluation techniques in AI/ML.",
    date: "2024 - 2025",
    image: carPriceMockup,
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/kajal2550/car_price",
    webapp: "https://carprice-wmmxjmjxcdkfvwkhyjbvdz.streamlit.app/",
  },
  {
    id: 1,
    title: "Mindful Meditation - Full Stack Project",
    description: "A full stack web application for mindfulness and meditation, built with HTML, CSS, JavaScript, and PHP. Features a clean, responsive UI with interactive meditation guides and user-friendly design. Demonstrates frontend-backend integration and dynamic content handling.",
    date: "2024 - 2025",
    image: meditationMockup,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Full Stack"],
    github: "https://github.com/kajal2550/front_end-php",
    webapp: "https://zenspace.infinityfree.me/?i=1",
  },
  {
    id: 2,
    title: "Local Business Product Finder",
    description: "A MERN stack web application that helps users discover and find local business products. Built with Node.js and React for a fast, responsive experience. Features product search, filtering, and a modern UI connecting users with local vendors.",
    date: "2024 - 2025",
    image: localBusinessMockup,
    tags: ["React", "Node.js", "MongoDB", "Express.js", "MERN Stack"],
    github: "https://github.com/kajal2550",
    webapp: "https://kajal2550.github.io/local-business-finder/",
  },
  {
    id: 3,
    title: "Java Library Management System",
    description: "A console-based Library Management System built using Core Java and MVC architecture. Demonstrates OOP concepts, collections framework, and real-world book management operations.",
    date: "Mar 2026",
    image: javaMockup,
    tags: ["Java", "OOP", "MVC Pattern", "Collections Framework", "Core Java"],
    github: "https://github.com/storm309/java-library-management-system",
    webapp: "https://github.com/storm309/java-library-management-system",
  },
  {
    id: 4,
    title: "Restaurant-Menu - Frontend Project",
    description: "A modern and responsive restaurant menu web application built with HTML, CSS, and JavaScript. Features a clean dark-themed UI with categorized food items, a search functionality, and interactive menus. Showcases frontend design skills and user experience focus.",
    date: "2024 - 2025",
    image: recipeMockup,
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    github: "https://github.com/kajal2550/Restaurant-Menu-System",
    webapp: "https://lively-cascaron-6ea8ee.netlify.app",
  },
];