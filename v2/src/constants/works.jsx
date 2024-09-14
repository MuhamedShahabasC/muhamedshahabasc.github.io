import assets from "./../assets/portfolio/index";

export const portfolioData = [
  {
    id: 1,
    image: assets.hostelManagement,
    title: "Hostel Management",
    category: "Full Stack",
    description:
      "TypeScript | React | MongoDB | NodeJS | ExpressJS | TailwindCSS | AWS EC2 | Repository Pattern",
    projectLinks: {
      project: "https://hostelmanagement.tech",
      repo: {
        frontend:
          "https://github.com/MuhamedShahabasC/Hostel_Management_FRONTEND",
        backend: "https://github.com/MuhamedShahabasC/Hostel_Mangement_BACKEND",
      },
    },
  },
  {
    id: 2,
    image: assets.timelessWatch,
    title: "Timeless Watches",
    category: "E Commerce Application",
    description: "JS | NodeJS | MongoDB | Bootstrap5",
    projectLinks: {
      project: "https://timelessWatches.in",
      repo: "https://github.com/MuhamedShahabasC/TIMELESS-eCommerce",
    },
  },
  {
    id: 3,
    image: assets.netflixClone,
    title: "Netflix Clone",
    category: "Frontend",
    description: "ReactJS",
    projectLinks: {
      project: "https://netflix-clone-react-22.netlify.app/",
      repo: "https://github.com/MuhamedShahabasC/Netflix-Clone-React",
    },
  },
  {
    id: 4,
    image: assets.passwordGen,
    title: "Password Generator and Manager",
    category: "Web Development",
    description: "React | FireStore | Google Auth | Tailwind | Netlify",
    projectLinks: {
      project: "https://password-generator-reactbwtask.netlify.app/",
      repo: "https://github.com/MuhamedShahabasC/Password_Generator_FrontEnd",
    },
  },
  {
    id: 5,
    image: assets.yearlyExp,
    title: "Yearly Expense Tracker",
    category: "Frontend",
    description: "ReactJS | Netlify",
    projectLinks: {
      project: "https://yearly-expenses-tracker-react.netlify.app/",
      repo: "https://github.com/MuhamedShahabasC/Yearly-Expense-React",
    },
  },
];

export const portfolioNav = [
  {
    title: "all",
  },
  {
    title: "Full Stack",
  },
  {
    title: "Frontend",
  },
];
