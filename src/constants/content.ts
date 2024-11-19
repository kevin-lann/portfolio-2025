const fptLogo = '/imgs/fpt_logo.png'
const ontarioLogo = '/imgs/ontario_logo.png'
const uoftLogo = '/imgs/uoft.png'

export const WORK_TIMELINE_ITEMS = [
  {
    date: 'Aug 2024 - Dec 2024',
    title: 'Full Stack Developer Intern',
    subtitle: 'FPT Software Canada',
    label: '',
    content: [
      "Fortified application security by introducing a NodeJS proxy server between the frontend & backend complete with two way (AES) encryption, and session cache",
      "Built a scalable email notification service in Java Spring Boot that automated client emails, handling 100's of in/outgoing emails per day",
      "Developed a PDF parsing/auto-generation tool using Apache PDFBox able to extract/generate pdf pages greatly optimizing the client's workflow",
      "Streamlined frontend development by >40% by designing a reusable custom UI component library from scratch using React"
    ],
    image: fptLogo
  },
  {
    date: 'Jan 2024 - Apr 2024',
    title: 'Jr. UI/UX Designer',
    label: '',
    subtitle: 'Ministry of Transportation Ontario',
    content: [
      "Increased sprint output by processing complex technical requirements and producing high fidelity Figma wireframes for two agile development teams of 20-30 people each",
      "Communicated and presented findings, results, and user-centric solutions during technical discussions",
      "Performed accessibility tests on newly developed pages and applied usability best practices for optimal user experience"
    ],
    image: ontarioLogo
  }
]

export const EDUCATION_TIMELINE_ITEMS = [
  {
    date: 'Sep 2022 - Present',
    title: 'University of Toronto Scarborough',
    label: '',
    subtitle: 'Computer Science Bsc., Entrepreneurship Specialist, 3rd year',
    content: [
      "Current GPA: 3.85",
      "2 time Dean's Honor list",
      "2 time Scarborough Frank Faubert Scholarships recepient",
    ],
    image: uoftLogo
  }
]