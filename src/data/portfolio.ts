import type { LucideIcon } from 'lucide-react';
import {
  Brain, ShieldCheck, LineChart, Code2, Globe, Wrench, Users,
  GraduationCap, Briefcase, Award, Mail, Phone, Linkedin, Github,
  Target, Sparkles, Lightbulb, Cpu, Layers, Rocket, Flag, TrendingUp, Presentation,
} from 'lucide-react';

export const profile = {
  name: 'Prabhjot Singh',
  role: 'B.Tech AI/ML Student',
  tagline:
    'Computer Science and AI/ML student passionate about building practical solutions with artificial intelligence, machine learning and modern web technologies.',
  location: 'Phagwara, Punjab, India',
  email: 'prabh567jot@gmail.com',
  phone: '+91-6280320105',
  linkedin: 'https://www.linkedin.com/in/prabhjot-singh-4704bb384',
  github: 'https://github.com/1806prabh-jpg',
  cvPath: '/Prabhjot_Singh_CV.pdf',
  portfolioUrl: 'https://prabhjot-portfolio-beige.vercel.app/',
};

export type NavItem = { id: string; label: string };
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const aboutHighlights = [
  { icon: Brain, label: 'AI / ML', desc: 'Building intelligent, practical tools.' },
  { icon: Code2, label: 'Programming', desc: 'Clean code in Python, C & JavaScript.' },
  { icon: Globe, label: 'Web Development', desc: 'React & MERN-stack experiences.' },
  { icon: Lightbulb, label: 'Problem-Solving', desc: 'Breaking problems into clear steps.' },
  { icon: Cpu, label: 'Analytical Thinking', desc: 'Data-driven, methodical approach.' },
  { icon: Rocket, label: 'Continuous Learning', desc: 'Always exploring new tech.' },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  status: 'Ongoing' | 'Completed';
};
export const education: Education[] = [
  {
    school: 'RKS Senior Secondary School, Moga',
    degree: '10th Standard',
    period: '2023 – 2024',
    status: 'Completed',
  },
  {
    school: 'RKS Senior Secondary School, Moga',
    degree: '12th Standard',
    period: '2024 – 2025',
    status: 'Completed',
  },
  {
    school: 'Lovely Professional University, Phagwara',
    degree: 'Bachelor of Technology — AI/ML',
    period: '2025 – Present',
    status: 'Ongoing',
  },
];

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};
export const skillGroups: SkillGroup[] = [
  { category: 'Programming', icon: Code2, skills: ['Python', 'C', 'C++', 'JavaScript'] },
  { category: 'Web', icon: Globe, skills: ['HTML', 'CSS', 'React', 'MERN Stack'] },
  { category: 'AI / ML', icon: Brain, skills: ['Scikit-learn', 'AI/ML', 'NLP'] },
  { category: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'VS Code', 'TradingView', 'Microsoft Excel'] },
  { category: 'Soft Skills', icon: Users, skills: ['Leadership', 'Team Player', 'Analytical', 'Problem-Solving'] },
];

export type Internship = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};
export const internships: Internship[] = [
  {
    role: 'AI/ML Virtual Intern',
    org: 'Robokwik',
    period: 'June 2026 – August 2026',
    description:
      '2-month virtual internship covering Python, AI/ML concepts, assessments, and project-based learning across the machine-learning lifecycle.',
    tags: ['Python', 'AI/ML', 'Project-Based Learning'],
    icon: Brain,
  },
  {
    role: 'Full Stack Web Developer Intern',
    org: 'Virtual Internship',
    period: 'June 2026 – July 2026',
    description:
      '8-week virtual internship covering web design, the MERN stack, and full-stack development with hands-on live project work.',
    tags: ['MERN Stack', 'Web Design', 'Full-Stack'],
    icon: Layers,
  },
];

export type Project = {
  title: string;
  tech: string[];
  description: string;
  icon: LucideIcon;
  accent: string;
  url: string | null;
};
export const projects: Project[] = [
  {
    title: 'AI Resume Analyzer',
    tech: ['Python', 'AI/ML', 'NLP'],
    description:
      'Built an AI-powered resume analysis tool to compare resumes with job requirements and identify relevant skills, gaps, and improvement areas.',
    icon: Sparkles,
    accent: 'from-sky-500/20 to-cyan-400/10',
    url: null,
  },
  {
    title: 'Spam Message Detector',
    tech: ['Python', 'Scikit-learn', 'NLP'],
    description:
      'Developed a machine-learning spam classifier and evaluated multiple models; Multinomial Naive Bayes achieved a 95.07% F1-score on evaluation data.',
    icon: ShieldCheck,
    accent: 'from-emerald-500/20 to-teal-400/10',
    url: null,
  },
  {
    title: 'Stock Market / Trading Risk Management App',
    tech: ['Python', 'Data Analysis', 'Risk Management'],
    description:
      'Developed a trading-risk management application concept for monitoring positions, assessing portfolio risk, and supporting safer trade decisions.',
    icon: LineChart,
    accent: 'from-violet-500/20 to-indigo-400/10',
    url: null,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  kind: 'certificate' | 'internship';
  focus?: string;
  icon: LucideIcon;
};
export const certifications: Certification[] = [
  { title: 'Generative AI for Beginners', issuer: 'Simplilearn', date: 'March 2026', kind: 'certificate', icon: Sparkles },
  { title: 'Machine Learning Fundamentals', issuer: 'Saylor Academy', date: 'June 2026', kind: 'certificate', icon: Brain },
  { title: 'Leadership and Management', issuer: 'Saylor Academy', date: 'May 2026', kind: 'certificate', icon: Users },
  {
    title: 'Robokwik AI/ML Virtual Internship',
    issuer: 'Robokwik',
    date: 'June 2026 – August 2026',
    kind: 'internship',
    focus: 'Python, AI/ML, assessments and project-based learning',
    icon: Brain,
  },
  {
    title: 'Full Stack Web Developer Internship',
    issuer: 'Virtual Internship',
    date: 'June 2026 – July 2026',
    kind: 'internship',
    focus: 'Web design, MERN stack and full-stack development with live project work',
    icon: Layers,
  },
];

export const achievements = [
  { icon: Target, value: '20+', label: 'DSA Problems Solved' },
  { icon: Award, value: '30+', label: 'HackerRank Problems Solved' },
];

export const strengths = [
  { icon: Lightbulb, title: 'Problem-Solving', desc: 'Approach challenges methodically and break them into clear, manageable steps.' },
  { icon: Cpu, title: 'Analytical Thinking', desc: 'Reason through data and logic to reach well-supported conclusions.' },
  { icon: Brain, title: 'AI/ML Knowledge', desc: 'Grounding in machine learning, NLP and model evaluation from coursework and projects.' },
  { icon: Code2, title: 'Programming', desc: 'Comfortable building in Python, C and JavaScript across coursework and projects.' },
  { icon: Globe, title: 'Web Development', desc: 'Hands-on with React and the MERN stack through full-stack internship work.' },
  { icon: Rocket, title: 'Willingness to Learn', desc: 'Actively exploring new tools and frameworks to keep skills current.' },
  { icon: Users, title: 'Teamwork', desc: 'Collaborate openly and communicate clearly within team settings.' },
  { icon: Sparkles, title: 'Building Practical Solutions', desc: 'Focused on creating tools that solve real, everyday problems.' },
];

export const valueProps = [
  { icon: Lightbulb, title: 'Problem-Solving', desc: 'I bring structure to ambiguity and turn problems into clear, buildable steps.' },
  { icon: Cpu, title: 'Analytical Thinking', desc: 'I make decisions based on evidence, data and careful reasoning.' },
  { icon: Brain, title: 'AI/ML Knowledge', desc: 'I contribute hands-on experience in NLP and machine-learning model development.' },
  { icon: Code2, title: 'Programming', desc: 'I write clean, maintainable code in Python, C and JavaScript.' },
  { icon: Globe, title: 'Web Development', desc: 'I can build and ship responsive interfaces with React and the MERN stack.' },
  { icon: Rocket, title: 'Willingness to Learn', desc: 'I adapt quickly and continuously pick up new tools and concepts.' },
  { icon: Users, title: 'Teamwork', desc: 'I collaborate well and communicate openly with teammates and mentors.' },
  { icon: Sparkles, title: 'Practical Solutions', desc: 'I focus on outcomes — building tools that genuinely solve real problems.' },
];

export const goals = [
  { icon: Brain, title: 'Master AI & ML Fundamentals', desc: 'Build strong expertise in Artificial Intelligence and Machine Learning while continuously improving my programming, problem-solving and software development skills.' },
  { icon: TrendingUp, title: 'Gain Industry Experience', desc: 'Gain practical industry experience, contribute to meaningful technology projects, and grow into a skilled AI/ML professional.' },
  { icon: Presentation, title: 'Develop Real-World Projects', desc: 'Apply classroom learning to build impactful, production-quality tools that solve genuine problems.' },
  { icon: Flag, title: 'Become a Well-Rounded Engineer', desc: 'Grow into a capable software developer with a strong blend of AI/ML, web development and analytical skills.' },
];

export const careerGoal = {
  short:
    'My goal is to build a career in technology, AI/ML and software development — starting as a strong intern and growing into a capable engineer.',
  long:
    "I'm early in my B.Tech journey and focused on learning the fundamentals well. I want to apply AI/ML and web development to real problems, gain industry experience through internships, and grow into a role where I can design and ship meaningful software. I'm realistic about where I am — not an expert yet, but committed to getting there through consistent practice and learning.",
};

export const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Mobile', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'prabhjot-singh-4704bb384', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: '1806prabh-jpg', href: profile.github },
];

export const heroStats = [
  { icon: GraduationCap, value: 'B.Tech AI/ML', label: '2025 – Present' },
  { icon: Briefcase, value: '2 Internships', label: 'Hands-on experience' },
  { icon: Award, value: '50+ Problems', label: 'DSA + HackerRank' },
  { icon: Sparkles, value: '3 Projects', label: 'Built with AI & web' },
];

export const marqueeWords = [
  'Python', 'AI/ML', 'NLP', 'React', 'MERN Stack', 'Scikit-learn',
  'JavaScript', 'C', 'C++', 'Data Analysis', 'Git', 'GitHub',
  'TradingView', 'Problem-Solving',
];
