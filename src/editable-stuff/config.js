// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Suleiman",
  middleName: "",
  lastName: "Saka",
  message: "PhD Student | Security, Privacy & IoT Researcher | Innovating Secure & Accessible Technology for All",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sakasuleiman",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sakasuleiman/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/SakaSuleiman1",
    },
    
    {
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/researchgate.svg",
      url: "https://www.researchgate.net/profile/Suleiman-Saka",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sot.jpg"),
  imageSize: 375,
  message:
    "I'm Saka, a PhD Student at the University of Denver's Ritchie School of Engineering and Computer Science, specializing in cybersecurity and IoT privacy with a focus on creating secure, accessible technology for underrepresented groups, particularly older adults. I hold an MSc in Computer Network Security from the University of Greenwich, London. My research has been published in leading venues including CHI, IEEE BUILDSEC, and GSA. I'm passionate about developing innovative solutions that balance robust security with exceptional user experience, ensuring technology remains both safe and accessible for all users.",
  resume: "https://drive.google.com/file/d/1dY5P5lr1UxXtdjoBu7QgVEbbWrLSngak/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Selected Projects",
  gitHubUsername: "sakasuleiman", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/sakaheadshot.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/sot.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

export const education = {
  show: true,
  heading: "EDUCATION",
  degrees: [
    {
      institution: "UNIVERSITY OF DENVER",
      location: "Colorado, USA",
      degree: "PhD Computer Science",
      cgpa: "3.70/4.00",
      year: "Expected Fall 2026",
      courseworks: [
        "Human-Computer Interaction (HCI)",
        "Computer Security",
        "Ethical Hacking",
        "Networking",
        "Artificial Intelligence (AI)",
        "Human Centered AI",
        "Machine Learning",
        "Discrete Structure"
      ]
    },
    {
      institution: "UNIVERSITY OF GREENWICH",
      location: "London, UK",
      degree: "MSc Computer Network Security",
      cgpa: "3.79/4.00",
      year: "2015",
      courseworks: [
        "Information & Network Security Engineering",
        "Engineering & Implementation of Secure Computer Networks",
        "Engineering & Management of Secure Computer Networks",
        "Engineering Forensics",
        "Communications & Law"
      ]
    },
    {
      institution: "FEDERAL UNIVERSITY OF TECHNOLOGY",
      location: "Yola, Nigeria",
      degree: "B.Eng. (Hons) Electrical/Electronic Engineering",
      cgpa: "3.35/4.00",
      year: "2011",
      courseworks: ["Instrumentations", 
        "Control", 
        "Power", 
        "Electromechanical Devices",
         "Networking"
      ]
    }
  ]
};


export const research = {
  show: true,
  heading: "RESEARCH",
  googleScholarLink: "https://scholar.google.com/citations?user=GPeHcrAAAAAJ&hl=en",
  introduction: "My research focuses on the intersection of cybersecurity, privacy, and IoT, with a particular emphasis on developing secure and accessible solutions for real-world challenges. I aim to address the unique needs of underrepresented communities, including older adults, through innovative, human-centered design. This section highlights my key research projects, publications, and contributions to the field.",
  publications: [
    {
      conference: "CHI 2025",
      citation: "<strong>Saka S</strong>. & Das S. (2025), <strong>\"Watch My Health, Not My Data\": Understanding Perceptions, Barriers, Emotional Impact, & Coping Strategies Pertaining to IoT Privacy and Security in Health Monitoring for Older Adults</strong>",
      paperLink: "https://arxiv.org/abs/2503.03087"
    },
    {
      conference: "BuildSec 2024",
      citation: "<strong>Saka S</strong>. & Das S. (2024), <strong>Evaluating Privacy Measures in Healthcare Apps Predominantly Used by Older Adults</strong>",
      paperLink: "https://ieeexplore.ieee.org/document/10874253"
    },
    {
      conference: "WiSec 2025",
      citation: "<strong>Saka S</strong>. & Das S. (2024), <strong>SoK - Internet of Things Security and Privacy Posture Evaluation of Older Adults through Literature Review</strong> – Under review",
      paperLink: null
    },
    {
      conference: "ACM-TIoT",
      citation: "Tazi F. <strong>Saka S</strong>., Das S. (2024), <strong>A Multi-Dimensional Analysis of IoT Companion Apps: A Look at Privacy, Security, and Accessibility</strong> – Under review",
      paperLink: null
    },
    {
      conference: "GSA 2023",
      citation: "<strong>Saka S</strong>. & Das S. (2023), <strong>Abstract - Safeguarding in the Internet of Things Age: A Comprehensive Review of Security and Privacy Risks for Older Adults</strong>",
      paperLink: "https://academic.oup.com/innovateage/article/7/Supplement_1/819/7490692"
    },
    {
      conference: "CHI 2023",
      citation: "Tazi F. <strong>Saka S</strong>., Das S. (2023), <strong>Accessibility Evaluation of IoT Mobile Companion Apps</strong>",
      paperLink: "https://dl.acm.org/doi/abs/10.1145/3544549.3585652"
    },
    {
      conference: "COMSYS 2022",
      citation: "Wheeler M., <strong>Saka S</strong>., Das S. (2022), <strong>User Perception and Action Through Risk Analysis Concerning Cookies</strong>",
      paperLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4273297"
    }
  ]
};


export const experience = {
  show: true,
  heading: "EXPERIENCE",
  positions: [
    {
      company: "University of Denver, Ritchie School of Engineering & Computer Science",
      location: "Denver, CO",
      title: "Graduate Teaching/Research Assistant (GTA/GRA)",
      duration: "01/2023 - Present",
      responsibilities: [
        "Provide teaching assistance, tutorials, grade projects, assignments and review lab work for Introduction to Programming, Computer Science, Probability and Statistics.",
        "Organize lab sessions for students, help students during office hours, and provide guidance on projects.",
        "Conduct research focused on IoT Security and Privacy for older adults, contributing to academic publications in top-tier venues including CHI and IEEE BuildSec."
      ]
    },
    {
      company: "University of Denver, Department of Facility",
      location: "Denver, CO",
      title: "Space Technology & Indoor GIS Development Assistant",
      duration: "Summer 2023 & 2024",
      responsibilities: [
        "Designed and developed an indoor GIS system for precision navigation and space management.",
        "Conducted spatial audits and maintained accurate records of campus space usage.",
        "Used GIS tools and space management software to update and track space assignments.",
        "Collaborated with facility managers and developers to optimize space planning and data accuracy.",
        "Assisted in testing and validating GIS software across campus buildings for seamless indoor navigation."
      ]
    },
    {
      company: "Nigerian Television Authority",
      location: "Abuja, Nigeria",
      title: "Transmission/IT Engineer",
      duration: "05/2015 – 12/2022",
      responsibilities: [
        "Designed and implemented network architecture, optimizing system performance and security.",
        "Provided technical support, assisted with software installations, and introduced new IT products.",
        "Maintained 24/7 television broadcast infrastructure, ensuring uninterrupted service delivery.",
        "Collaborated with cross-functional teams to troubleshoot technical issues and implement improvements.",
        "Contributed to strategic IT planning to meet evolving broadcast technology requirements."
      ]
    }
  ]
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "R", value: 75 },
    { name: "UX/UI Design (Figma)", value: 90 },
    { name: "Data Structures", value: 75 },
    { name: "C/C++", value: 55 },
    { name: "Cybersecurity", value: 80 },
    { name: "Research Writing", value: 85 },
    { name: "Network Administration", value: 85 },
    { name: "System Administration", value: 80 },
    { name: "GIS (Geospatial Analysis)", value: 70 },  
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always excited to connect with like-minded professionals, collaborate on innovative projects, or discuss research opportunities in cybersecurity, privacy, and IoT. Feel free to reach out—I'd love to hear from you!",
  email: "suleiman.saka@du.edu",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
