import Figma from '../components/svg/figma.svg'
import Github from '../components/svg/github.svg'
import Three from '../components/svg/threejs.svg'
import SvgReact from '../components/svg/react.svg'
import Tailwind from '../components/svg/tailwindcss.svg'
import JavaScript from '../components/svg/javascript.svg'

import type { Tech } from '../types.ts';

export const nexusData: Tech[] = [
  {
    name: "React",
    svg: SvgReact.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 1,
  },
  {
    name: "Figma",
    svg: Figma.src,
    bgColor: "#f8fafc",
    textColor: "#000",
    index: 2,
  },
  {
    name: "JavaScript",
    svg: JavaScript.src,
    bgColor: "#665e24",
    textColor: "#fff",
    index: 3,
  },
  {
    name: "ThreeJS",
    svg: Three.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 4,
  },
  {
    name: "Tailwindcss",
    svg: Tailwind.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 5,
  },
  {
    name: "Github",
    svg: Github.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 6,
  },
];