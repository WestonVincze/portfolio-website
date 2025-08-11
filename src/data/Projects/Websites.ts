import { ProjectDetails } from "./types";

export const Websites: ProjectDetails[] = [
  {
    projectName: "Credit Cruisers Redesign",
    category: "website",
    id: "credit-cruisers",
    year: "2025",
    skills: [
      "NextJS",
      "React",
      "Tailwind",
      "HTML",
      "CSS",
      "GoogleAnalytics",
      "Vercel",
    ],
    subheading: "Client Website",
    description:
      "Redesigned and rebuilt a client's legacy Wix website with Next.js and a focus on performance, responsiveness, and user experience. The new site features a streamlined user flow, improved SEO, and significantly enhanced web vitals. The Next.js rebuild is phase 1 of 2 and lays down the groundwork for a scalable application that will feature tiered authentication and a vehicle inventory.",
    highlights: [
      "Multi step client intake form with direct, automated emails",
      "Fully accessible and responsive design with near-perfect web vitals",
      "Custom Hero animation and animated SVGs",
      "Reduced monthly subscription fees by 100%"
    ],
    links: [
      {
        icon: "Eye",
        text: "Live Website",
        url: "https://creditcruisers.ca",
      },
    ],
  },
  {
    projectName: "IP Address Tracker",
    category: "demo",
    id: "ip-address-tracker",
    year: "2025",
    skills: ["NextJS", "React", "Tailwind", "HTML", "CSS", "Vercel"],
    subheading: "Frontend Mentor Challenge",
    description:
      "A Frontend Mentor challenge which was completed as an avenue to learn and practice Tailwind CSS. The instructions were to create an input that accepts an IP address or domain and displays various geolocation data and a map. Design images and a loose style guideline was provided.",
    highlights: [
      "Efficient API implementation leveraging a NextJS route handler",
      "Environment variable feature flag for optional mock responses",
      "Adaptive user input that automatically adds decimals for ipv4 ip addresses",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/ip-address-tracker-challenge",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://ip-address-tracker-challenge-weston-vincze.vercel.app/",
      },
    ],
  },
  {
    projectName: "Currency Ticker",
    category: "website",
    id: "currency-ticker",
    year: "2024",
    skills: [
      "NextJS",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jest",
      "Vercel",
      "Figma",
    ],
    subheading: "Take-Home Challenge (2 days)",
    description:
      "My submission for a take home challenge as part of an interview process. The challenge was to create an application to fetch and display a frequently updated dataset via API. The application had to update data live, include list and details pages, and be responsive. I used the coincap.io API to fetch and display cryptocurrency data on a 30 second interval. I implemented a persistent favorites system using local storage, pagination with 'show more' and 'show less' buttons, and skeleton components to minimize layout shifts.",
    highlights: [
      "Led to a final interview and job offer",
      "Seamless transition between empty and states",
      "Completed challenge within tight 2 day deadline",
      "Designed and developed from scratch, including Figma mockup for mobile and desktop",
      "Includes a detailed post mortem document in the repo (PostMortem.md)",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/currency-ticker",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://currency-ticker.vercel.app",
      },
    ],
  },
  {
    projectName: "FAQ Accordion",
    category: "demo",
    id: "faq-accordion",
    year: "2023",
    skills: ["JavaScript", "HTML", "CSS", "Vercel"],
    subheading: "Frontend Mentor Challenge",
    description:
      "My submission for a Frontend Mentor challenge which was done as a self-challenge to reinforce my vanilla JavaScript skills. The instructions were to create an FAQ accordion based on image mockups and implement hide/show accordion functionality.",
    highlights: [
      "Modular component architecture written from scratch without a framework",
      "JSDoc integration for lightweight type safety",
      "Accessible, WCAG compliant solution",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/FAQ-Accordion-Challenge",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://faq-accordion-challenge-weston-vincze.vercel.app/",
      },
    ],
  },
  {
    projectName: "Portfolio Website",
    category: "website",
    id: "portfolio-website-2023",
    year: "2023",
    status: "in progress",
    skills: [
      "NextJS",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jest",
      "XState",
      "ReactSpring",
      "Vercel",
      "Figma",
    ],
    subheading: "Digital Resume and Portfolio",
    description:
      "You are currently viewing this project! I created this website using NextJS to act as a hub for my portfolio and resume. The source code is openly available and demonstrates my iterative development style. This project is in the late MVP stage with QoL and visual improvements on the pipeline. You can view the project board and git history to see the most recent and upcoming changes.",
    highlights: [
      "Shared logic extracted into highly reusable custom hooks for consistency and ease of use",
      "Modular component architecture, enforcing a strong separation of concerns",
      "Fully accessible and WCAG compliant with an adaptive UI that scales to user's preferred font size",
      "Custom theme with dark and light variants",
      "Designed and developed from scratch",
      "Custom assets featuring hand drawn and programmatic animations",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/portfolio-website",
      },
      {
        icon: "GitHub2",
        text: "Project Board",
        url: "https://github.com/users/WestonVincze/projects/1",
      },
    ],
  },
  {
    projectName: "MTX Login Page",
    category: "website",
    id: "mtx-login-page",
    year: "2023",
    status: "in progress",
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jest",
      "CodeSandbox",
    ],
    subheading: "Self-Challenge",
    description:
      "A self-challenge to create an application with intentionally miserable UX by locking text 'characters' behind a paywall. It features a simulated a login page environment in which the user must purchase 'characters' through a micro-transaction store. This project was created for fun as an avenue to improve my skills with Redux.",
    highlights: [
      "Simulated API requests using a local storage mock data layer and custom hooks",
      "Cached and memoized user data for data persistence",
      "Robust state management using Redux",
      "React-Toastify and React-Modal integration",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/mtx-login-page",
      },
      {
        icon: "Eye",
        text: "Live Demo",
        url: "https://mtx-login-page.vercel.app/",
      },
    ],
  },
  {
    projectName: "We Sell Users",
    category: "website",
    id: "we-sell-users",
    year: "2020",
    status: "complete",
    skills: [
      "VueJS",
      "ASPnet",
      "Csharp",
      "JavaScript",
      "HTML",
      "CSS",
      "AJAX",
      "SQL",
      "Trello",
    ],
    subheading: "Take-Home Challenge (one week)",
    description:
      "I built this project as part of a one week take-home challenge. I was given mock data in an excel sheet and tasked with designing a database and a full stack application to manage and display user data.",
    highlights: [
      "Successfully led to my employment at Richmond Day",
      "Project completed and deployed to Azure within one week",
      "Interactive interface to dynamically edit data",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/We-Sell-Users",
      },
    ],
  },
  {
    projectName: "Dog Dojo",
    category: "website",
    id: "dog-dojo",
    year: "2020",
    status: "complete",
    skills: [
      "VueJS",
      "ASPnet",
      "Csharp",
      "JavaScript",
      "HTML",
      "CSS",
      "AJAX",
      "SQL",
      "Trello",
      "Illustrator",
    ],
    subheading: "Learning Exercise",
    description:
      "I built this full stack application as a learning exercise. This project is a mock e-commerce website with a virtual storefront for 'buying' dogs. Though it is no longer live, I did establish an autodeploy pipeline using Azure DevOps. Controllers access SQL data using linq statements and leverage VueJS to display and modify data.",
    highlights: [
      "Mock e-commerce experience featuring item details, shopping cart, and checkout pages",
      "Dynamic routing for item detail pages",
      "Minimalist logo of a dog with a subtle tail wag animation that played whenever the user hovered over interactive elements",
    ],
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/Dog-Dojo",
      },
    ],
  },
  {
    projectName: "Portfolio Website",
    category: "website",
    id: "portfolio-website-2019",
    year: "2019",
    status: "complete",
    skills: [
      "NextJS",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Trello",
      "Illustrator",
    ],
    subheading: "Original Version",
    description:
      "A website I created as an avenue to learn NextJS, GitHub pages, and publicly host a portfolio of my work to market myself as a freelance web developer. This was the original concept of my current website.",
    links: [
      {
        icon: "GitHub",
        text: "Source Code",
        url: "https://github.com/WestonVincze/website",
      },
    ],
  },
];
