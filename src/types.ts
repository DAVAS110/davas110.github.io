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

export interface Tech {
  name: string;
  svg: unknown;
  bgColor: string;
  textColor: string;
  index: number;
}