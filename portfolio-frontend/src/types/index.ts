export interface Skill {
  id: string;
  name: string;
  category: 'ai-ml' | 'big-data' | 'cloud' | 'programming' | 'databases' | 'devops' | 'tools';
  level: number; // 0-100
  icon: string;
  color?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: 'nlp' | 'computer-vision' | 'deep-learning' | 'generative-ai' | 'web';
  image?: string;
  gif?: string;
  githubUrl?: string;
  demoUrl?: string;
  date: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  logo?: string;
  credentialUrl?: string;
  badge?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startYear: string;
  endYear: string;
  description?: string;
  status: 'completed' | 'in-progress';
}

export interface Language {
  name: string;
  level: 'native' | 'advanced' | 'intermediate' | 'basic';
  description?: string;
}

export interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  likes: number;
  avatar?: string;
}

export interface Visitor {
  id: string;
  ip: string;
  country?: string;
  city?: string;
  browser?: string;
  device?: string;
  os?: string;
  pageViews: string[];
  timeSpent: number;
  visitedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Analytics {
  totalVisitors: number;
  todayVisitors: number;
  weeklyVisitors: number;
  monthlyVisitors: number;
  averageTimeSpent: number;
  topPages: { page: string; views: number }[];
  countriesDistribution: { country: string; visitors: number }[];
  browserDistribution: { browser: string; count: number }[];
  dailyStats: { date: string; visitors: number }[];
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
  photo?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
