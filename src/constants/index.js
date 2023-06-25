import {
    mobile,
    frontend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    python,
    java,
    git,
    figma,
    android,
    fintrex,
    ecovision,
    myfintrex,
    portfolio,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Fronend Developer",
      icon: frontend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Mobile and Web Application Developer",
      company_name: "Fintrex Finance Limited, Sri Lanka",
      icon: fintrex,
      iconBg: "#383E56",
      date: "October 2020 - November 2022",
      points: [
        'Developed and launched its mobile application "MyFintrex" with the primary purpose of expanding its reach, providing customer convenience for ease of obtaining information.',
        'Supported the entire application lifecycle of the internal systems.',
        'Gathered specific requirements and suggest solutions.',
        'Implemented unit and UI tests to identify malfunctions in the developing systems.',
        'Designed interfaces to improve User Experience.',
        'Liaised with product development team to plan new features.'

        ],
    },
    {
      title: "Executive Assistant",
      company_name: "Eco Vision Holdings (Pvt) Limited, Sri Lanka",
      icon: ecovision,
      iconBg: "#383E56",
      date: "March 2018 - September 2020",
      points: [
          'Provided administrative assistance, such as sending emails, managing calendar, making appointments and preparing communications.',
          'Organized meetings with the clients and other necessary parties.',
          'Performed minor accounting duties.',
          'Answered phone calls in a polite and professional manner.',
          'Welcomed visitors and identifying the purpose of their visit before directing them to the appropriate department.'

        ],
    },
    
  ];
  

  
  const projects = [
    {
      name: "My Fintrex",
      description:
          "As part of its digitalization strategy, trailblazer, launched ‘MyFintrex’ mobile app with the primary purpose of expanding company's reach, providing customer convenience for ease of obtaining information.",
        tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: myfintrex,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
          "This is my own portfolio to showcase my Educational background, Career background, Skills and Expertise in my field. This is the most impressive website with 3D graphics, animations and ensure responsiveness across all devices",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Three.JS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, projects };