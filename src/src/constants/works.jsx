import assets from "../assets/portfolio/index";

export const portfolioData = [
  {
    id: 1,
    image: assets.hostelManagement,
    title: "Hostel Management System",
    category: "Full Stack",
    type: "Platform",
    description: "Comprehensive hostel management platform with three interfaces for students, admin, and staff. Features role-based access control, room allocation with disability support, issue tracking system, real-time communication using Socket.io, and Razorpay payment integration.",
    projectLinks: {
      project: "https://hostelmanagement.tech",
      repo: {
        frontend: "https://github.com/MuhamedShahabasC/Hostel_Management_FRONTEND",
        backend: "https://github.com/MuhamedShahabasC/Hostel_Mangement_BACKEND",
      },
    },
  },
  {
    id: 2,
    image: assets.timelessWatch,
    title: "Timeless Watches E-commerce",
    category: "Full Stack",
    type: "E-commerce",
    description: "Full-fledged e-commerce application for luxury watches with separate admin and user interfaces. Features complete authentication system, comprehensive order management with delivery status tracking, automated invoice generation and printing capabilities, and PayPal payment gateway integration.",
    projectLinks: {
      project: "https://timelessWatches.in",
      repo: "https://github.com/MuhamedShahabasC/TIMELESS-eCommerce",
    },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    title: "NEET Exam Preparation Platform",
    category: "Full Stack",
    type: "EdTech",
    description: "Comprehensive EdTech platform with mock exam environment simulating real NEET conditions. Features course sales, question bank marketplace, timed assessments, detailed performance analytics, and separate admin/student portals with full authentication.",
    isPlaceholder: true,
    projectLinks: {
      project: null,
      repo: null,
    },
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    title: "Bus Booking Application",
    category: "Full Stack",
    type: "Booking",
    description: "Production-ready bus booking platform for Bangalore routes with PhonePe payment integration. Integrates multiple vendor APIs for real-time seat availability, booking management, and dynamic pricing.",
    isPlaceholder: true,
    projectLinks: {
      project: null,
      repo: null,
    },
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    title: "Entrepreneur-Investor Network",
    category: "Full Stack",
    type: "Social",
    description: "Social networking platform connecting entrepreneurs with investors. Features dual-sided interface, real-time messaging with WebSockets, connection management, posts, notifications, comments, and reactions.",
    isPlaceholder: true,
    projectLinks: {
      project: null,
      repo: null,
    },
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    title: "Student Project Collaboration Platform",
    category: "Full Stack",
    type: "Social",
    description: "Social network for students to share project ideas and collaborate. Features project posting with objectives, requirements, team size, and collaboration tools including invites, reviews, and team management.",
    isPlaceholder: true,
    projectLinks: {
      project: null,
      repo: null,
    },
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    title: "Forex Trading Advisory Website",
    category: "Frontend",
    type: "Website",
    description: "Professional corporate website for a forex trading advisory firm. Modern, responsive design showcasing services, market insights, and client resources with smooth animations and optimized performance.",
    isPlaceholder: true,
    projectLinks: {
      project: null,
      repo: null,
    },
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    title: "Homemade Food Delivery Platform",
    category: "Frontend",
    type: "Website",
    description: "B2B food delivery platform connecting homemade food providers with offices. Clean, appetizing UI with menu browsing, order placement interface, and delivery scheduling for corporate clients.",
    isPlaceholder: true,
    projectLinks: {
      project: null,
      repo: null,
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
