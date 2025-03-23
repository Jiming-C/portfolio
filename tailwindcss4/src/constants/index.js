import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer and Computer Science major at the University of Maryland, dedicated to creating innovative, robust, and scalable web applications. My hands-on experience ranges from developing AI-driven solutions in aerial systems to crafting dynamic web applications, and I am committed to delivering exceptional user experiences.`;

export const ABOUT_TEXT = `Currently pursuing a Bachelor of Science in Computer Science at the University of Maryland—with a minor in General Business—I bring a diverse skill set and hands-on experience from roles such as Navigation & Object Detection Engineer at MUAS, Software Development Intern at Johns Hopkins APL, and Founder of my own startup, NIO Detailing. I am proficient in a range of programming languages and frameworks and thrive in fast-paced, collaborative environments where innovation is key.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 – Present",
    role: "Navigation & Object Detection Engineer",
    company: "Maryland Unmanned Aerial System (MUAS)",
    description: `• Reduced collision risk by 40% using AI-driven obstacle avoidance with dynamic path planning in Ardupilot.
• Boosted aerial analysis accuracy by 35% via real-time object detection with YOLO and TensorFlow/OpenCV.
• Achieved a 28% reduction in energy consumption and a 99% mission success rate by applying reinforcement learning for optimized flight paths.`,
    technologies: ["Ardupilot", "YOLO", "TensorFlow", "OpenCV", "Reinforcement Learning"],
  },
  {
    year: "Oct 2023 – May 2024",
    role: "Software Development Intern",
    company: "Johns Hopkins University Applied Physics Laboratory",
    description: `
    • Engineered a C# plugin to automate workflows, increasing process efficiency by 80% and significantly reducing manual effort.
• Automated updates, diagnostics, and license management for enterprise software, saving over 5 hours per week.
• Designed a 3D CAD model for a Cybertruck suspension system and exoskeleton prototype using Creo Parametric.`,
    technologies: ["C#", "CAD", "Creo Parametric"],
  },
  {
    year: "Apr 2023 – Present",
    role: "Founder",
    company: "NIO Detailing",
    description: `• Developed and maintained a company website with automated scheduling and API integration, reducing manual booking time by 70%.
• Launched a Google Ads campaign driving 19K+ interactions and 400+ conversions, increasing bookings by 42%.
• Implemented SEO strategies that boosted organic traffic by 32% within two weeks.`,
    technologies: ["HTML", "CSS", "API Integration", "SEO", "Google Ads"],
  },
];

export const PROJECTS = [
  {
    title: "AI Vehicle Electronic Control Unit",
    image: project1,
    description: `Developing an ECU simulator for vehicle diagnostics that integrates Google Gemini AI models for fault prediction.
Built a real-time Flask dashboard to visualize AI-driven insights and predictive maintenance alerts.
Simulated multi-threaded vehicle control in C to replicate CAN bus communication.`,
    technologies: ["C", "Python", "TensorFlow", "Flask"],
  },
  {
    title: "Online Order Processing System",
    image: project2,
    description: `Designed a multithreaded Java application to process over 10 million orders, resulting in a 40% increase in processing speed.
Optimized data workflows using merge sort, quicksort, and binary search.
Developed a scalable architecture for real-time client reports and sales analytics.`,
    technologies: ["Java", "Multithreading", "Sorting Algorithms"],
  },
  {
    title: "BlackJack Game",
    image: project3,
    description: `Developed a Java-based Blackjack game featuring AI players with dynamic strategies.
Simulated over 10 million games to test AI strategies, employing a blend of Hi-Lo and Omega II card counting to reduce the house edge to 2.5%.
Achieved a player win rate of 52% through realistic deck simulation.`,
    technologies: ["Java", "AI", "Game Development"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description: `A platform for creating and publishing blog posts with rich text editing, commenting, and user profiles.
Offers a seamless experience for both authors and readers.`,
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
  },
];

export const CONTACT = {
  address: "Ellicott City, Maryland",
  phoneNo: "+1 202-683-0789",
  email: "jimingchen2015@gmail.com",
  linkedin: "https://linkedin.com/in/jimingc",
};
