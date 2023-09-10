/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gana",
  title: "Hello, I'm Gana",
  subTitle: emoji(
    "A passionate Site Reliability Engineer 🚀, Tech Enthusiast with Entrepreneurial mindset and a self-taught programmer. I love building systems that can thrive in chaos."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1z3FLwXRHxqDQD0EHUQuW_nS3iMXYAyuB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ganarko",
  linkedin: "https://www.linkedin.com/in/ganarko/",
  gmail: "ganarko@yahoo.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/gana.praveen.7/",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/12585533/gana-sai-praveen",
  instagram: "https://www.instagram.com/gana_rko/",
  //  Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Curious SRE Who loves to Design Reliable and Scalable Systems",
  skills: [
    emoji(
      "⚡ Build, Maintain Sophisticated and Resilient Infrastructure"
    ),
    emoji("⚡ Automate as much as Possible"),
    emoji(
      "⚡ Understand & Optimize Infrastructure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Problem Solving",
      fontAwesomeClassname: "fa-solid fa-brain"
    },
    {
      skillName: "Automation",
      fontAwesomeClassname: "fa-solid fa-gears"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fa-brands fa-python"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fa-solid fa-terminal"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa-solid fa-microchip"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fa-brands fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fa-brands fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fa-brands fa-jenkins"
    },
    {
      skillName: "Observability",
      fontAwesomeClassname: "fa-solid fa-list-check"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fa-solid fa-network-wired"
    },
    {
      skillName: "Operating Systems",
      fontAwesomeClassname: "fa-solid fa-server"
    },
    {
      skillName: "Distributed Systems",
      fontAwesomeClassname: "fa-solid fa-sitemap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BITS Pilani",
      logo: require("./assets/images/bits.png"),
      subHeader: "Bachelor of Engineering in Electrical and Electronics Engineering",
      duration: "July 2017 - July 2021",
      desc: "Birthplace of my Engineering Soul",
      descBullets: [
        "It's Magic",
        "Culture, Campus Life and Peers"
      ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya",
      logo: require("./assets/images/jnv.webp"),
      subHeader: "Class 10th",
      duration: "July 2012 - July 2014",
      desc: "Being a Navodayan since..",
      descBullets: [
        "Place to learn Self-sufficiency",
        "Most Memorable School life"
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Infracture", //Insert stack or technology you have experience in
      progressPercentage: "72%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Automation",
      progressPercentage: "78%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Site Reliability Engineer",
      company: "media.net",
      companylogo: require("./assets/images/mnet.png"),
      date: "Jul 2021 – Present",
      desc: "trying to deliver ads faster, while you're browsing.",
      descBullets: [
        "Highly Focused mode, during Black Friday",
        "It's all about Latency, Scalability, Availability, Observability and Automation "
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "TTEC",
      companylogo: require("./assets/images/ttec.png"),
      date: "Jan 2021 – Jun 2021",
      desc: "Identify and Automate Internal Business processes."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Hobbies",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hackathons",
      subtitle:
        "I love challenges and usually participate in hackathons at least once a year.",
      image: require("./assets/images/hackathons.png"),
      imageAlt: "Hackathos",
      footerLink: [
        {
          name: "EXL Hackathon 2022 (Top 1%)",
          url: "https://drive.google.com/file/d/1c3jLQUARA0wx-pH5YtQeZceVPEec4eTL/view?usp=sharing"
        },
        {
          name: "Aerothon 2021 (Finalist)",
          url: "https://drive.google.com/file/d/10irZ8Q8tDN9Dc__1LipqVR3joOWVzv2P/view?usp=sharing"
        }
      ]
    },
    {
      title: "Learnings",
      subtitle:
        "I belive in continuous learning, I upskill myself with my job relavent courses on NPTEL.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Design and Engineering of Sytems",
          url: "https://archive.nptel.ac.in/content/noc/NOC22/SEM1/Ecertificates/106/noc22-cs38/Course/NPTEL22CS38S34130073NPTEL2201036865.jpg"
        },
        {
          name: "Ethical Hacking",
          url: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs44/Course/NPTEL23CS44S5450008704114677.jpg"
        },
        {
          name: "Cloud Computing and Distributed Systems",
          url: "https://archive.nptel.ac.in/content/noc/NOC21/SEM1/Ecertificates/106/noc21-cs15/Course/NPTEL21CS15S22180056025125.jpg"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and share my experiences",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://heygana.lol/",
      title: "My First blog",
      description:
        "May be on Travel or Tech (Soon, I hope)"
    }
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Personal Space",
  subtitle: emoji(
    "You Find me interesting? 😅"
  ),

  talks: [
    {
      title: "Compatability Quiz",
      subtitle: "Let's check our compatability ...",
      slides_url: "https://docs.google.com/forms/d/e/1FAIpQLSdOJxPuKcPFSSSo7my7Fr6-EmUshHJxPTU9U3_EXYEyIOAcfA/viewform",
      event_url: "https://docs.google.com/forms/d/e/1FAIpQLSdkt10hrr6wq7xx7vRuzTj_jfy-nwHFbfPPCciwV3m2a2I5yQ/viewform"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Hobbies & Intrests"),
  subtitle: "Cricket, Travelling, Photography, Long Drives, Visiting Temples, Hiking, Music ....",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    emoji("Just want to say hi? Then Please don't 😅. I prefer Deep conversations, rather than small talks."),
  number: "+91-0000000000",
  email_address: "ganasaipraveen9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
