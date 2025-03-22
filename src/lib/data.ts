export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  inrPrice?: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  featured?: boolean;
  tags: string[];
  isFree?: boolean;
  videoUrl?: string;
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
  'Excel',
  'Cryptocurrency',
  'Marketing',
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
    id: '4',
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
    id: '5',
    title: 'Cloud Architecture on AWS',
    instructor: 'James Wilson',
    description: 'Design and implement scalable, high-availability architectures on Amazon Web Services. Learn about EC2, S3, RDS, Lambda, and other key services while applying best practices for security and cost optimization.',
    price: 99.99,
    inrPrice: 8299,
    image: 'https://images.unsplash.com/photo-1451180102446-f3ece451e9d1?q=80&w=2070&auto=format&fit=crop',
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
    id: '6',
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
    id: '7',
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
  },
  {
    id: '8',
    title: 'Advanced Excel Masterclass',
    instructor: 'Michael Rodriguez',
    description: 'Master advanced Excel functions, pivot tables, macros, VBA, and data analysis techniques to boost your productivity and career prospects. This free course covers everything from complex formulas to dashboard creation.',
    price: 0,
    inrPrice: 0,
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d1?q=80&w=2070&auto=format&fit=crop',
    category: 'Excel',
    level: 'Advanced',
    duration: '8 weeks',
    lessons: 42,
    rating: 4.9,
    students: 23500,
    isFree: true,
    featured: true,
    tags: ['Excel', 'Data Analysis', 'VBA', 'Macros', 'Pivot Tables']
  },
  {
    id: '9',
    title: 'Excel for Beginners: Complete Guide',
    instructor: 'Ananya Desai',
    description: 'Start your Excel journey from the basics and gradually build up to intermediate skills. Learn formatting, formulas, functions, charts, tables, and practical applications for business and personal use.',
    price: 0,
    inrPrice: 0,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    category: 'Excel',
    level: 'Beginner',
    duration: '4 weeks',
    lessons: 24,
    rating: 4.7,
    students: 19800,
    isFree: true,
    tags: ['Excel', 'Formulas', 'Functions', 'Charts', 'Formatting']
  },
  {
    id: '10',
    title: 'Business Strategy Fundamentals',
    instructor: 'Raj Patel',
    description: 'Learn key business strategy concepts, competitive analysis, market positioning, and strategic planning. This course provides practical frameworks to analyze and develop effective strategies for various business contexts.',
    price: 79.99,
    inrPrice: 6599,
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2072&auto=format&fit=crop',
    category: 'Business',
    level: 'Intermediate',
    duration: '6 weeks',
    lessons: 30,
    rating: 4.6,
    students: 7840,
    tags: ['Business Strategy', 'Marketing', 'Competitive Analysis', 'Strategic Planning']
  },
  {
    id: '11',
    title: 'Digital Marketing Essentials',
    instructor: 'Ananya Desai',
    description: 'Master the fundamentals of digital marketing including SEO, social media, content marketing, email campaigns, and analytics. Learn how to create and execute effective digital marketing strategies.',
    price: 69.99,
    inrPrice: 5799,
    image: 'https://images.unsplash.com/photo-1533750516278-4555380d6e7f?q=80&w=2070&auto=format&fit=crop',
    category: 'Marketing',
    level: 'Beginner',
    duration: '7 weeks',
    lessons: 35,
    rating: 4.8,
    students: 11250,
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Content Marketing', 'Analytics']
  },
  {
    id: '12',
    title: 'Cryptocurrency and Blockchain Fundamentals',
    instructor: 'Alex Thompson',
    description: 'Understand the basics of blockchain technology, cryptocurrencies, and their applications. Learn about Bitcoin, Ethereum, smart contracts, decentralized finance, and the future of digital assets.',
    price: 84.99,
    inrPrice: 6999,
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2069&auto=format&fit=crop',
    category: 'Cryptocurrency',
    level: 'Beginner',
    duration: '5 weeks',
    lessons: 28,
    rating: 4.7,
    students: 8920,
    tags: ['Blockchain', 'Cryptocurrency', 'Bitcoin', 'Ethereum', 'DeFi']
  },
  {
    id: '13',
    title: 'React Native Mobile Development',
    instructor: 'Michael Rodriguez',
    description: 'Build cross-platform mobile applications using React Native. Learn to create native-like UI components, handle device features, and deploy apps to iOS and Android stores.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1974&auto=format&fit=crop',
    category: 'Mobile Development',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 40,
    rating: 4.8,
    students: 7620,
    tags: ['React Native', 'Mobile Development', 'JavaScript', 'Cross-Platform']
  },
  {
    id: '14',
    title: 'Advanced Data Visualization',
    instructor: 'Dr. Priya Sharma',
    description: 'Create powerful and interactive data visualizations using D3.js, Tableau, and Python libraries. Learn principles of effective visualization and how to communicate complex data insights clearly.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    category: 'Data Science',
    level: 'Advanced',
    duration: '9 weeks',
    lessons: 38,
    rating: 4.9,
    students: 6240,
    tags: ['Data Visualization', 'D3.js', 'Tableau', 'Python', 'Analytics']
  }
];

const programmingCourses: Course[] = [
  {
    id: 'prog-1',
    title: 'Python Programming Masterclass',
    instructor: 'Michael Rodriguez',
    description: 'Master Python programming from basics to advanced concepts with practical projects and real-world applications.',
    price: 79.99,
    inrPrice: 6599,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop',
    category: 'Programming',
    level: 'Beginner',
    duration: '10 weeks',
    lessons: 45,
    rating: 4.8,
    students: 12500,
    tags: ['Python', 'Programming', 'Data Structures', 'Algorithms']
  },
  {
    id: 'prog-2',
    title: 'Java Development Bootcamp',
    instructor: 'Alex Thompson',
    description: 'Comprehensive Java programming course covering core concepts, OOP, collections, multithreading, and building enterprise applications.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    category: 'Programming',
    level: 'Intermediate',
    duration: '12 weeks',
    lessons: 52,
    rating: 4.7,
    students: 9320,
    tags: ['Java', 'Spring', 'OOP', 'Enterprise']
  },
  {
    id: 'prog-3',
    title: 'C++ for Game Development',
    instructor: 'Dr. Sarah Chen',
    description: 'Learn C++ programming with a focus on game development concepts, performance optimization, and building simple game engines.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    category: 'Programming',
    level: 'Advanced',
    duration: '14 weeks',
    lessons: 58,
    rating: 4.9,
    students: 6430,
    tags: ['C++', 'Game Development', 'Performance', 'Algorithms']
  },
  {
    id: 'prog-4',
    title: 'Golang Essential Training',
    instructor: 'Raj Patel',
    description: 'Master the Go programming language and its core concepts like concurrency, channels, and performance optimization techniques.',
    price: 74.99,
    inrPrice: 6249,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop',
    category: 'Programming',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.7,
    students: 5250,
    tags: ['Go', 'Concurrency', 'Backend', 'Performance']
  },
  {
    id: 'prog-5',
    title: 'Rust Programming for System Developers',
    instructor: 'Dr. Priya Sharma',
    description: 'Explore Rust programming for systems development with focus on memory safety, performance, and building robust applications.',
    price: 99.99,
    inrPrice: 8299,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop',
    category: 'Programming',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 42,
    rating: 4.9,
    students: 3840,
    tags: ['Rust', 'Systems Programming', 'Memory Safety', 'Performance']
  },
  {
    id: 'prog-6',
    title: 'TypeScript for Modern Web Development',
    instructor: 'Michael Rodriguez',
    description: 'Learn TypeScript for building scalable and maintainable web applications with static type checking and advanced features.',
    price: 84.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop',
    category: 'Programming',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.8,
    students: 5250,
    tags: ['TypeScript', 'Web Development', 'JavaScript', 'Frontend']
  }
];

export const cybersecurityCourses: Course[] = [
  {
    id: 'cyber-1',
    title: 'Cybersecurity Essentials',
    instructor: 'Alex Thompson',
    description: 'Understand the critical concepts of information security and learn how to protect systems and networks from cyber threats. This course covers encryption, network security, ethical hacking, and security policies.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Beginner',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.7,
    students: 9850,
    tags: ['Network Security', 'Encryption', 'Security Policies', 'Cyber Threats']
  },
  {
    id: 'cyber-2',
    title: 'Ethical Hacking and Penetration Testing',
    instructor: 'Alex Thompson',
    description: 'Learn professional ethical hacking techniques and methodologies used by security experts to identify and fix vulnerabilities. Practice with real-world penetration testing tools and scenarios.',
    price: 99.99,
    inrPrice: 8299,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '10 weeks',
    lessons: 42,
    rating: 4.9,
    students: 7240,
    tags: ['Ethical Hacking', 'Penetration Testing', 'Security Assessment', 'Vulnerability Analysis']
  },
  {
    id: 'cyber-3',
    title: 'CompTIA Security+ Certification Prep',
    instructor: 'Alex Thompson',
    description: 'Comprehensive preparation for the CompTIA Security+ certification exam. Master all exam objectives with hands-on labs, practice tests, and expert guidance.',
    price: 84.99,
    inrPrice: 7099,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 30,
    rating: 4.8,
    students: 12450,
    tags: ['CompTIA', 'Security+', 'Certification', 'IT Security']
  },
  {
    id: 'cyber-4',
    title: 'Network Security Fundamentals',
    instructor: 'Alex Thompson',
    description: 'Learn how to secure networks against unauthorized access, misuse, and attacks. Topics include firewall configuration, VPNs, intrusion detection systems, and secure network architecture.',
    price: 79.99,
    inrPrice: 6599,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 38,
    rating: 4.7,
    students: 8320,
    tags: ['Network Security', 'Firewalls', 'VPN', 'IDS/IPS']
  },
  {
    id: 'cyber-5',
    title: 'Advanced Malware Analysis',
    instructor: 'Alex Thompson',
    description: 'Develop skills to analyze and reverse engineer malware to understand its functionality, behavior, and potential impact. Learn advanced techniques for static and dynamic malware analysis.',
    price: 104.99,
    inrPrice: 8699,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '12 weeks',
    lessons: 45,
    rating: 4.9,
    students: 5160,
    tags: ['Malware Analysis', 'Reverse Engineering', 'Threat Intelligence', 'Security Research']
  },
  {
    id: 'cyber-6',
    title: 'Cloud Security Fundamentals',
    instructor: 'Raj Patel',
    description: 'Learn how to secure cloud environments including AWS, Azure, and Google Cloud. Understand shared responsibility models, identity management, and data protection in the cloud.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.7,
    students: 6840,
    tags: ['Cloud Security', 'AWS', 'Azure', 'Cloud Computing']
  },
  {
    id: 'cyber-7',
    title: 'Secure Coding Practices',
    instructor: 'Michael Rodriguez',
    description: 'Learn how to write secure code and integrate security into the development lifecycle. Covers common vulnerabilities, secure coding standards, and security testing techniques.',
    price: 84.99,
    inrPrice: 7099,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '7 weeks',
    lessons: 32,
    rating: 4.8,
    students: 7250,
    tags: ['Secure Coding', 'OWASP', 'Web Security', 'DevSecOps']
  },
  {
    id: 'cyber-8',
    title: 'Digital Forensics Investigation',
    instructor: 'Alex Thompson',
    description: 'Master the techniques and tools used in digital forensics to investigate cybersecurity incidents. Learn evidence collection, analysis, and reporting procedures.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1633265486501-b60b6b30043b?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 40,
    rating: 4.8,
    students: 5980,
    tags: ['Digital Forensics', 'Incident Response', 'Evidence Collection', 'Computer Forensics']
  },
  {
    id: 'cyber-9',
    title: 'CISSP Certification Preparation',
    instructor: 'Alex Thompson',
    description: 'Comprehensive preparation for the CISSP certification exam. Covers all eight domains of the CISSP Common Body of Knowledge (CBK) with practice questions and scenario-based exercises.',
    price: 109.99,
    inrPrice: 9199,
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '14 weeks',
    lessons: 56,
    rating: 4.9,
    students: 8540,
    tags: ['CISSP', 'Certification', 'Information Security', 'Risk Management']
  },
  {
    id: 'cyber-10',
    title: 'Mobile Application Security',
    instructor: 'Michael Rodriguez',
    description: 'Learn how to identify and mitigate security vulnerabilities in mobile applications. Covers both Android and iOS platforms, with hands-on testing and secure development practices.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '9 weeks',
    lessons: 38,
    rating: 4.7,
    students: 6470,
    tags: ['Mobile Security', 'Android', 'iOS', 'App Penetration Testing']
  }
];

export const businessCourses: Course[] = [
  {
    id: 'business-1',
    title: 'Business Leadership and Management',
    instructor: 'Raj Patel',
    description: 'Develop essential leadership and management skills to effectively lead teams and organizations. Learn strategic thinking, decision-making, and people management techniques.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    category: 'Business',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.8,
    students: 8540,
    tags: ['Leadership', 'Management', 'Team Building', 'Strategic Thinking']
  },
  {
    id: 'business-2',
    title: 'Financial Management for Entrepreneurs',
    instructor: 'Ananya Desai',
    description: 'Learn essential financial management skills for startup founders and small business owners. Covers financial planning, budgeting, cash flow management, and investment decisions.',
    price: 79.99,
    inrPrice: 6699,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    category: 'Business',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 30,
    rating: 4.7,
    students: 7250,
    tags: ['Finance', 'Entrepreneurship', 'Cash Flow', 'Investment']
  },
  {
    id: 'business-3',
    title: 'Strategic Business Planning',
    instructor: 'Raj Patel',
    description: 'Develop comprehensive business strategies to achieve long-term goals. Learn how to conduct market analysis, identify competitive advantages, and create actionable strategic plans.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop',
    category: 'Business',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 42,
    rating: 4.9,
    students: 6840,
    tags: ['Strategy', 'Business Planning', 'Market Analysis', 'Competitive Analysis']
  }
];

export const marketingCourses: Course[] = [
  {
    id: 'marketing-1',
    title: 'Social Media Marketing Mastery',
    instructor: 'Ananya Desai',
    description: 'Master social media marketing strategies across multiple platforms. Learn content creation, community management, paid advertising, and performance analytics.',
    price: 74.99,
    inrPrice: 6249,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '7 weeks',
    lessons: 35,
    rating: 4.8,
    students: 10240,
    tags: ['Social Media', 'Content Marketing', 'Facebook', 'Instagram', 'LinkedIn']
  },
  {
    id: 'marketing-2',
    title: 'SEO and Content Marketing',
    instructor: 'Ananya Desai',
    description: 'Learn how to drive organic traffic through search engine optimization and content marketing. Master keyword research, on-page SEO, link building, and content strategy.',
    price: 79.99,
    inrPrice: 6699,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop',
    category: 'Marketing',
    level: 'Beginner',
    duration: '8 weeks',
    lessons: 40,
    rating: 4.7,
    students: 8650,
    tags: ['SEO', 'Content Marketing', 'Keyword Research', 'Link Building']
  },
  {
    id: 'marketing-3',
    title: 'Email Marketing Strategies',
    instructor: 'Ananya Desai',
    description: 'Master email marketing from list building to automation and analytics. Learn to create effective campaigns that drive engagement, conversions, and customer loyalty.',
    price: 69.99,
    inrPrice: 5899,
    image: 'https://images.unsplash.com/photo-1526297003708-f5a6b2b6c009?q=80&w=2071&auto=format&fit=crop',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '6 weeks',
    lessons: 30,
    rating: 4.6,
    students: 7420,
    tags: ['Email Marketing', 'Automation', 'Conversion', 'Lead Nurturing']
  }
];

export const cryptocurrencyCourses: Course[] = [
  {
    id: 'crypto-1',
    title: 'Cryptocurrency Trading Strategies',
    instructor: 'Alex Thompson',
    description: 'Learn professional trading strategies for cryptocurrency markets. Covers technical analysis, risk management, and portfolio diversification techniques.',
    price: 94.99,
    inrPrice: 7899,
    image: 'https://images.unsplash.com/photo-1625014412624-fefb0856fa9b?q=80&w=2070&auto=format&fit=crop',
    category: 'Cryptocurrency',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.7,
    students: 8540,
    tags: ['Trading', 'Technical Analysis', 'Risk Management', 'Bitcoin', 'Ethereum']
  },
  {
    id: 'crypto-2',
    title: 'DeFi: Decentralized Finance Fundamentals',
    instructor: 'Alex Thompson',
    description: 'Understand decentralized finance applications and protocols. Learn about lending, borrowing, staking, yield farming, and other DeFi mechanisms.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1645386092949-37342cdb4ed5?q=80&w=2070&auto=format&fit=crop',
    category: 'Cryptocurrency',
    level: 'Intermediate',
    duration: '7 weeks',
    lessons: 32,
    rating: 4.8,
    students: 6740,
    tags: ['DeFi', 'Smart Contracts', 'Yield Farming', 'Staking', 'Liquidity Mining']
  },
  {
    id: 'crypto-3',
    title: 'NFTs and Digital Asset Creation',
    instructor: 'Ananya Desai',
    description: 'Learn how to create, mint, and sell NFTs (Non-Fungible Tokens). Understand NFT marketplaces, digital art creation, and blockchain integration for digital assets.',
    price: 84.99,
    inrPrice: 7099,
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2074&auto=format&fit=crop',
    category: 'Cryptocurrency',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 28,
    rating: 4.6,
    students: 5920,
    tags: ['NFT', 'Digital Art', 'Blockchain', 'Marketplaces', 'Minting']
  }
];

export const excelCourses: Course[] = [
  {
    id: 'excel-1',
    title: 'Excel Data Analysis and Visualization',
    instructor: 'Raj Patel',
    description: 'Master data analysis in Excel using advanced functions, pivot tables, and powerful visualization techniques. Learn to transform raw data into meaningful insights.',
    price: 69.99,
    inrPrice: 5899,
    image: 'https://images.unsplash.com/photo-1589330694146-d48dd159e11a?q=80&w=2070&auto=format&fit=crop',
    category: 'Excel',
    level: 'Intermediate',
    duration: '6 weeks',
    lessons: 30,
    rating: 4.8,
    students: 12450,
    tags: ['Excel', 'Data Analysis', 'Visualization', 'Pivot Tables', 'Charts']
  },
  {
    id: 'excel-2',
    title: 'Excel VBA and Macros',
    instructor: 'Michael Rodriguez',
    description: 'Learn to automate Excel tasks using VBA programming and macros. Create custom functions, automate repetitive tasks, and build interactive dashboards and tools.',
    price: 84.99,
    inrPrice: 7099,
    image: 'https://images.unsplash.com/photo-1605538642019-21d7741689cf?q=80&w=2070&auto=format&fit=crop',
    category: 'Excel',
    level: 'Advanced',
    duration: '8 weeks',
    lessons: 36,
    rating: 4.9,
    students: 9260,
    tags: ['Excel', 'VBA', 'Macros', 'Automation', 'Programming']
  },
  {
    id: 'excel-3',
    title: 'Financial Modeling in Excel',
    instructor: 'Raj Patel',
    description: 'Learn to build financial models for business valuation, budgeting, forecasting, and investment analysis using Excel. Master financial functions and advanced modeling techniques.',
    price: 89.99,
    inrPrice: 7499,
    image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2073&auto=format&fit=crop',
    category: 'Excel',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 42,
    rating: 4.8,
    students: 7840,
    tags: ['Excel', 'Financial Modeling', 'Valuation', 'Forecasting', 'Finance']
  }
];

export const allCourses: Course[] = [
  ...sampleCourses,
  ...programmingCourses,
  ...cybersecurityCourses,
  ...businessCourses,
  ...marketingCourses,
  ...cryptocurrencyCourses,
  ...excelCourses
];

export const getFeaturedCourses = (): Course[] => {
  return allCourses.filter(course => course.featured);
};

export const getCourseById = (id: string): Course | undefined => {
  return allCourses.find(course => course.id === id);
};

export const getInstructorByName = (name: string): Instructor | undefined => {
  return instructors.find(instructor => 
    instructor.name.toLowerCase() === name.toLowerCase());
};

export const getCoursesByInstructor = (instructorName: string): Course[] => {
  return allCourses.filter(course => 
    course.instructor.toLowerCase() === instructorName.toLowerCase());
};

export const getCoursesByCategory = (category: string): Course[] => {
  return allCourses.filter(course => 
    course.category.toLowerCase() === category.toLowerCase());
};
