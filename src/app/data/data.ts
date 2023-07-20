import { InfoPropsType, InfoRowPropsType, MemeListPropsType } from "../types";

export const navBarItems = [
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
    text: "Random",
    link: "/random",
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
        "Stat 156: Causal Inference",
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
      descriptions: [
        "May 2023 - August 2023",
        "Software engineer intern at Nextdoor Inc.",
        "Skills: React, Graph QL, Typescript, Python, and React Testing Library.",
      ],
    },
    {
      title: "Cognixus Technologies",
      descriptions: [
        "May 2022 - August 2022",
        "Software engineer intern at Cognixus Technologies",
        "Skills: Java, Golang, Apache Kafka, and Docker.",
      ],
    },
  ],
};

const infoCardsExperienceCDSS: InfoRowPropsType = {
  title: "UC Berkeley College of Computing, Data Science, and Society",
  infoCards: [
    {
      title: "Data 140 Course Staff",
      descriptions: [
        "January 2023 - May 2023",
        "Data 140 is an upper division probability course for data science majors\
         at UC Berkeley. I really enjoy probability and statistics, and this \
         teaching this course was really fun!",
      ],
    },
  ],
};

const infoCardsExperienceEECS: InfoRowPropsType = {
  title:
    "UC Berkeley Department of Electrical Engineering and Computer Science",
  infoCards: [
    {
      title: "CS 70 Academic Intern",
      descriptions: [
        "June 2023 - August 2023",
        "CS 70 is a lower division prerequisite to the CS major at UC Berkeley",
        "The course teaches both discrete math and probability.",
        "Interestingly, I never took this course, as I took discrete math in the \
        math department and probability in the data science college.",
        "Teaching this course made me realize what I missed :(",
      ],
    },
    {
      title: "CS 61A Academic Intern",
      descriptions: [
        "June 2022 - August 2022",
        "CS 61A is usually a prospective CS major's first computer science course \
        at UC Berkeley!",
        "The course teaches fundamentals of programming such as functions and \
        recursion.",
        "It was one of my favorite courses at UC Berkeley! I really enjoyed the \
        way the course taught me how to code.",
        "Unfortunately, I don't have enough units to be an academic intern each \
        semester, which is why I decided to contribute via CSM.",
      ],
    },
  ],
};

const infoCardsExperienceCSM: InfoRowPropsType = {
  title: "UC Berkeley Computer Science Mentors",
  infoCards: [
    {
      title: "CS 61A Senior Associate Mentor",
      descriptions: [
        "August 2023 - December 2023",
        "This semester, I will be taking more of a leadership \
        role.",
        "I hope that I can help other aspiring mentors on their \
        journey of teaching CS 61A.",
      ],
    },
    {
      title: "CS 61A Associate Mentor",
      descriptions: [
        "January 2023 - May 2023",
        "I took a more independent role, and also changed from \
        teaching 1 hour a week to 2 hours a week. I improved my \
        teaching and my understanding of the material!",
        "I changed the time to 5-6pm on Tuesdays and Thursdays, \
        and students actually showed up!",
      ],
    },
    {
      title: "CS 61A Junior Mentor",
      descriptions: [
        "August 2022 - December 2022",
        "I decided to start teaching CS 61A in CSM because I \
        didn't have to enroll in a unit to do so.",
        "CSM is incredible. It allows undergraduate students \
        like me the opportunity to teach, which probably \
        doesn't exist in most colleges.",
        "Unfortunately, I also had an 8 AM section time, \
        which meant none of my students showed up that often :(",
      ],
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
      descriptions: [
        "CS 162 Homework 5",
        "The goal of this project was to build the \
        infamous map reduce, where a coordinator takes \
        a program with lots of data inputs and splits the \
        work between many workers for parallelism.",
        "I coded this project in C, and I added fault \
        tolerance in the case of workers that failed.",
        "Future goals involve completing this project in \
        Rust!",
      ],
    },
    {
      title: "PintOS",
      descriptions: [
        "CS 162 Semester Project",
        "In this class, we had to code an entire OS",
        "Some functionalities of PintOS include an isolated \
        kernel, ability to execute user programs, ability to \
        create user threads, virtual memory, synchronization, \
        system calls, \
        a fast file system, and a cache.",
        "Entire project was coded in C, with some x86 assembly",
        "Future goals involve adding interaction with device drivers.",
      ],
    },
    {
      title: "Git(let)",
      descriptions: [
        "CS 61B Project 2",
        "This project basically is Git, the version \
        control system that everyone uses.",
        "Unpopular opinion: I really enjoyed this project in \
        Spring 2021, so in the Summer of 2023, I redid this \
        project from \
        scratch!",
        "Part of doing this from scratch involved writing to \
        the file system and serialization. Luckily, I had taken \
        courses involving those, so I was able to understand!",
        "Currently, I have add, commit, checkout, branch, merge, \
        and remove.",
        "Entire project coded in Java.",
        "Future goals involve adding remote stuff and more \
        complicated git commands.",
      ],
    },
    {
      title: "Secure Database System",
      descriptions: [
        "CS 161 Project 2",
        "The goal of this project was to build a secure filesystem.",
        "Basically, the assumption is that a bad actor can hack into \
        your database, so everything has to be encrypted, but users \
        with permission to view files should still be able to decrypt \
        the files.",
        "This project taught me a lot about code design and about \
        encryption methods!",
        "This project was coded in Golang",
        "Future goals involve trying to write more tests and fixing \
        insecure parts of this project.",
        "Since I enjoyed this project a lot, I plan on also redoing \
        this project from scratch!",
      ],
    },
    {
      title: "Build Your Own World",
      descriptions: [
        "CS 61B Project 3",
        "I created a maze game that lets the user try to navigate \
        through a maze!",
        "This was also coded in Java",
      ],
    },
    {
      title: "Chess",
      descriptions: [
        "This project allows the user to play chess on the terminal!",
        "I coded the functionality of a chess game. However, the \
        design is quite bad if I'm being honest.",
        "This project was done in C++",
        "Future goals include improving the code quality and also \
        creating a GUI so that the game can move outside the terminal.",
      ],
    },
  ],
};

const infoCardsProjectsPersonal: InfoRowPropsType = {
  title: "Personal Projects",
  infoCards: [
    {
      title: "League of Legends Esports Stats",
      descriptions: [
        "This project compiles stats for professional \
        League of Legends!",
        "The goal of this project was to practice web \
        scraping and pandas.",
        "There's also a bit of scikit-learn machine \
        learning, but realistically there isn't enough \
        data to build decent models.",
        "Future goals include trying to add hypothesis \
        testing, more machine learning, and turning this \
        into a web app.",
        "Link: https://github.com/benbielin/lol-esports-stats",
      ],
    },
    {
      title: "Discord Bot",
      descriptions: [
        "This bot sends hourly reminders to me on \
        discord to stand up, drink water, and stop \
        being lazy and play badminton instead of \
        video games.",
        "The goal of this project was to learn how \
        to use an API to create a productive app, as \
        well as being my first project involving \
        javascript.",
        "I don't really use discord that often, but \
        the Discord API is absolutely incredible.",
        "Future goals include adding more features to \
        the bot, as well as exploring more of the \
        Discord.js API.",
        "Link: ",
      ],
    },
    {
      title: "Math App",
      descriptions: [
        "This project is app that does tedious math \
        formulas for the user.",
        "The goal of this project was to practice the \
        React framework. This was the first time I used \
        React.",
        "Currently, it works for quadratic formula \
        and Euclidean distances",
        "Inspired by my math courses that have \
        a lot of computation :(",
        "Future goals include adding more math \
        functions and improving the UI and UX \
        of the site.",
        "Link: https://github.com/benbielin/math-app",
      ],
    },
    {
      title: "Penguins",
      descriptions: [
        "This project takes data about penguins and \
        creates machine learning models to predict \
        features.",
        "The goal of this project was to learn R and \
        also take my first step into machine learning. ",
        "Future goals are to predict more features and \
        build better models.",
        "Link: https://github.com/benbielin/penguins",
      ],
    },
    {
      title: "IBM Data Science Capstone",
      descriptions: [
        "This is actually from a Coursera course I \
        took. The project analyzes data about landing \
        success rates for different spaceships in \
        tests, creates data visualizations for the \
        data, creates a dashboard to display data to \
        users, and creates a machine learning model to \
        predict the landing success of other spaceships.",
        "The goal of this project was to practice \
        everything about data science. ",
        "Link: https://github.com/benbielin/ibm-data-sci-capstone",
      ],
    },
    {
      title: "This website???",
      descriptions: [
        "(Am I supposed to list this website as a \
        project in a list of projects on this \
        website?)",
        "Jokes aside, the goal of this website was \
        sort of as a capstone project of everything \
        I have learned about web development, as well \
        as to learn the Next.js framework.",
        "Future goals include adding more pages and \
        more features.",
        "Link: https://github.com/benbielin/benbielin.github.io",
      ],
    },
  ],
};

export const infoCardsProjects: InfoPropsType = {
  title: "PROJECTS",
  infoRows: [infoCardsProjectsPersonal, infoCardsProjectsSchool],
};

export const memeListDailySchedule: MemeListPropsType = {
  definition: "daily schedule",
  textList: [
    {
      text: "7:00am: Wake up",
      substringArray: [8, 15],
    },
    {
      text: "8:00am: Wake up",
      substringArray: [8, 15],
    },
    {
      text: "9:00am: Wake up",
      substringArray: [15],
    },
    {
      text: "10:00am: Go to lecture Skip lecture and watch it later don't watch it later because I'm lazy",
      substringArray: [9, 22, 40, 54, 92],
    },
    {
      text: "12:00am: Eat lunch breakfast",
      substringArray: [13, 18, 29],
    },
    {
      text: "1:00pm: Go to lecture Skip lecture because I already gave up at this point",
      substringArray: [8, 21, 74],
    },
    {
      text: "3:00pm: Go to gym to try to compensate for lack of masculinity",
      substringArray: [62],
    },
    {
      text: "5:00pm: Cook food Waste money on fast food",
      substringArray: [8, 17, 42],
    },
    {
      text: "6:00pm: Study Waste time playing video games",
      substringArray: [8, 13, 44],
    },
    {
      text: "8:00pm: Study Waste time on YouTube",
      substringArray: [8, 13, 35],
    },
    {
      text: "10:00pm: Study Yeah let's be real I'm not studying",
      substringArray: [9, 14, 50],
    },
    {
      text: "12:00am: Go to sleep",
      substringArray: [9, 20]
    },
    {
      text: "1:00am: Go to sleep",
      substringArray: [8, 19]
    },
    {
      text: "2:00am: Go to sleep",
      substringArray: [19]
    },
    
  ],
}
