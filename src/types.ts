export interface NavItem {
  name: string;
  id: string;
  index: number
}
export interface Project {
  name: string;
  description: string;
  img: string;
  href: string;
  color: string;
  index: number;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  img: string;
  index: number;
}

export interface education {
  degree: string;,
  institution: string;
  img: string;
  index: number;
}

export interface Tech {
  name: string;
  svg: unknown;
  bgColor: string;
  textColor: string;
  index: number;
}