import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vagish Dilawari",
  initials: "VD",
  url: "https://dilawari2008.github.io",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  summary:
    "Full Stack Developer with experience in building scalable applications. When not spending two hours hunting down a missing semicolon, I love solving real problems, learning new tech stacks, and helping others—all while maintaining a healthy relationship with the debugger that knows my code better than I do.",
  description:
    "Had the time of my life at IIT Roorkee with a Mechanical Engineering degree, only to realize I prefer debugging code to fixing engines.",
  avatarUrl: "/me.jpg",
  skills: [
    "Typescript",
    "Node.js",
    "Go",
    "Python",
    "React",
    "Next.js",
    "TailwindCSS",
    "Mongo",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "AWS",
    "Solidity",
    "Ethers.js",
    "gRPC",
    "Redis",
    "Terraform",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dilawari2008@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dilawari2008",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vagish-dilawari",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/DilawariVagish",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dilawari2008@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Fibr.ai",
      href: "https://fibr.ai",
      badges: ["Accel backed early stage startup"],
      location: "Bangalore, India",
      title: "Software Engineer",
      logoUrl: "/fibr.jpeg",
      start: "March 2023",
      end: "Present",
      description:
        "Architected robust Analytics Service and Job Scheduler handling millions of events while establishing end-to-end deployment pipelines using AWS services, Terraform, and GitHub Workflows. Integrated comprehensive suite of third-party platforms including OpenAI, Google, Meta, Shopify, Amazon, and Razorpay to enable personalized content generation and seamless payment processing.",
    },
    {
      company: "Amazon",
      href: "https://amazon.com",
      badges: [],
      location: "Bangalore, India",
      title: "Software Engineer",
      logoUrl: "/amazon.jpeg",
      start: "November 2022",
      end: "March 2023",
      description:
        "As part of the Selling Partner Services team, contributed to the Human In The Loop project responsible for developing a multi-stage compliance-validation system to prevent prohibited items (hazmat, firearms) from being listed.",
    },
    {
      company: "Fareye",
      href: "https://fareye.com",
      badges: [],
      location: "Noida, India",
      title: "Software Engineer",
      logoUrl: "/fareye.jpeg",
      start: "July 2021",
      end: "November 2022",
      description:
        "Architected a Rate Calculation Service for logistics pricing with dynamic factors, while implementing role-based data masking for sensitive information in the core MOBI Service and developing a comprehensive Reports Dashboard for critical business metrics.",
    },
    {
      company: "Optum",
      href: "https://optum.com",
      badges: [],
      location: "Bangalore, India",
      title: "Product Intern",
      logoUrl: "/optum.jpeg",
      start: "May 2020",
      end: "June 2020",
      description:
        "Developed the frontend from scratch for a Udemy-like Learning Management System using ReactJs.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Roorkee",
      href: "https://iitr.ac.in",
      degree: "B.Tech. Mechanical Engineering",
      logoUrl: "/iitr.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Scroll Open Hackathon",
      href: "https://github.com/dilawari2008/ComputeHardwareRWA_Scroll",
      dates: "Mar 2025",
      active: true,
      description:
        "Developed a marketplace for renting and fractionalizing ownership over expensive Compute RWA such as GPUs and ASICs.",
      technologies: ["Solidity", "EthersJs", "Scroll", "NodeJs"],
      links: [],
      image: "/rwa.png",
      video: "",
    },
    {
      title: "Reactive.Network Web3 Hackathon",
      href: "https://github.com/dilawari2008/ContentVerificationPlatform",
      dates: "Nov 2024",
      active: true,
      description:
        "Demonstrated how Reactive Smart Contracts can be leveraged to make event-driven workflows, with the help of content verification on an NFT Marketplace use case. Won 2nd place.",
      technologies: ["Solidity", "Typescript", "Ethers.js"],
      links: [],
      image: "/reactive.png",
      video: "",
    },
    {
      title: "BalancerV3 Web3 Hackathon",
      href: "https://github.com/dilawari2008/BalancerAMM-VolatilityLoyaltyHook",
      dates: "Oct 2024",
      active: true,
      description:
        "Designed and implemented a dynamic fee adjustment system for Balancer DEX liquidity-pools that optimizes swap fees based on user loyalty metrics and real-time market volatility indicators. Won 1st place.",
      technologies: ["Solidity", "Typescript", "Foundry", "Ethers.js"],
      links: [],
      image: "/balancer.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Scroll Open Hackathon",
      dates: "March 2025",
      location: "Virtual",
      description:
        "Developed a marketplace for renting and fractionalizing ownership over expensive Compute RWA such as GPUs and ASICs.",
      image: "",
      links: [],
    },
    {
      title: "Reactive.Network Web3 Hackathon",
      dates: "November 2024",
      location: "Virtual",
      description:
        "Demonstrated how Reactive Smart Contracts can be leveraged to make event-driven workflows, with the help of content verification on an NFT Marketplace use case.",
      image: "",
      win: "2nd Place",
      links: [],
    },
    {
      title: "BalancerV3 Web3 Hackathon",
      dates: "October 2024",
      location: "Virtual",
      description:
        "Designed and implemented a dynamic fee adjustment system for Balancer DEX liquidity-pools that optimizes swap fees based on user loyalty metrics and real-time market volatility indicators.",
      image: "",
      win: "1st Place",
      links: [],
    },
  ],
  research: [
    {
      title:
        "Chemical equilibrium analysis of energetic materials using Particle Swarm Optimization",
      publication: "Elsevier, Fluid Phase Equilibria",
      year: "2020",
      authors: "Naveen Kumar, Vagish Dilawari, Ankit Bansal",
      link: "#",
    },
  ],
} as const;
