const assetBase = `${import.meta.env.BASE_URL}assets/`;

export const portfolio = {
  name: 'Shivam Khachane',
  fullName: 'Shivam Muktaram Khachane',
  role: 'Software / Application Engineer',
  headline: 'I build reliable software for real-world workflows.',
  location: 'Mumbai, Maharashtra, India',
  summary:
    'Application Engineer with 2+ years of experience developing and maintaining enterprise BFSI software using Java, JavaScript, and Oracle Database. Focused on dependable loan-processing workflows, production support, and thoughtful problem-solving.',
  email: 'shivamkhachane@gmail.com',
  phone: '+91 75078 83774',
  phoneHref: '+917507883774',
  whatsapp: 'https://wa.me/917507883774',
  linkedin: 'https://www.linkedin.com/in/shivam-khachane-a651b9220/',
  github: 'https://github.com/shivamkhachane',
  portrait: `${assetBase}portrait.jpg`,
  aboutPortrait: `${assetBase}about.jpg`,
  resume: `${assetBase}Shivam_Khachane_Resume.pdf`,
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/shivamkhachane' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-khachane-a651b9220/' },
    { label: 'Instagram', href: 'https://instagram.com/shiv_khachane?igshid=YjM2YjNmNDA=' },
    { label: 'Facebook', href: 'https://www.facebook.com/shivam.khachane' },
  ],
  stats: [
    { value: 2, suffix: '+', decimals: 0, label: 'Years in enterprise software' },
    { value: 2, suffix: '', decimals: 0, label: 'Selected projects' },
    { value: 9.05, suffix: '/10', decimals: 2, label: 'Engineering CGPA' },
  ],
  skillGroups: [
    {
      title: 'Backend',
      icon: 'server',
      skills: ['Java', 'Advanced Java', 'Spring Boot', 'REST-based applications', 'Object-oriented programming', 'SDLC'],
    },
    {
      title: 'Database',
      icon: 'database',
      skills: ['SQL', 'Oracle Database', 'MySQL', 'SQL Server', 'Database design'],
    },
    {
      title: 'Frontend',
      icon: 'layout',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Tools',
      icon: 'wrench',
      skills: ['Eclipse', 'VS Code', 'IntelliJ IDEA', 'MySQL Workbench', 'Git'],
    },
  ],
  projects: [
    {
      title: 'Book Management System',
      kind: 'Personal project',
      description:
        'A Java desktop application integrated with MySQL to manage book inventory, with CRUD operations for cataloging and tracking collections.',
      details: 'Built and tested with Eclipse and MySQL Workbench using relational database design principles.',
      icon: 'book',
      tags: ['Java', 'MySQL', 'CRUD'],
    },
    {
      title: 'American Sign Language Recognition',
      kind: 'Team project',
      description:
        'A web-based application using computer vision and deep learning to recognize and translate American Sign Language gestures in real time.',
      details: 'Implemented gesture-classification models and an interactive interface as part of a team.',
      icon: 'hand',
      tags: ['Computer vision', 'Deep learning', 'Gesture classification'],
    },
  ],
  experience: [
    {
      role: 'Application Engineer',
      organization: 'Newgen Software Technologies Ltd.',
      period: 'Jan 2024 - Present',
      current: true,
      points: [
        'Collaborate with cross-functional teams across BFSI software products to support client operations and deliver user-friendly solutions.',
        'Maintain and enhance the Retail Loan Procedure system to meet changing business requirements and regulatory standards.',
        'Develop backend functionality with Java, JavaScript, and Oracle Database for reliable loan-processing workflows.',
        'Troubleshoot production issues with clients and internal teams to minimize downtime.',
      ],
    },
    {
      role: 'Web Developer Intern',
      organization: "Elite Software's",
      period: 'Feb 2023 - Mar 2023',
      current: false,
      points: [
        'Built and tested web application features using Java and SQL, gaining hands-on experience with full-stack development and database-driven design.',
      ],
    },
  ],
  education: [
    {
      qualification: 'B.E. - Electronics and Telecommunication Engineering',
      institution: 'Shrimati Kashibai Navale College of Engineering',
      period: '2020 - 2024',
      result: 'CGPA 9.05 / 10',
    },
    {
      qualification: '12th Grade (HSC)',
      institution: 'Bhimashankar Padalkar Junior College, Georai',
      period: '2020',
      result: '75.54%',
    },
    {
      qualification: '10th Grade (SSC)',
      institution: 'Alphonsa English High School, Aurangabad',
      period: '2018',
      result: '93.80%',
    },
  ],
  certifications: [
    { name: 'Java Development', provider: 'Udemy', period: 'Jan 2024' },
    { name: 'MySQL and Database Design', provider: 'Udemy', period: 'Dec 2023' },
    { name: 'Interactive AR/VR App Development', provider: 'TechXR', period: 'Aug 2022' },
  ],
};
