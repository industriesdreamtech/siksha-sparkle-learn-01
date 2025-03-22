
import { Instructor } from "./data";

// Extend the Instructor interface with additional properties
export interface GlobalTutor extends Instructor {
  languages?: string[];
  country?: string;
  region?: string;
  hourlyRate?: number;
  timezone?: string;
  specialSubjects?: string[];
  availableTimeSlots?: string[];
}

// Create a list of global tutors with language information
export const globalTutors: GlobalTutor[] = [
  // North America
  {
    name: "Dr. Sarah Chen",
    title: "AI & Machine Learning Expert",
    bio: "Dr. Sarah Chen is a leading expert in Artificial Intelligence and Machine Learning with over 12 years of industry and research experience.",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    specializations: ["Machine Learning", "Neural Networks", "Deep Learning"],
    experience: 12,
    totalStudents: 24500,
    totalCourses: 8,
    rating: 4.8,
    reviews: 1842,
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Stanford University",
        year: "2011"
      }
    ],
    achievements: ["Published 25+ research papers in top AI conferences"],
    languages: ["English", "Mandarin"],
    country: "United States",
    region: "North America",
    hourlyRate: 120,
    timezone: "PST"
  },
  {
    name: "Michael Rodriguez",
    title: "Web Development Specialist",
    bio: "Michael Rodriguez is a full-stack developer and educator with expertise in modern web technologies.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    coverImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    specializations: ["JavaScript", "React", "Node.js"],
    experience: 9,
    totalStudents: 18700,
    totalCourses: 12,
    rating: 4.9,
    reviews: 2156,
    social: {
      twitter: "https://twitter.com/mrodriguez",
      linkedin: "https://linkedin.com/in/michaelrodriguez"
    },
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Georgia Tech",
        year: "2014"
      }
    ],
    achievements: ["Lead developer on 3 widely-used open source libraries"],
    languages: ["English", "Spanish", "Portuguese"],
    country: "United States",
    region: "North America",
    hourlyRate: 85,
    timezone: "EST"
  },
  {
    name: "Sophie Tremblay",
    title: "Frontend Development & UX Expert",
    bio: "Sophie specializes in creating beautiful, user-friendly interfaces with modern web technologies.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    coverImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Frontend Development", "UX/UI Design", "CSS"],
    experience: 7,
    totalStudents: 12500,
    totalCourses: 6,
    rating: 4.7,
    reviews: 980,
    social: {
      linkedin: "https://linkedin.com/in/sophietremblay",
      github: "https://github.com/sophiet"
    },
    education: [
      {
        degree: "B.F.A. in Graphic Design",
        institution: "Université de Montréal",
        year: "2015"
      }
    ],
    achievements: ["Award-winning portfolio", "Speaker at CSS Conf"],
    languages: ["English", "French"],
    country: "Canada",
    region: "North America",
    hourlyRate: 75,
    timezone: "EST"
  },

  // Europe
  {
    name: "Hans Müller",
    title: "Data Science & Analytics Professional",
    bio: "Hans brings 15 years of data science experience across multiple industries, specializing in predictive analytics.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Data Science", "Statistics", "Machine Learning"],
    experience: 15,
    totalStudents: 16200,
    totalCourses: 7,
    rating: 4.9,
    reviews: 1240,
    social: {
      linkedin: "https://linkedin.com/in/hansmuller",
      twitter: "https://twitter.com/hansmuller"
    },
    education: [
      {
        degree: "Ph.D. in Statistics",
        institution: "Technical University of Munich",
        year: "2008"
      }
    ],
    achievements: ["Published author", "Former lead data scientist at BMW"],
    languages: ["English", "German", "French"],
    country: "Germany",
    region: "Europe",
    hourlyRate: 95,
    timezone: "CET"
  },
  {
    name: "Isabella Rossi",
    title: "Mobile Development Instructor",
    bio: "Isabella specializes in iOS and Android development with a focus on clean architecture and performance optimization.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    coverImage: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1974&auto=format&fit=crop",
    specializations: ["Mobile Development", "iOS", "Android", "Flutter"],
    experience: 8,
    totalStudents: 13400,
    totalCourses: 5,
    rating: 4.8,
    reviews: 920,
    social: {
      github: "https://github.com/isabellarossi",
      linkedin: "https://linkedin.com/in/isabellarossi"
    },
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Politecnico di Milano",
        year: "2014"
      }
    ],
    achievements: ["Created popular Flutter packages", "Google Developer Expert"],
    languages: ["English", "Italian", "Spanish"],
    country: "Italy",
    region: "Europe",
    hourlyRate: 80,
    timezone: "CET"
  },
  {
    name: "Viktor Petrov",
    title: "Cybersecurity Specialist",
    bio: "Viktor is an ethical hacker and security expert who has worked with major financial institutions across Europe.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Cybersecurity", "Ethical Hacking", "Network Security"],
    experience: 12,
    totalStudents: 8900,
    totalCourses: 4,
    rating: 4.9,
    reviews: 760,
    social: {
      linkedin: "https://linkedin.com/in/viktorpetrov",
      twitter: "https://twitter.com/viktorpetrovsky"
    },
    education: [
      {
        degree: "M.S. in Information Security",
        institution: "Moscow State University",
        year: "2010"
      }
    ],
    achievements: ["CISSP certified", "Bug bounty hunter with 50+ verified vulnerabilities"],
    languages: ["English", "Russian", "Bulgarian", "Ukrainian"],
    country: "Bulgaria",
    region: "Europe",
    hourlyRate: 90,
    timezone: "EET"
  },

  // Asia
  {
    name: "Dr. Priya Sharma",
    title: "Data Science & AI Researcher",
    bio: "Dr. Priya Sharma is a renowned data scientist and AI researcher with expertise in predictive analytics and natural language processing.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    coverImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
    specializations: ["Data Science", "NLP", "Statistical Modeling"],
    experience: 10,
    totalStudents: 16500,
    totalCourses: 7,
    rating: 4.9,
    reviews: 1250,
    social: {
      twitter: "https://twitter.com/drpriyasharma",
      linkedin: "https://linkedin.com/in/priyasharma"
    },
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "IIT Delhi",
        year: "2013"
      }
    ],
    achievements: ["Top researcher award at International Conference on Data Science"],
    languages: ["English", "Hindi", "Bengali", "Tamil"],
    country: "India",
    region: "Asia",
    hourlyRate: 70,
    timezone: "IST"
  },
  {
    name: "Hiroshi Tanaka",
    title: "Game Development & Computer Graphics",
    bio: "Hiroshi is a game developer with experience at major Japanese gaming companies. He specializes in Unity and computer graphics.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Game Development", "Unity", "Computer Graphics"],
    experience: 14,
    totalStudents: 9800,
    totalCourses: 6,
    rating: 4.8,
    reviews: 840,
    social: {
      github: "https://github.com/hiroshitanaka",
      linkedin: "https://linkedin.com/in/hiroshitanaka"
    },
    education: [
      {
        degree: "B.S. in Computer Science",
        institution: "Tokyo University",
        year: "2009"
      }
    ],
    achievements: ["Lead developer on several AAA game titles", "Published game development books"],
    languages: ["English", "Japanese"],
    country: "Japan",
    region: "Asia",
    hourlyRate: 85,
    timezone: "JST"
  },
  {
    name: "Min-ji Kim",
    title: "UI/UX Designer & Frontend Developer",
    bio: "Min-ji combines design thinking with technical skills to create beautiful and functional digital experiences.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    coverImage: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
    specializations: ["UI/UX Design", "Frontend Development", "Design Systems"],
    experience: 6,
    totalStudents: 7500,
    totalCourses: 4,
    rating: 4.7,
    reviews: 650,
    social: {
      dribbble: "https://dribbble.com/minjikim",
      linkedin: "https://linkedin.com/in/minjikim"
    },
    education: [
      {
        degree: "M.A. in Digital Design",
        institution: "Seoul National University",
        year: "2017"
      }
    ],
    achievements: ["Award-winning designer", "Creator of popular design system"],
    languages: ["English", "Korean", "Japanese"],
    country: "South Korea",
    region: "Asia",
    hourlyRate: 75,
    timezone: "KST"
  },

  // Middle East
  {
    name: "Ahmed Al-Farsi",
    title: "Cloud Architecture & DevOps",
    bio: "Ahmed specializes in cloud infrastructure, containerization, and CI/CD pipelines. He has extensive experience with AWS and Azure.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    coverImage: "https://images.unsplash.com/photo-1451180102446-f3ece451e9d1?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Cloud Computing", "DevOps", "Containerization"],
    experience: 9,
    totalStudents: 11200,
    totalCourses: 5,
    rating: 4.8,
    reviews: 980,
    social: {
      github: "https://github.com/ahmedalfarsi",
      linkedin: "https://linkedin.com/in/ahmedalfarsi"
    },
    education: [
      {
        degree: "M.S. in Computer Engineering",
        institution: "King Fahd University",
        year: "2014"
      }
    ],
    achievements: ["AWS certified solutions architect", "Docker certified associate"],
    languages: ["English", "Arabic", "French"],
    country: "UAE",
    region: "Middle East",
    hourlyRate: 85,
    timezone: "GST"
  },

  // Africa
  {
    name: "Oluwaseun Adeyemi",
    title: "Mobile Development & Blockchain",
    bio: "Oluwaseun is an expert in mobile app development and blockchain technology with a focus on financial inclusion applications.",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    specializations: ["Mobile Development", "Blockchain", "Fintech"],
    experience: 7,
    totalStudents: 8600,
    totalCourses: 4,
    rating: 4.9,
    reviews: 720,
    social: {
      github: "https://github.com/oluwaseun",
      linkedin: "https://linkedin.com/in/oluwaseunadeyemi"
    },
    education: [
      {
        degree: "B.S. in Computer Science",
        institution: "University of Lagos",
        year: "2016"
      }
    ],
    achievements: ["Founder of tech education non-profit", "Google Africa developer advocate"],
    languages: ["English", "Yoruba", "French"],
    country: "Nigeria",
    region: "Africa",
    hourlyRate: 65,
    timezone: "WAT"
  },
  
  // South America
  {
    name: "Carolina Silva",
    title: "Full Stack Developer & AWS Specialist",
    bio: "Carolina is a full stack developer with a passion for cloud solutions and serverless architectures.",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    coverImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Full Stack Development", "AWS", "Serverless"],
    experience: 8,
    totalStudents: 12700,
    totalCourses: 6,
    rating: 4.9,
    reviews: 950,
    social: {
      github: "https://github.com/carolinasilva",
      linkedin: "https://linkedin.com/in/carolinasilva"
    },
    education: [
      {
        degree: "M.S. in Software Engineering",
        institution: "University of São Paulo",
        year: "2015"
      }
    ],
    achievements: ["AWS Community Hero", "Tech conference speaker"],
    languages: ["English", "Portuguese", "Spanish"],
    country: "Brazil",
    region: "South America",
    hourlyRate: 70,
    timezone: "BRT"
  },

  // Australia
  {
    name: "James Wilson",
    title: "Cloud Architecture & Security",
    bio: "James is an expert in cloud infrastructure and cybersecurity with extensive experience in financial and healthcare sectors.",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    coverImage: "https://images.unsplash.com/photo-1451180102446-f3ece451e9d1?q=80&w=2070&auto=format&fit=crop",
    specializations: ["Cloud Architecture", "Security", "Compliance"],
    experience: 15,
    totalStudents: 14500,
    totalCourses: 7,
    rating: 4.8,
    reviews: 1120,
    social: {
      linkedin: "https://linkedin.com/in/jameswilson",
      twitter: "https://twitter.com/jameswilsoncloud"
    },
    education: [
      {
        degree: "M.S. in Information Security",
        institution: "University of Melbourne",
        year: "2008"
      }
    ],
    achievements: ["Multiple cloud certifications", "Published author on cloud security"],
    languages: ["English"],
    country: "Australia",
    region: "Oceania",
    hourlyRate: 95,
    timezone: "AEST"
  }
];

// Generate more tutors programmatically to reach 100+
const languages = [
  "English", "Spanish", "Mandarin", "Hindi", "Arabic", "Portuguese", "Russian", "Japanese", 
  "German", "French", "Italian", "Korean", "Dutch", "Swedish", "Hebrew", "Polish", "Turkish", 
  "Vietnamese", "Thai", "Indonesian", "Malay", "Farsi", "Greek", "Hungarian", "Czech", "Danish",
  "Finnish", "Norwegian", "Romanian", "Swahili", "Ukrainian", "Urdu", "Bengali", "Punjabi", "Tamil"
];

const regions = ["North America", "Europe", "Asia", "South America", "Africa", "Middle East", "Oceania"];
const countries = {
  "North America": ["United States", "Canada", "Mexico"],
  "Europe": ["United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands", "Portugal", "Sweden", "Norway", "Switzerland"],
  "Asia": ["India", "China", "Japan", "South Korea", "Singapore", "Malaysia", "Indonesia", "Philippines", "Thailand", "Vietnam"],
  "South America": ["Brazil", "Argentina", "Colombia", "Chile", "Peru", "Ecuador"],
  "Africa": ["Nigeria", "South Africa", "Kenya", "Egypt", "Morocco", "Ghana", "Ethiopia"],
  "Middle East": ["UAE", "Saudi Arabia", "Israel", "Turkey", "Qatar", "Jordan"],
  "Oceania": ["Australia", "New Zealand"]
};

const specializations = [
  "Web Development", "Data Science", "Machine Learning", "Mobile Development", "Cloud Computing",
  "DevOps", "Cybersecurity", "Blockchain", "Game Development", "UI/UX Design", "Digital Marketing",
  "Backend Development", "Frontend Development", "Database Administration", "Network Engineering",
  "Product Management", "Technical Writing", "Quality Assurance", "System Architecture", "AR/VR Development"
];

const names = [
  "Emma Johnson", "Liam Garcia", "Noah Zhang", "Olivia Kumar", "William Patel", "Sophia Rodriguez", "James Kim",
  "Charlotte Smith", "Benjamin Liu", "Amelia Gupta", "Ethan Nguyen", "Isabella Martinez", "Lucas Wong", "Mia Sharma",
  "Alexander Lee", "Harper Gonzalez", "Daniel Chen", "Evelyn Müller", "Henry Singh", "Avery Cohen", "Mateo Ali",
  "Camila Tanaka", "Sebastian Petrov", "Victoria Ibrahim", "Jack O'Sullivan", "Lily Schmidt", "Owen Novak", "Ella Park",
  "Miles Rossi", "Aurora Andersen", "Leo Dubois", "Luna Fischer", "Caleb Andersson", "Chloe Moreau", "Levi Yamamoto",
  "Penelope Wagner", "Ezra Bianchi", "Hazel Kowalski", "Asher Ferreira", "Scarlett Jensen", "Ryan Sokolov", "Nora Reyes",
  "Eli Vasiliev", "Aria Khan", "Nathan Jansen", "Zoe Sato", "Isaiah Maier", "Leah Weber", "Jayden Popov", "Violet Mbeki"
];

// Generate additional tutors to reach 100+
for (let i = 0; i < 80; i++) {
  const region = regions[Math.floor(Math.random() * regions.length)];
  const countryList = countries[region];
  const country = countryList[Math.floor(Math.random() * countryList.length)];
  
  // Select 1-3 languages
  const langCount = Math.floor(Math.random() * 3) + 1;
  const tutorLanguages: string[] = [];
  for (let j = 0; j < langCount; j++) {
    const lang = languages[Math.floor(Math.random() * languages.length)];
    if (!tutorLanguages.includes(lang)) {
      tutorLanguages.push(lang);
    }
  }
  
  // Select 2-3 specializations
  const specCount = Math.floor(Math.random() * 2) + 2;
  const tutorSpecs: string[] = [];
  for (let j = 0; j < specCount; j++) {
    const spec = specializations[Math.floor(Math.random() * specializations.length)];
    if (!tutorSpecs.includes(spec)) {
      tutorSpecs.push(spec);
    }
  }
  
  const name = names[i % names.length] + (i >= names.length ? ` ${String.fromCharCode(65 + Math.floor(i / names.length))}` : "");
  const experience = Math.floor(Math.random() * 15) + 3;
  const students = Math.floor(Math.random() * 20000) + 1000;
  const courses = Math.floor(Math.random() * 10) + 1;
  const rating = (Math.random() * 1.0 + 4.0).toFixed(1);
  const reviews = Math.floor(Math.random() * 2000) + 100;
  
  globalTutors.push({
    name,
    title: `${tutorSpecs[0]} Specialist`,
    bio: `Experienced educator with ${experience} years of expertise in ${tutorSpecs.join(", ")}. Passionate about helping students achieve their learning goals.`,
    avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 99)}.jpg`,
    coverImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    specializations: tutorSpecs,
    experience,
    totalStudents: students,
    totalCourses: courses,
    rating: parseFloat(rating),
    reviews,
    social: {
      linkedin: `https://linkedin.com/in/${name.toLowerCase().replace(/\s+/g, "")}`
    },
    education: [
      {
        degree: Math.random() > 0.7 ? "Ph.D." : Math.random() > 0.5 ? "M.S." : "B.S.",
        institution: "University of " + country,
        year: String(2023 - experience - Math.floor(Math.random() * 5))
      }
    ],
    achievements: [`${Math.floor(Math.random() * 10) + 1}+ years of professional teaching experience`],
    languages: tutorLanguages,
    country,
    region,
    hourlyRate: Math.floor(Math.random() * 50) + 50,
    timezone: "GMT" + (Math.random() > 0.5 ? "+" : "-") + Math.floor(Math.random() * 12)
  });
}
