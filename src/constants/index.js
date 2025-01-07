import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    stackbox,
    capgemini,
    carrent,
    jobit,
    tripguide,
    threejs,
    minature,
    kanimuni,
    sbx,
    kamakhya,
    koolphool,
    togather
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "resume",
      title: "Resume",
    }
  ];
  
  const services = [
    {
      title: "UX/UI Designer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Dev",
      icon: mobile,
    },
    {
      title: "Visual Identity",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "UI/UX Design Intern",
      company_name: "Stackbox",
      icon: stackbox,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Designed and developed Camera Surveillance feature for HUL as part of Samadhan Project to help with quantity mismatch issues in warehouses.",
        "Created wireframes, user journey flows, and high-fidelity screens, then implemented them using react.",
        "Designed and developed mobile app module for visualization of various handling units (pellets, carton, bins, etc. and the contents inside them."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Stackbox",
      icon: stackbox,
      iconBg: "#383E56",
      date: "July 2022 - July 2023",
      points: [
        "Digitized warehouse operations across Southeast Asia with intuitive workflows.",
        "Designed a cockpit for real-time session tracking and file uploads.",
        "Built role-based user management with efficient caching.",
        "Developed a dashboard to monitor work order statuses.",
        "Enabled inventory tracking by quality and handling units.",
        "Implemented yard management to reduce truck turnaround time automating dock allocation, warehouse mapping, and pick paths.",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company_name: "Capgemini India Ltd.",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Aug 2019 - May 2021",
      points: [
        "Managed applications for Ahold Delhaize’s Retail team, supporting daily operations.",
        "Developed code with unit testing and integration testing providing support during functional testing.",
        "Handled incidents on day to day basis alongside monitoring daily jobs and operations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ToGather",
      sub_name: "PRODUCT DESIGN",
      description:
        "Application concept to plan weekend outings, dinners, and social events. The solution aims to reduce the time and effort spent on deciding where to go by offering curated suggestions based on preferences and location.",
      tags: [
        {
          name: "ux research",
          color: "blue-text-gradient",
        },
        {
          name: "design methods",
          color: "green-text-gradient",
        }
      ],
      image: togather,
      source_code_link: "https://www.behance.net/gallery/206989573/toGather-meeting-friends-made-easy",
    },
    {
      name: "Kanimuni",
      sub_name: "WEBSITE DESIGN",
      description:
        "Developed a single page website for the Kanimuni workshop on educational game design that promotes learning concepts fun, held at IIT Guwahati’s Department of Design (Dec 8–17, 2023).",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "ux/ui design",
          color: "green-text-gradient",
        },
        {
          name: "frontend",
          color: "pink-text-gradient",
        }
      ],
      image: kanimuni,
      source_code_link: "https://www.behance.net/gallery/184709383/Website-Design-and-Dev-Kanimuni-Game-Design-Workshop",
    },
    {
      name: `Stackbox${"\u00A0".repeat(1.5)}Internship`,
      sub_name: "PRODUCT DESIGN",
      description:
        "Designed and developed a Camera Surveillance feature for HUL as part of Samadhan Project to help with quantity mismatch issues at SBL (Sort by Light), PTL (Put to Light) and QC (Qualty Check) stations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "vidstack",
          color: "green-text-gradient",
        },
        {
          name: "frontend",
          color: "pink-text-gradient",
        }
      ],
      image: sbx,
      source_code_link: "https://www.behance.net/gallery/206509415/Camera-Surveillance-for-WMS-Stackbox-Internship",
    },
    {
      name: "KoolPhool",
      sub_name: "UX RESEARCH",
      description:
        "Design intervention to improve the experience of flower vendors in the context of Indian flower market with a focus on preservation and presentation of cut flowers and garlands.",
      tags: [
        {
          name: "design methods",
          color: "blue-text-gradient",
        },
        {
          name: "social innovation",
          color: "green-text-gradient",
        }
      ],
      image: koolphool,
      source_code_link: "https://www.behance.net/gallery/184671607/KoolPhool-Indian-flower-market-UX-case-study",
    },
    {
      name: "Minature",
      sub_name: "BRANDING",
      description:
        "Comprehensive brand identity for Minature Terrarium Store, including mission, vision, target audience, logo, typography, visual language, packaging design, and marketing materials",
      tags: [
        {
          name: "logo design",
          color: "blue-text-gradient",
        },
        {
          name: "packaging",
          color: "green-text-gradient",
        },
        {
          name: "visual identity",
          color: "pink-text-gradient",
        }
      ],
      image: minature,
      source_code_link: "https://www.behance.net/gallery/195917103/Brand-Identity-Design-MINATURE",
    },
    {
      name: `Kamakhya${"\u00A0".repeat(1.5)}Temple`,
      sub_name: "WAYFINDING",
      description:
        "A system with maps, directional, informational, emergency, and identification signage featuring illustrative iconographies of the temple’s deities to enhance navigation.",
      tags: [
        {
          name: "information design",
          color: "blue-text-gradient",
        },
        {
          name: "signage design",
          color: "green-text-gradient",
        }
      ],
      image: kamakhya,
      source_code_link: "https://www.behance.net/gallery/196716091/Kamakhya-temple-Signages-and-Wayfindings",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };