export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    image?: string;
    links: { name: string; url: string }[];
  };
  experience: {
    company: string;
    role: string;
    dates: string;
    location: string;
    bullets: string[];
    metrics?: string[];
  }[];
  achievements: {
    title: string;
    context: string;
    metric?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    dates: string;
  }[];
  extra: string[];
}
