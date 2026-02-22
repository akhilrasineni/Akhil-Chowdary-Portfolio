export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
