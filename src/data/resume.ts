import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  basics: {
    name: "Shaik. Ishaaq",
    title: "Senior Software Developer | AI Specialist (Claude, MCP) | Full Stack | Playwright | Cloud",
    summary: "I am a full stack developer with a bachelor's degree in computer science and a master's degree in applied computer science. I have a strong background in cloud computing, backend optimization, and automation, specializing in AI-driven development with Claude AI and MCP (Model Context Protocol). I have extensive experience in automated testing with Playwright, CI/CD with SonarQube and Docker, and cloud-native architectures on AWS and Firebase. Passionate about AI, ML, and Large Language Models (LLM), I continuously explore AI-driven applications and open-source contributions.",
    location: "Seattle, Washington, United States",
    email: "Ishaaqsk690@gmail.com",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/shaik-i" }
    ]
  },
  experience: [
    {
      company: "Starbucks",
      role: "Web Quality Engineer",
      dates: "December 2025 - Present",
      location: "Seattle, WA",
      bullets: [
        "Ensuring high-quality web experiences through rigorous testing and quality assurance processes.",
        "Leveraging MCP (Model Context Protocol) and advanced AI tools to automate quality checks and streamline deployment workflows.",
        "Actively participating in feature development, contributing to the codebase with a focus on performance and reliability.",
        "Managing and optimizing deployment pipelines, ensuring seamless transitions from development to production environments."
      ]
    },
    {
      company: "Heartland Bank LTD",
      role: "SDET",
      dates: "September 2024 - November 2025",
      location: "Charlotte, NC",
      bullets: [
        "Developed and maintained automated test suites to ensure software reliability and performance."
      ]
    },
    {
      company: "Northwest Missouri State University",
      role: "Full-stack Developer",
      dates: "April 2023 - December 2023",
      location: "Missouri, United States",
      bullets: [
        "Developed a comprehensive web application leveraging HTML, CSS, and Bootstrap for the frontend, ensuring a responsive and user-friendly interface.",
        "Built a backend using JavaScript connected to Firestore (NoSQL) to manage and store application data efficiently.",
        "Developed an iOS mobile application that seamlessly integrated with the web application, providing a consistent user experience across platforms.",
        "Demonstrated ability to build full-stack applications, manage state and data flow, and ensure cross-platform compatibility."
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      dates: "August 2021 - October 2022",
      location: "Kolkata",
      bullets: [
        "Used Python, Go, HTML/CSS, JavaScript, Angular, and firebase database to develop and enhance web applications for the collections team.",
        "Collaborated with Go developers to perform backend service operations along with Java.",
        "Contributed to the automation of report scheduling, reducing manual effort by 60+ minutes daily.",
        "Designed a project in AWS Cloud for TCS-INFRAMIND aimed at reducing CPU utilization as the number of users increased."
      ],
      metrics: ["Reduced manual effort by 60+ minutes daily", "Optimized CPU utilization via AWS"]
    },
    {
      company: "Tata Consultancy Services",
      role: "Internship Project",
      dates: "July 2020 - February 2021",
      location: "Hyderabad",
      bullets: [
        "Cloud Computing Intern working closely with development and operations teams to support and enhance cloud infrastructure.",
        "Worked with AWS services, particularly S3 and EC2.",
        "Utilized Docker, Git to streamline development and deployment processes.",
        "Assisted in developing and maintaining applications using Java."
      ]
    },
    {
      company: "Andhra University, Visakhapatnam",
      role: "Project Intern",
      dates: "January 2020 - March 2020",
      location: "India",
      bullets: [
        "Worked hands-on with drone hardware and software, focusing on integrating and programming core components to enhance drone functionality.",
        "Wrote and deployed code directly onto drones, gaining experience in embedded systems and debugging for real-world applications.",
        "Awarded 1st place among all intern submissions for technical and problem-solving skills."
      ],
      metrics: ["1st Place Award"]
    },
    {
      company: "ExpertsHub",
      role: "Project Intern",
      dates: "August 2019 - December 2019",
      location: "Chennai",
      bullets: [
        "Developed an AI-powered toolset combining data processing, machine learning, and computer vision.",
        "Used NumPy and Pandas for data manipulation and created a robust pipeline to clean and analyze large datasets.",
        "Worked within Jupyter Notebook and managed dependencies via Anaconda for machine learning algorithms.",
        "Leveraged OpenCV for object detection and image processing (edge detection, object tracking).",
        "Integrated a database for efficient data storage and retrieval, making the tool scalable."
      ]
    }
  ],
  achievements: [
    {
      title: "1st Place Intern Award",
      context: "Awarded 1st place among all intern submissions at Andhra University for drone technology project.",
      metric: "Rank #1"
    },
    {
      title: "Efficiency Optimization",
      context: "Automated report scheduling at TCS, reducing manual effort significantly.",
      metric: "60+ mins saved daily"
    },
    {
      title: "Cloud Scalability",
      context: "Designed AWS-based cloud project to optimize CPU utilization for TCS-INFRAMIND.",
      metric: "CPU Optimization"
    },
    {
      title: "AI Toolset Development",
      context: "Built an end-to-end AI solution for data processing and computer vision at ExpertsHub.",
      metric: "AI/ML Expert"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python", "Go", "HTML/CSS"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Angular", "Bootstrap", "NumPy", "Pandas", "OpenCV"]
    },
    {
      category: "Cloud & Tools",
      items: ["AWS (S3, EC2)", "Firebase", "Firestore", "Docker", "Git", "Playwright", "MySQL", "SonarQube"]
    },
    {
      category: "Specialized",
      items: ["Claude AI", "MCP (Model Context Protocol)", "AI/ML", "LLM", "Dronekit", "Embedded Systems", "Computer Hardware", "Raspberry Pi"]
    }
  ],
  education: [
    {
      institution: "Northwest Missouri State University",
      degree: "Master's degree, Applied Computer Science",
      dates: "August 2022 - December 2023"
    },
    {
      institution: "Jawaharlal Nehru Technological University, Kakinada",
      degree: "Bachelor of Technology - BTech, Computer Science",
      dates: "July 2017 - May 2021"
    }
  ],
  extra: [
    "Passionate about learning new technologies and applying them to solve real-world problems.",
    "Values teamwork, innovation, and customer satisfaction.",
    "Continuously explores AI-driven applications and open-source contributions."
  ]
};
