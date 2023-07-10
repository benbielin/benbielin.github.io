import { InfoPropsType, InfoRowPropsType } from "../types";

export const items = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Badminton",
    link: "/badminton",
  },
  {
    text: "Cooking",
    link: "/cooking",
  },
  {
    text: "Memes",
    link: "/memes",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const infoRowEducationOhlone: InfoRowPropsType = {
  title: "Education: Ohlone College",
  infoCards: [
    {
      title: "Dual Enrollment",
      descriptions: [
        "CS 102: C++ Programming",
        "CS 113: Discrete Structures",
        "Math 101C: Multivariable Calculus",
        "Math 103: Intro to Linear Algebra",
      ],
    },
  ],
};

const infoRowEducationBerkeley: InfoRowPropsType = {
  title: "Education: University of California, Berkeley",
  infoCards: [
    {
      title: "B.A., Computer Science",
      descriptions: [
        "CS 61A: Computer Programs",
        "CS 61B: Data Structures & Algorithms",
        "CS 61C: Computer Architecture",
        "CS 161: Computer Security",
        "CS 162: Operating Systems",
        "CS 170: Efficient Algorithms",
        "CS 186: Database Systems",
        "CS 189: Machine Learning",
        "CS 198-126: Modern Techniques in ML",
        "CS 198-750: Web Development",
        "EECS 127: Optimization",
      ],
    },
    {
      title: "B.A., Data Science",
      descriptions: [
        "Data 8: Data Science",
        "Data 100: Principles & Techniques of DS",
        "Data 104: Ethics of Data Science",
        "Data 140: Probability for Data Science",
        "Stat 133: Computing for Statistics",
        "Stat 135: Concepts of Statistics",
        "Stat 150: Stochastic Processes",
      ],
    },
    {
      title: "B.A., Applied Mathematics",
      descriptions: [
        "Math 54: Linear Algebra",
        "Math 104: Real Analysis",
        "Math 110: Advanced Linear Algebra",
        "Math 113: Abstract Algebra",
        "Math 128A: Numerical Analysis",
        "Math 185: Complex Analysis",
      ],
    },
  ],
};

export const infoCardsEducation: InfoPropsType = {
  title: "EDUCATION",
  infoRows: [infoRowEducationBerkeley, infoRowEducationOhlone],
};

const infoCardsExperienceWork: InfoRowPropsType = {
  title: "Industry",
  infoCards: [
    {
      title: "Nextdoor",
      descriptions: ["software engineer intern"],
    },
    {
      title: "Cognixus Technologies",
      descriptions: ["software engineer intern"],
    },
  ],
};

const infoCardsExperienceCDSS: InfoRowPropsType = {
  title: "UC Berkeley College of Computing, Data Science, and Society",
  infoCards: [
    {
      title: "Data 140 Course staff",
      descriptions: ["course staff"],
    },
  ],
};

const infoCardsExperienceEECS: InfoRowPropsType = {
  title:
    "UC Berkeley Department of Electrical Engineering and Computer Science",
  infoCards: [
    {
      title: "CS 70 Academic Intern",
      descriptions: ["course staff"],
    },
    {
      title: "CS 61A Academic Intern",
      descriptions: ["course staff"],
    },
  ],
};

const infoCardsExperienceCSM: InfoRowPropsType = {
  title: "UC Berkeley Computer Science Mentors",
  infoCards: [
    {
      title: "CS 61A Senior Associate Mentor",
      descriptions: ["bruh"],
    },
    {
      title: "CS 61AAssociate Mentor",
      descriptions: ["bruh"],
    },
    {
      title: "CS 61A Junior Mentor",
      descriptions: ["bruh"],
    },
  ],
};

export const infoCardsExperience: InfoPropsType = {
  title: "EXPERIENCE",
  infoRows: [
    infoCardsExperienceWork,
    infoCardsExperienceCDSS,
    infoCardsExperienceEECS,
    infoCardsExperienceCSM,
  ],
};

const infoCardsProjectsSchool: InfoRowPropsType = {
  title: "School projects",
  infoCards: [
    {
      title: "Map Reduce",
      descriptions: ["temp"],
    },
    {
      title: "PintOS",
      descriptions: ["temp"],
    },
    {
      title: "Git(let)",
      descriptions: ["temp"],
    },
    {
      title: "Secure Database System",
      descriptions: ["temp"],
    },
    {
      title: "Build Your Own World",
      descriptions: ["temp"],
    },
    {
      title: "Chess",
      descriptions: ["temp"],
    },
  ],
};

const infoCardsProjectsPersonal: InfoRowPropsType = {
  title: "Personal Projects",
  infoCards: [
    {
      title: "League of Legends Esports Stats",
      descriptions: ["temp"],
    },
    {
      title: "Discord Bot",
      descriptions: ["temp"],
    },
    {
      title: "Math App",
      descriptions: ["temp"],
    },
    {
      title: "Penguins",
      descriptions: ["temp"],
    },
    {
      title: "IBM Data Science Capstone",
      descriptions: ["temp"],
    },
    {
      title: "This website???",
      descriptions: ["temp"],
    },
  ],
};

export const infoCardsProjects: InfoPropsType = {
  title: "PROJECTS",
  infoRows: [infoCardsProjectsPersonal, infoCardsProjectsSchool],
};
