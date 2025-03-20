
export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
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
