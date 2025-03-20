export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  inrPrice?: number; // Added for Indian Rupee price
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  featured?: boolean;
  tags: string[];
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  coverImage: string;
  specializations: string[];
  experience: number;
  totalStudents: number;
  totalCourses: number;
  rating: number;
  reviews: number;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  achievements: string[];
}

export const instructors: Instructor[] = [
  {
    name: "Dr. Sarah Chen",
    title: "AI & Machine Learning Expert",
    bio: "Dr. Sarah Chen is a leading expert in Artificial Intelligence and Machine Learning with over 12 years of industry and research experience. She has published numerous papers in top-tier conferences and journals, and has worked on cutting-edge projects at major tech companies. As an educator, Sarah is passionate about making complex topics accessible to learners of all levels.",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    specializations: ["Machine Learning", "Neural Networks", "Deep Learning", "Computer Vision", "Natural Language Processing"],
    experience: 12,
    totalStudents: 24500,
    totalCourses: 8,
    rating: 4.8,
    reviews: 1842,
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
      website: "https://drsarahchen.com"
    },
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Stanford University",
        year: "2011"
      },
      {
        degree: "M.S. in Artificial Intelligence",
        institution: "MIT",
        year: "2008"
      },
      {
        degree: "B.S. in Computer Science",
        institution: "UC Berkeley",
        year: "2006"
      }
    ],
    achievements: [
      "Published 25+ research papers in top AI conferences",
      "Developed ML algorithms used by 3 Fortune 500 companies",
      "Recipient of the ACM Distinguished Researcher Award",
      "TED speaker on the future of AI and education"
    ]
  },
  {
    name: "Michael Rodriguez",
    title: "Web Development Specialist",
    bio: "Michael Rodriguez is a full-stack developer and educator with expertise in modern web technologies. With a background in software engineering at several tech startups, Michael brings real-world experience to his teaching. He focuses on practical, project-based learning that prepares students for professional development roles.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    coverImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    specializations: ["JavaScript", "React", "Node.js", "TypeScript", "Frontend Architecture"],
    experience: 9,
    totalStudents: 18700,
    totalCourses: 12,
    rating: 4.9,
    reviews: 2156,
    social: {
      twitter: "https://twitter.com/mrodriguez",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/mrodriguez",
      website: "https://michaelrodriguez.dev"
    },
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Georgia Tech",
        year: "2014"
      },
      {
        degree: "B.S. in Software Engineering",
        institution: "University of Washington",
        year: "2011"
      }
    ],
    achievements: [
      "Lead developer on 3 widely-used open source libraries",
      "Speaker at ReactConf and NodeCon",
      "Author of 'Modern React Patterns' book",
      "Creator of the WebDevMastery online curriculum"
    ]
  },
  {
    name: "Alex Thompson",
    title: "Cybersecurity Specialist",
    bio: "Alex Thompson is a certified cybersecurity expert with experience in both offensive and defensive security. Having worked as a security consultant for major financial institutions and government agencies, Alex now focuses on training the next generation of security professionals. His courses combine theoretical knowledge with hands-on labs and real-world scenarios.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Network Security", "Ethical Hacking", "Security Auditing", "Cryptography", "Digital Forensics"],
    experience: 15,
    totalStudents: 12340,
    totalCourses: 6,
    rating: 4.7,
    reviews: 987,
    social: {
      twitter: "https://twitter.com/alextsec",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alextsec"
    },
    education: [
      {
        degree: "M.S. in Information Security",
        institution: "Carnegie Mellon University",
        year: "2009"
      },
      {
        degree: "B.S. in Computer Science",
        institution: "Purdue University",
        year: "2007"
      }
    ],
    achievements: [
      "CISSP, CEH, and OSCP certified",
      "Former team lead at National Cybersecurity Center",
      "Discovered and responsibly disclosed 12 critical vulnerabilities",
      "Regular contributor to OWASP projects"
    ]
  },
  {
    name: "Dr. Priya Sharma",
    title: "Data Science & AI Researcher",
    bio: "Dr. Priya Sharma is a renowned data scientist and AI researcher with expertise in predictive analytics and natural language processing. With a Ph.D. from IIT Delhi and industry experience at leading Indian tech companies, she brings academic rigor and practical insights to her courses. Dr. Sharma is passionate about mentoring the next generation of data scientists in India.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    coverImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
    specializations: ["Data Science", "NLP", "Statistical Modeling", "Python", "Big Data Analytics"],
    experience: 10,
    totalStudents: 16500,
    totalCourses: 7,
    rating: 4.9,
    reviews: 1250,
    social: {
      twitter: "https://twitter.com/drpriyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
      website: "https://priyasharma.tech"
    },
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "IIT Delhi",
        year: "2013"
      },
      {
        degree: "M.Tech in Artificial Intelligence",
        institution: "IIT Bombay",
        year: "2008"
      },
      {
        degree: "B.Tech in Computer Science",
        institution: "BITS Pilani",
        year: "2006"
      }
    ],
    achievements: [
      "Top researcher award at International Conference on Data Science",
      "Published 18 papers in leading AI journals",
      "Developed predictive models used by 5 major Indian corporations",
      "TEDxIndia speaker on the future of AI in developing economies"
    ]
  },
  {
    name: "Raj Patel",
    title: "Full Stack Developer & DevOps Expert",
    bio: "Raj Patel is a full-stack developer and DevOps specialist with over 12 years of experience building scalable web applications and optimizing deployment pipelines. Having worked with startups and established tech companies across India, Raj specializes in MERN stack development, cloud architecture, and containerization technologies. His teaching approach emphasizes hands-on learning and real-world problem-solving.",
    avatar: "https://randomuser.me/api/portraits/men/92.jpg",
    coverImage: "https://images.unsplash.com/photo-1543013309-0d1f4edeb868?q=80&w=2048&auto=format&fit=crop",
    specializations: ["MERN Stack", "AWS", "Docker", "Kubernetes", "CI/CD"],
    experience: 12,
    totalStudents: 21300,
    totalCourses: 9,
    rating: 4.8,
    reviews: 1680,
    social: {
      twitter: "https://twitter.com/rajpateldev",
      linkedin: "https://linkedin.com/in/rajpatel",
      github: "https://github.com/rajpatel",
      website: "https://rajpatel.dev"
    },
    education: [
      {
        degree: "M.S. in Software Engineering",
        institution: "VIT Vellore",
        year: "2011"
      },
      {
        degree: "B.Tech in Information Technology",
        institution: "NIT Surat",
        year: "2009"
      }
    ],
    achievements: [
      "Tech lead for India's fastest-growing fintech platform",
      "Open source contributor to major DevOps tools",
      "Speaker at multiple tech conferences including JSFoo India",
      "Author of 'Modern DevOps Practices' e-book"
    ]
  },
  {
    name: "Ananya Desai",
    title: "UX/UI Design & Product Strategy",
    bio: "Ananya Desai is a UX/UI designer and product strategist who has shaped digital experiences for millions of users across India. Her work combines design thinking, user psychology, and business strategy to create intuitive interfaces that drive engagement and conversion. Ananya previously led design teams at top Indian startups and now shares her expertise through courses that bridge the gap between design theory and practical implementation.",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    coverImage: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
    specializations: ["UX Design", "UI Design", "Product Strategy", "Design Systems", "Figma"],
    experience: 8,
    totalStudents: 14200,
    totalCourses: 5,
    rating: 4.7,
    reviews: 960,
    social: {
      twitter: "https://twitter.com/ananyauxdesign",
      linkedin: "https://linkedin.com/in/ananyaDesai",
      github: "https://github.com/ananyaDesai",
      website: "https://ananyaDesai.design"
    },
    education: [
      {
        degree: "M.Des in Interaction Design",
        institution: "IDC, IIT Bombay",
        year: "2015"
      },
      {
        degree: "B.Des in Communication Design",
        institution: "NID Ahmedabad",
        year: "2013"
      }
    ],
    achievements: [
      "Design lead for award-winning Indian e-commerce platform",
      "Speaker at India Design Summit and DesignUp",
      "Recipient of 'Young Designer of the Year' award",
      "Creator of popular design system used by multiple startups"
    ]
  }
];

export const categories = [
  'Programming',
  'Data Science',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'Cybersecurity',
  'Cloud Computing',
  'Design',
  'Business',
];

export const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Sarah Chen',
    description: 'Master the foundations of machine learning with hands-on projects and real-world applications. This comprehensive course covers supervised and unsupervised learning, neural networks, and model evaluation.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    duration: '10 weeks',
    lessons: 48,
    rating: 4.8,
    students: 15420,
    featured: true,
    tags: ['Python', 'TensorFlow', 'Neural Networks', 'Data Analysis']
  },
  {
    id: '2',
    title: 'Advanced React Development',
    instructor: 'Michael Rodriguez',
    description: 'Take your React skills to the next level with advanced patterns, state management solutions, and performance optimization techniques. Learn how to build scalable and maintainable front-end applications.',
    price: 74.99,
    inrPrice: 6249,
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Web Development',
    level: 'Advanced',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.9,
    students: 8745,
    tags: ['JavaScript', 'React', 'Redux', 'TypeScript']
  },
  {
    id: '3',
    title: 'Cybersecurity Essentials',
    instructor: 'Alex Thompson',
    description: 'Understand the critical concepts of information security and learn how to protect systems and networks from cyber threats. This course covers encryption, network security, ethical hacking, and security policies.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '12 weeks',
    lessons: 52,
    rating: 4.7,
    students: 6890,
    tags: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Risk Management']
  },
  {
    id: '4',
    title: 'Python for Data Science',
    instructor: 'Emily Johnson',
    description: 'Learn how to use Python for data analysis, visualization, and machine learning. This course will teach you essential libraries like Pandas, NumPy, Matplotlib, and scikit-learn through practical exercises.',
    price: 69.99,
    inrPrice: 5899,
    image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    category: 'Data Science',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 28,
    rating: 4.6,
    students: 12560,
    featured: true,
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Visualization']
  },
  {
    id: '5',
    title: 'iOS App Development with Swift',
    instructor: 'David Kim',
    description: 'Build professional iOS applications using Swift and Xcode. Learn UI design principles, data persistence, networking, and how to publish your app to the App Store. Includes hands-on projects to build a portfolio.',
    price: 84.99,
    inrPrice: 6999,
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
    category: 'Mobile Development',
    level: 'Intermediate',
    duration: '9 weeks',
    lessons: 42,
    rating: 4.7,
    students: 5280,
    tags: ['Swift', 'iOS', 'Xcode', 'UIKit', 'SwiftUI']
  },
  {
    id: '6',
    title: 'Cloud Architecture on AWS',
    instructor: 'James Wilson',
    description: 'Design and implement scalable, high-availability architectures on Amazon Web Services. Learn about EC2, S3, RDS, Lambda, and other key services while applying best practices for security and cost optimization.',
    price: 99.99,
    inrPrice: 8299,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80',
    category: 'Cloud Computing',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 45,
    rating: 4.9,
    students: 7830,
    featured: true,
    tags: ['AWS', 'Cloud Computing', 'DevOps', 'Serverless']
  },
  {
    id: '7',
    title: 'UX/UI Design Principles',
    instructor: 'Sophia Martinez',
    description: 'Learn the fundamentals of user experience and interface design. This course covers user research, wireframing, prototyping, and usability testing to create intuitive and visually appealing digital products.',
    price: 79.99,
    inrPrice: 6699,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2572&q=80',
    category: 'Design',
    level: 'Beginner',
    duration: '7 weeks',
    lessons: 32,
    rating: 4.8,
    students: 9120,
    tags: ['UX', 'UI', 'Figma', 'Wireframing', 'User Research']
  },
  {
    id: '8',
    title: 'Blockchain Development',
    instructor: 'Robert Chen',
    description: 'Understand blockchain technology and learn how to develop decentralized applications. This course covers Ethereum, smart contracts with Solidity, Web3.js, and dApp architecture.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    category: 'Programming',
    level: 'Advanced',
    duration: '11 weeks',
    lessons: 48,
    rating: 4.7,
    students: 4350,
    tags: ['Blockchain', 'Ethereum', 'Solidity', 'Smart Contracts', 'Web3']
  }
];

export const getFeaturedCourses = () => {
  return sampleCourses.filter(course => course.featured);
};

export const getCoursesByCategory = (category: string) => {
  return category === 'All' 
    ? sampleCourses 
    : sampleCourses.filter(course => course.category === category);
};

export const getCourseById = (id: string) => {
  return sampleCourses.find(course => course.id === id);
};

export const getCoursesByInstructor = (instructorName: string) => {
  return sampleCourses.filter(course => course.instructor === instructorName);
};

export const getInstructorByName = (name: string) => {
  return instructors.find(instructor => instructor.name === name);
};
