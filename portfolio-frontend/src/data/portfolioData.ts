import { Skill, Experience, Project, Certification, Education, Language, ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Youssef Chlih",
  title: "Big Data & Artificial Intelligence Student",
  email: "youssefchlih.ai@gmail.com",
  phone: "+212 606 544 498",
  linkedin: "linkedin.com/in/youssef-chlih",
  location: "Salé, Morocco",
  summary: "Big Data & Artificial Intelligence student at EST Salé with strong expertise in Machine Learning, Deep Learning, and Computer Vision. Proven track record in developing AI-powered solutions including 3D object classification systems, intelligent recruitment platforms, and predictive analytics models. Autonomous, curious, and analytical with excellent English proficiency.",
};

export const languages: Language[] = [
  { name: "English", level: "advanced", description: "Advanced (written & spoken) – Capable of working in English-speaking environments" },
  { name: "French", level: "advanced", description: "Advanced proficiency" },
  { name: "Arabic", level: "native", description: "Native speaker" },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Big Data & Artificial Intelligence",
    institution: "EST Salé",
    startYear: "2025",
    endYear: "Present",
    status: "in-progress",
  },
  {
    id: "edu-2",
    degree: "DUT in Artificial Intelligence & Data Engineering",
    institution: "EST Nador",
    startYear: "2023",
    endYear: "2025",
    description: "Graduated with comprehensive training in ML, DL, NLP, and Computer Vision",
    status: "completed",
  },
  {
    id: "edu-3",
    degree: "Baccalaureate in Science-Mathematics A (BIOF)",
    institution: "Lycée Moulay Rachid",
    startYear: "2022",
    endYear: "2023",
    status: "completed",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "AI Developer Intern",
    company: "3d Smart Factory",
    location: "Mohammedia, Morocco",
    startDate: "February 2025",
    endDate: "June 2025",
    description: [
      "Developed comprehensive 3D object classification system using advanced Machine Learning techniques",
      "Implemented DGCNN (Dynamic Graph Convolutional Neural Network) model with ModelNet10 dataset achieving high accuracy in 3D shape recognition",
      "Created interactive Streamlit application for real-time 3D object classification with user-friendly visualization",
      "Demonstrated autonomy in project management and problem-solving throughout development cycle"
    ],
    technologies: ["Python", "PyTorch", "DGCNN", "Streamlit", "3D Vision"],
  },
  {
    id: "exp-2",
    title: "AI Development Intern",
    company: "HardTech Maroc",
    location: "Casablanca, Morocco",
    startDate: "August 2024",
    endDate: "September 2024",
    description: [
      "Designed automated IT fault detection system utilizing Machine Learning algorithms for predictive maintenance",
      "Conducted comprehensive data analysis and preprocessing to optimize model performance",
      "Developed predictive models to anticipate system failures, improving IT infrastructure reliability by identifying patterns in historical data"
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Maintenance"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Kwizy",
    description: "Intelligent Quiz Platform with RAG Architecture",
    fullDescription: "Developed AI-powered web application using Retrieval-Augmented Generation (RAG) architecture with Mistral AI. Implemented Agile/Scrum methodology with multi-role authentication, gamification features, and intelligent flashcard system. Achieved 82% test coverage with automated testing and CI/CD pipeline deployment.",
    technologies: ["Python", "RAG", "Mistral AI", "Flask", "CI/CD"],
    category: "nlp",
    date: "December 2025",
    featured: true,
  },
  {
    id: "proj-2",
    title: "HireGenius",
    description: "AI-Based Intelligent Recruitment System",
    fullDescription: "Developed comprehensive CV analysis system using NLP to rank candidates based on relevance and qualifications. Implemented YOLOv8 for facial expression analysis during interview processes using Computer Vision. Designed CNN-BiLSTM voice analysis system to evaluate candidate emotions, demonstrating deep understanding of sequential data processing. Built full-stack recruitment platform integrating multiple AI technologies.",
    technologies: ["NLP", "YOLOv8", "CNN-BiLSTM", "Computer Vision", "Deep Learning"],
    category: "computer-vision",
    date: "April 2025",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Realistic Image Generation with CNNs & GANs",
    description: "Deep Learning Generative AI Project",
    fullDescription: "Explored creation of synthetic faces using Generative Adversarial Networks (GANs). Conducted experimental research in Computer Vision and Generative AI applications. Applied advanced CNN architectures for photorealistic image generation.",
    technologies: ["Deep Learning", "GANs", "CNNs", "Generative AI", "Computer Vision"],
    category: "generative-ai",
    date: "2024",
    featured: true,
  },
];

export const skills: Skill[] = [
  // AI & Machine Learning
  { id: "skill-1", name: "Deep Learning", category: "ai-ml", level: 90, icon: "brain", color: "#8B5CF6" },
  { id: "skill-2", name: "Neural Networks", category: "ai-ml", level: 88, icon: "network", color: "#8B5CF6" },
  { id: "skill-3", name: "NLP", category: "ai-ml", level: 85, icon: "message-square", color: "#8B5CF6" },
  { id: "skill-4", name: "Computer Vision", category: "ai-ml", level: 88, icon: "eye", color: "#8B5CF6" },
  { id: "skill-5", name: "Generative AI", category: "ai-ml", level: 82, icon: "wand-2", color: "#8B5CF6" },
  { id: "skill-6", name: "LLMs", category: "ai-ml", level: 80, icon: "bot", color: "#8B5CF6" },
  
  // ML Frameworks
  { id: "skill-7", name: "PyTorch", category: "ai-ml", level: 90, icon: "flame", color: "#EE4C2C" },
  { id: "skill-8", name: "TensorFlow", category: "ai-ml", level: 85, icon: "layers", color: "#FF6F00" },
  { id: "skill-9", name: "Scikit-learn", category: "ai-ml", level: 88, icon: "chart-bar", color: "#F7931E" },
  { id: "skill-10", name: "OpenCV", category: "ai-ml", level: 85, icon: "camera", color: "#5C3EE8" },
  { id: "skill-11", name: "YOLOv8", category: "ai-ml", level: 82, icon: "scan", color: "#00FFFF" },
  { id: "skill-12", name: "Hugging Face", category: "ai-ml", level: 80, icon: "smile", color: "#FFD21E" },
  
  // Big Data
  { id: "skill-13", name: "Hadoop", category: "big-data", level: 80, icon: "database", color: "#66CCFF" },
  { id: "skill-14", name: "Spark", category: "big-data", level: 82, icon: "zap", color: "#E25A1C" },
  { id: "skill-15", name: "Airflow", category: "big-data", level: 78, icon: "wind", color: "#017CEE" },
  { id: "skill-16", name: "Kafka", category: "big-data", level: 75, icon: "server", color: "#231F20" },
  
  // Programming
  { id: "skill-17", name: "Python", category: "programming", level: 95, icon: "code-2", color: "#3776AB" },
  { id: "skill-18", name: "JavaScript", category: "programming", level: 78, icon: "file-code", color: "#F7DF1E" },
  { id: "skill-19", name: "Scala", category: "programming", level: 72, icon: "terminal", color: "#DC322F" },
  { id: "skill-20", name: "Java", category: "programming", level: 75, icon: "coffee", color: "#007396" },
  
  // Databases
  { id: "skill-21", name: "PostgreSQL", category: "databases", level: 82, icon: "database", color: "#336791" },
  { id: "skill-22", name: "MongoDB", category: "databases", level: 80, icon: "leaf", color: "#47A248" },
  { id: "skill-23", name: "Redis", category: "databases", level: 75, icon: "hard-drive", color: "#DC382D" },
  { id: "skill-24", name: "Cassandra", category: "databases", level: 70, icon: "circle-dot", color: "#1287B1" },
  { id: "skill-25", name: "Neo4j", category: "databases", level: 68, icon: "git-branch", color: "#008CC1" },
  
  // Cloud & DevOps
  { id: "skill-26", name: "Oracle Cloud", category: "cloud", level: 80, icon: "cloud", color: "#F80000" },
  { id: "skill-27", name: "AWS", category: "cloud", level: 75, icon: "cloud", color: "#FF9900" },
  { id: "skill-28", name: "Docker", category: "devops", level: 82, icon: "container", color: "#2496ED" },
  { id: "skill-29", name: "Kubernetes", category: "devops", level: 75, icon: "ship", color: "#326CE5" },
  { id: "skill-30", name: "Terraform", category: "devops", level: 70, icon: "blocks", color: "#7B42BC" },
  { id: "skill-31", name: "CI/CD", category: "devops", level: 80, icon: "repeat", color: "#40BE46" },
  
  // Tools
  { id: "skill-32", name: "Git", category: "tools", level: 88, icon: "git-branch", color: "#F05032" },
  { id: "skill-33", name: "Jupyter", category: "tools", level: 90, icon: "notebook", color: "#F37626" },
  { id: "skill-34", name: "Streamlit", category: "tools", level: 85, icon: "layout", color: "#FF4B4B" },
  { id: "skill-35", name: "FastAPI", category: "tools", level: 82, icon: "rocket", color: "#009688" },
  { id: "skill-36", name: "React", category: "tools", level: 75, icon: "atom", color: "#61DAFB" },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "2025",
    badge: "🏆",
  },
  {
    id: "cert-2",
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    date: "2024",
    badge: "☁️",
  },
  {
    id: "cert-3",
    name: "Machine Learning Engineering for Production (MLOps) Level 2",
    issuer: "Coursera",
    date: "2024",
    badge: "🤖",
  },
  {
    id: "cert-4",
    name: "Data Analysis with Python",
    issuer: "IBM/Coursera",
    date: "2024",
    badge: "📊",
  },
  {
    id: "cert-5",
    name: "The Machine Learning Process A-Z",
    issuer: "365 Data Science",
    date: "2024",
    badge: "🎯",
  },
  {
    id: "cert-6",
    name: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
    date: "2024",
    badge: "🐍",
  },
];

export const keyCompetencies = [
  {
    title: "Analytical Thinking",
    description: "Strong ability to analyze complex problems and develop innovative AI solutions",
    icon: "brain",
  },
  {
    title: "Autonomy",
    description: "Self-driven in project management and independent learning of new technologies",
    icon: "target",
  },
  {
    title: "Curiosity",
    description: "Passionate about emerging AI trends (Generative AI, LLMs, Computer Vision)",
    icon: "lightbulb",
  },
  {
    title: "Team Collaboration",
    description: "Experience working in Agile/Scrum environments with cross-functional teams",
    icon: "users",
  },
  {
    title: "Communication",
    description: "Excellent written and verbal communication skills in English and French",
    icon: "message-circle",
  },
];

export const statistics = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies Mastered", value: 25, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "" },
  { label: "Years of Learning", value: 3, suffix: "+" },
];
