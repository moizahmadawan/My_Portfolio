<<<<<<< HEAD

import pet360Thumb from "../assets/pet360.png";
import skillspotThumb from "../assets/skillspot.png";
import hireAIThumb from "../assets/hire-ai.png";
import cinemixThumb from "../assets/cinemix.png";
import faceAttendanceThumb from "../assets/face-attendance.png";
import clinicDeskThumb from "../assets/clinic-desk.png";



import slashscreen from "../assets/pet360-screens/slash.png";
import pethome from "../assets/pet360-screens/home.png";
import petshop from "../assets/pet360-screens/petshop.png";
import petServices from "../assets/pet360-screens/services.png";
import petaichat from "../assets/pet360-screens/ai-chat.png";
import petMarketplace from "../assets/pet360-screens/pet-marketplace.png";

// SkillSpot Website Screenshots
import skillspotWeb1 from "../assets/skillspot-screens/web-1.png";
import skillspotWeb2 from "../assets/skillspot-screens/web-2.png";
import skillspotWeb3 from "../assets/skillspot-screens/web-3.png";
import skillspotWeb4 from "../assets/skillspot-screens/web-4.png";
import skillspotWeb5 from "../assets/skillspot-screens/web-5.png";
import skillspotWeb6 from "../assets/skillspot-screens/web-6.png";
import skillspotWeb7 from "../assets/skillspot-screens/web-7.png";
import skillspotWeb8 from "../assets/skillspot-screens/web-8.png";
import skillspotWeb9 from "../assets/skillspot-screens/web-9.png";
import skillspotWeb10 from "../assets/skillspot-screens/web-10.png";
import skillspotWeb11 from "../assets/skillspot-screens/web-11.png";
import skillspotWeb12 from "../assets/skillspot-screens/web-12.png";

// SkillSpot Mobile App Screenshots
import skillspotApp1 from "../assets/skillspot-screens/app-1.png";
import skillspotApp2 from "../assets/skillspot-screens/app-2.png";
import skillspotApp3 from "../assets/skillspot-screens/app-3.png";

export const projects = [
{
  id: "pet360",
  title: "Pet360 — AI-Powered Pet Care Platform",
  type: "Mobile App",
  isPrivate: true,
  privacyType: "NDA",

  summary:
    "My Bachelor's Final Year Project: an all-in-one pet-care mobile application featuring pet profiles, online shopping, service bookings, a pet marketplace, and AI-assisted disease insights.",

  category: "Bachelor's Final Year Project",
  role: "Lead Developer",

  thumb: pet360Thumb,
  thumbClass: "thumb-pet360",

  screenshots: [
    { image: slashscreen, title: "Slash Screen" },
    { image: pethome, title: "Home Screen" },
    { image: petshop, title: "Pet Shop" },
    { image: petServices, title: "Pet Services & Booking" },
    { image: petaichat, title: "Pet AI Assistant" },
    { image: petMarketplace, title: "Pet Buy & Sell Marketplace" },
  ],

  tags: [
    "React Native",
    "React",
    "Node.js",
    "Express.js",
    "Firebase",
    "MongoDB",
    "Redis",
    "AI Integration",
    "Computer Vision",
  ],

  github: "",
  liveDemo: "",

  caseStudy: {
    problem:
      "Pet owners often rely on multiple platforms to manage pet information, purchase food and accessories, find veterinary and grooming services, arrange caretaking, and connect with other pet owners. Identifying potential pet health issues can also be challenging without accessible guidance.",

    solution:
      "Led the development of Pet360, an all-in-one mobile pet-care platform. It supports multiple pet profiles with individual information and images, profile management, an e-commerce section for pet food, medicines, and accessories, appointment booking for veterinary, grooming, and caretaking services, and a marketplace where users can post pets for sale and explore available listings. Pet360 AI provides educational health insights using pet information and uploaded images, along with general recommendations and guidance. These AI features are intended to support awareness, not replace professional veterinary diagnosis.",

    result:
      "Developed an interactive mobile application prototype featuring the core pet-care experience, multiple pet profile management, shopping and service-booking concepts, pet marketplace functionality, and AI-assisted text and image analysis demonstrations. The project brings essential pet-care features together in one platform and showcases my leadership, frontend development, mobile application design, AI integration, and technical documentation skills.",
  },
},



{
  id: "skillspot",
  title: "SkillSpot AI — Freelance & Gig Marketplace",
  type: "Web Application",
  isPrivate: true,
  privacyType: "Private",
  summary:
    "An in-progress freelance marketplace where clients can post gigs and hire freelancers, while freelancers create profiles, showcase their skills, and offer services to potential clients.",
  category: "Cilent Project",
  role: "Solo Developer",
  thumb: skillspotThumb,
  thumbClass: "thumb-skillspot",
 screenshots: {
  website: [
    { image: skillspotWeb1, title: "Home Page" },
    { image: skillspotWeb2, title: "Explore Gigs" },
    { image: skillspotWeb3, title: "SkillSpot Freelancer Dashboard" },
    { image: skillspotWeb4, title: "Login & Sign Up" },
    { image: skillspotWeb5, title: "SkillSpot Client Dashboard" },
    { image: skillspotWeb6, title: "Find Freelancers" },
    { image: skillspotWeb7, title: "My Hires" },
    { image: skillspotWeb8, title: "Post a Gig with AI" },
    { image: skillspotWeb9, title: "SkillSpot AI Chat" },
    { image: skillspotWeb10, title: "Find Jobs" },
    { image: skillspotWeb11, title: "Messages" },
    { image: skillspotWeb12, title: "AI Job Matches" },
  ],

  mobileApp: [
    { image: skillspotApp1, title: "Landing Mobile" },
    { image: skillspotApp2, title: "Find Jobs Mobile" },
    { image: skillspotApp3, title: "Client Dashboard Mobile" },
  ],
},
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "AI Integration",
    "Marketplace Platform"
  ],
  github: "",
  liveDemo: "",
  caseStudy: {
    problem:
      "Clients need a convenient way to find freelancers for their projects, while freelancers need a platform to showcase their skills, publish services, and connect with potential clients.",
    solution:
      "SkillSpot AI is being developed as a freelance and gig marketplace. Clients will be able to post gigs and hire suitable freelancers. Freelancers will be able to create profiles, add their professional information, showcase their skills, and publish services they offer. The project is currently under development.",
    result:
      "The goal is to build a centralized platform that connects clients with freelancers, simplifies gig posting and hiring, and provides freelancers with an opportunity to promote their services. AI-powered features may further enhance the platform as development progresses."
  },
},

{
  id: "ai-face-attendance",
  title: "AI Face Attendance System",
  type: "AI & Computer Vision Project",

  summary:
    "A real-time AI-powered attendance system that detects and recognizes registered faces through a live camera feed, verifies identities, and records attendance automatically. Designed to streamline attendance management, reduce manual work, and demonstrate practical computer vision capabilities.",

  category: "Personal Project",
  role: "AI & Full-Stack Developer",

  thumb: faceAttendanceThumb,
  thumbClass: "thumb-face-attendance",

  tags: [
    "Python",
    "OpenCV",
    "Face Detection",
    "Face Recognition",
    "Computer Vision",
    "AI Model",
    "Real-Time Processing",
    "Streamlit",
  ],

  github: "https://github.com/moizahmadawan/Face-Attendance.git",
  liveDemo: "https://moiz-face-attendance.streamlit.app/",

  caseStudy: {
    problem:
      "Traditional attendance systems often require manual record keeping, consume valuable time, and may be vulnerable to recording errors or proxy attendance. Organizations need a faster and more convenient way to identify registered individuals and maintain accurate attendance records.",

    solution:
      "Developed an AI-powered face attendance application that uses a live camera feed and computer vision to detect and recognize registered faces in real time. The system processes camera frames, compares detected faces against registered identities using the configured recognition model, and records attendance for recognized individuals. A user-friendly Streamlit interface provides access to the attendance workflow and makes the system easier to operate.",

    result:
      "Built a functional real-time face recognition attendance project demonstrating AI-based identity recognition, live camera processing, and automated attendance recording. The project showcases practical applications of Python, OpenCV, computer vision, and AI model integration, with potential for further development into a more comprehensive attendance management solution.",
  },
},


 
{
  id: "hire-ai",
  title: "Hire AI — AI-Powered Recruitment & Talent Matching",
  type: "AI Recruitment Platform",

  summary:
    "An AI-powered recruitment platform that helps companies and recruiters analyze CVs against job descriptions, calculate candidate-job matching scores, manage job openings, shortlist qualified applicants, and organize interviews through a centralized recruitment dashboard.",

  category: "Personal Project",
  role: "Solo Developer",

  thumb: hireAIThumb,
  thumbClass: "thumb-hire-ai",

  tags: [
    "React",
    "TypeScript",
    "Firebase Authentication",
    "Cloud Firestore",
    "AI Integration",
    "Natural Language Processing",
    "CV Parsing",
    "Job Matching",
    "Candidate Management",
    "Interview Scheduling",
  ],

  github: "https://github.com/moizahmadawan/HIRE_AI.git",
  liveDemo: "https://cv-analyzer-virid.vercel.app/",


caseStudy: {
  problem:
    "Recruiters need an efficient way to compare candidates' CVs with job descriptions, organize job openings, and manage interview schedules. Manually reviewing applications and keeping track of interview statuses can make the recruitment process time-consuming.",

  solution:
    "Developed Hire AI, an AI-assisted recruitment platform where recruiters can create job postings, manually add candidate information and CVs, and analyze how closely each CV matches a job description using a percentage-based matching score. Recruiters can also manage candidate details, schedule interviews, and manually update interview statuses such as Scheduled, Completed, and Cancelled. The platform brings CV analysis, job management, candidate records, and interview coordination together in a centralized dashboard.",

  result:
    "Created a recruitment platform concept that combines AI-assisted CV matching with practical recruiter tools. It helps recruiters evaluate candidate-job compatibility, organize job openings, maintain candidate information, and manually manage interview schedules and outcomes. The matching score supports recruiter decision-making rather than replacing human judgment.",
},
},

 
{
  id: "cinemix",
  title: "Cinemix — Cinema & Movie Explorer",
  type: "Web Application",

  summary:
    "A modern, responsive movie discovery website that lets users explore films, browse movie details, and enjoy a cinema-inspired interface designed for a smooth browsing experience.",

  category: "Personal Project",
  role: "Solo Developer",

  thumb: cinemixThumb,
  thumbClass: "thumb-cinemix",

  tags: [
    "React",
    "JavaScript",
    "CSS3",
    "Firebase",
    "Responsive Web Design",
    "UI/UX Design",
    "Vercel",
  ],

  github: "https://github.com/moizahmadawan/Cinema-Website.git",
  liveDemo: "https://cinema-website-bay.vercel.app/",

  caseStudy: {
    problem:
      "Finding and exploring movie information through cluttered interfaces can make the browsing experience frustrating. Movie enthusiasts benefit from a clean, responsive platform where film information is easy to discover and navigate.",

    solution:
      "Developed Cinemix, a cinema-inspired web experience focused on movie discovery and browsing. Built with React, JavaScript, and CSS, the interface emphasizes organized content, clear navigation, responsive layouts, and accessible movie information across desktop and mobile screens.",

    result:
      "Created and deployed a responsive movie website that demonstrates React frontend development, component-based UI design, styling, and deployment with Vercel. The project showcases a modern browsing experience and provides a foundation for future enhancements such as personalized watchlists, advanced search, genre filters, and movie recommendations.",
  },
},
    
  

{
  id: "clinic-desk",
  title: "Clinic Desk — Clinic Management System",
  type: "Mobile App",
  isPrivate: true,
  privacyType: "Private",

  summary:
    "A client project designed to streamline daily clinic operations through patient registration, medical record management, prescription generation, medicine recommendations, automated clinic-letterhead formatting, PDF sharing, direct printing, and important clinical notes management.",

  category: "Client Project",
  role: "Solo Developer",

  thumb: clinicDeskThumb,
  thumbClass: "thumb-clinic-desk",

  tags: [
    "React",
    "JavaScript",
    "CSS",
    "Patient Registration",
    "Medical Records",
    "Prescription Automation",
    "PDF Generation",
    "Print Management",
    "Patient Data Management",
    "Clinic Workflow",
  ],

  // Add actual project URLs when available.
  github: "https://github.com/moizahmadawan/Clinic-Desk.git",
  // liveDemo: "YOUR_LIVE_DEMO_URL",

  caseStudy: {
    problem:
      "Managing a clinic involves registering patients, maintaining medical histories, preparing prescriptions, recording important notes, and providing patients with printed or digital prescription copies. Handling these tasks manually can consume time, create disorganized records, and make routine clinic administration less efficient.",

    solution:
      "Developed Clinic Desk, a clinic management application that helps organize patient registration, maintain patient records, and save important clinic notes. The system supports medicine recommendations and prescription preparation, automatically placing the entered medicine details and recommendations into a structured prescription formatted with the clinic's letterhead. Prescriptions can be generated as PDF documents, shared digitally with patients, or printed directly for physical copies. The centralized workflow helps clinic staff access patient information and manage routine administrative tasks more efficiently.",

    result:
      "Delivered a client-focused clinic management solution designed to reduce repetitive paperwork and streamline patient handling. The application brings patient registration, record keeping, prescription preparation, clinic-letterhead formatting, PDF sharing, printing, and important notes into one workflow. It helps organize clinic information and makes it easier to provide patients with clear, professionally formatted prescription documents.",
  },
},

];

=======
export const projects = [
  {
    id: "shopnest",
    title: "ShopNest — E-commerce store",
    summary: "Fast storefront with cart, search and secure checkout.",
    thumbClass: "t1",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Vercel"],
    caseStudy: {
      problem: "slow, hard-to-find products.",
      solution:
        "SSR/ISR pages, server-side search, Zod-validated checkout.",
      result: "Lighthouse 95+, LCP under 2.5s.",
    },
    links: [
      { label: "Live demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },

  {
    id: "taskflow",
    title: "TaskFlow — Team task board",
    summary:
      "Real-time kanban board where teammates see changes instantly.",
    thumbClass: "t2",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "WebSockets"],
    caseStudy: {
      problem: "teams lost track of updates.",
      solution: "live sync over WebSockets, Redux state, JWT login.",
      result: "tested with Jest and Cypress.",
    },
    links: [
      { label: "Live demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },

  {
    id: "fittrack",
    title: "FitTrack — Mobile app",
    summary:
      "Android and iOS app to log workouts and see progress charts.",
    thumbClass: "t3",
    tags: ["React Native", "Expo", "Firebase", "Context API"],
    caseStudy: {
      problem: "users forgot to log workouts.",
      solution:
        "quick-add screen, Firebase Auth and sync, push reminders.",
      result: "one codebase for two platforms.",
    },
    links: [
      { label: "Demo video", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export const timeline = [
  {
    when: "2022 – 2026",
    title: "BS Computer Science",
    text: "University of Gujrat, Pakistan",
  },
];
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
