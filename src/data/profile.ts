import type { ExperienceItem, Project, SkillCategory } from '../types'

export const profile = {
  name: 'Shobana S',
  role: 'Backend Developer',
  specialization: 'Golang',
  positioning: 'Golang · REST APIs · MySQL · AWS',
  heroHeadline: 'Backend Developer focused on Go, APIs, and scalable systems.',
  availability: 'Open to Internship & Entry-Level Backend Opportunities · 0–1 Years Experience',
  description:
    'I build backend services with Go, REST APIs, and relational databases, while continuously improving my understanding of backend architecture, cloud technologies, and engineering practices.',
  about: [
    "I'm a backend developer focused on Go, currently strengthening my skills through hands-on development, backend projects, and continuous learning.",
    'I enjoy working with REST APIs, databases, backend architecture, and the flow of data between different parts of a system. I\u2019m also exploring microservice architecture, AWS, testing, and better software engineering practices through the projects I build.',
    'With internship and early-career development experience, I\u2019m currently looking for internship and entry-level backend opportunities where I can contribute to a team, learn from experienced engineers, and continue growing as a backend developer.',
  ],
  photo: {
    alt: 'Portrait of Shobana S, backend developer',
  },
}

export const github = {
  username: 'shobana246',
  profileUrl: 'https://github.com/shobana246',
}

export const linkedin = {
  profileUrl: 'https://linkedin.com/in/shobana-s-a003702a0',
}

export const email = 'shob24680@gmail.com'

export const resume = {
  label: 'Resume',
  url: '#', // Update with the resume file path once available
}

export const whatIBuild = [
  {
    index: '01',
    title: 'Backend Systems',
    description:
      'Building backend services with Go and REST APIs, with attention to separation of concerns, business logic, validation, and error handling.',
  },
  {
    index: '02',
    title: 'APIs & Data',
    description:
      'Working with REST API design and relational databases, using MySQL to model data and handle backend operations.',
  },
  {
    index: '03',
    title: 'Engineering',
    description:
      'Learning through hands-on development with microservice concepts, testing, Git workflows, Docker, cloud technologies, and production-oriented backend practices.',
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer Trainee',
    company: 'BrandSmashers Tech',
    location: 'Bhopal',
    period: 'May 2026 – Jul 2026',
    highlights: [
      'Participated in internal software development activities as a Software Engineer Trainee.',
      'Assisted with internal website development and implementation activities.',
      'Participated in requirement discussions and collaborated with the engineering team.',
      'Gained hands-on exposure to software development workflows and engineering practices.',
    ],
  },
  {
    role: 'Backend Intern',
    company: 'KreditBee (Fintech)',
    location: 'Bengaluru',
    period: 'Jan 2025 – Nov 2025',
    highlights: [
      'Worked with the backend team on REST API maintenance, testing, debugging, and codebase improvements.',
      'Contributed to backend API refactoring tasks involving request handling and business logic.',
      'Developed and executed unit tests for backend API scenarios using Go\u2019s testing framework.',
      'Worked with MySQL queries and database operations supporting backend API functionality.',
      'Gained exposure to AWS services including Lambda, S3, SQS, SNS, and CloudWatch.',
      'Assisted with debugging backend issues by analyzing application logs and troubleshooting API behavior in an Agile environment.',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Employee Management Backend',
    status: 'Active',
    statusLabel: 'Actively evolving',
    description:
      'An evolving Go backend system exploring service separation, API design, and layered architecture.',
    features: [
      'Separate Auth and Employee services following microservice principles',
      'Layered architecture with Handler, Service, Repository, and Database layers',
      'RESTful APIs for authentication and employee management',
      'bcrypt password hashing for secure user authentication',
      'Request validation and structured error handling across endpoints',
    ],
    tech: ['Golang', 'REST APIs', 'MySQL', 'Microservices', 'Layered Architecture'],
    repositoryUrl: 'https://github.com/shobana246',
  },
  {
    title: 'Car Listing Backend',
    status: 'Completed',
    statusLabel: 'Completed',
    description:
      'A backend application for managing car listings, user interactions, and approval workflows using Go, Gin, MySQL, and Beego ORM.',
    features: [
      'User registration and car listing management',
      'Selling, requesting, and approval workflows',
      'RESTful APIs using the Gin framework',
      'Beego ORM with MySQL for data persistence',
      'Request validation, structured error handling, and business logic',
    ],
    tech: ['Golang', 'Gin', 'Beego ORM', 'MySQL', 'REST APIs'],
    repositoryUrl: 'https://github.com/shobana246',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Golang', 'SQL'],
  },
  {
    title: 'Backend',
    skills: [
      'REST APIs',
      'Gin',
      'net/http',
      'CRUD Operations',
      'API Design',
      'Request Validation',
      'Error Handling',
    ],
  },
  {
    title: 'Architecture',
    skills: ['Layered Architecture', 'Hexagonal Architecture', 'Microservice Architecture'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'SQL', 'Database Design', 'Schema Design', 'Joins', 'Constraints'],
  },
  {
    title: 'Cloud',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS SQS', 'AWS SNS', 'AWS CloudWatch'],
  },
  {
    title: 'Testing & Engineering',
    skills: ['Unit Testing', 'Debugging', 'Code Refactoring'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor', 'GitHub Copilot'],
  },
]

export const currentFocus = [
  'Deepening Go fundamentals',
  'Building backend services',
  'Microservice architecture',
  'REST API design',
  'MySQL and database design',
  'AWS fundamentals',
  'Git and GitHub workflows',
  'Docker',
  'CI/CD',
  'Backend interview preparation',
]

export const career = {
  heading: 'Open to Backend Opportunities',
  copy: 'I\u2019m currently looking for internship and entry-level backend opportunities where I can contribute to real products, work with experienced engineers, and continue developing my skills in Go and backend engineering.',
  highlight: '0–1 Years Experience',
  roles: [
    'Backend Developer',
    'Golang Developer',
    'Backend Intern',
    'Software Engineer — Entry Level',
    'SDE-1 / Junior Backend',
  ],
  location: 'Bengaluru / Remote',
}

export const education = {
  degree: 'Bachelor of Engineering — Computer Science',
  institution: 'Sree Sakthi Engineering College, Coimbatore',
  period: 'Graduated 2025',
  detail: 'CGPA 8.11',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]