import Html from '../components/svg/html.svg'
import node from '../components/svg/node.svg'
import Java from '../components/svg/Java.svg'
import Figma from '../components/svg/figma.svg'
import Linux from '../components/svg/linux.svg'
import Astro from '../components/svg/astro.svg'
import MySQL from '../components/svg/MySQL.svg'
import Github from '../components/svg/github.svg'
import Python from '../components/svg/python.svg'
import SvgReact from '../components/svg/react.svg'
import mongoDB from '../components/svg/mongoDB.svg'
import Postman from '../components/svg/postman.svg'
import Tailwind from '../components/svg/tailwindcss.svg'
import JavaScript from '../components/svg/javascript.svg'

import type { Tech } from '../types.ts';

export const aboutMeTechData: Tech[] = [
  {
    name: "Node",
    svg: node.src,
    bgColor: "#fff",
    textColor: "#539E43",
    index: 1,
  },
  {
    name: "React",
    svg: SvgReact.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 2,
  },
  {
    name: "Figma",
    svg: Figma.src,
    bgColor: "#f8fafc",
    textColor: "#000",
    index: 3,
  },
  {
    name: "MongoDB",
    svg: mongoDB.src,
    bgColor: "#fff",
    textColor: "#539E43",
    index: 4,
  },
  {
    name: "Html",
    svg: Html.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 5,
  },
  {
    name: "Postman",
    svg: Postman.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 6,
  },
  {
    name: "React Native",
    svg: SvgReact.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 7,
  },
  {
    name: "Automation Anywhere 360",
    svg: null,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 8,
  },
  {
    name: "JavaScript",
    svg: JavaScript.src,
    bgColor: "#665e24",
    textColor: "#fff",
    index: 9,
  },
  {
    name: "Python",
    svg: Python.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 10,
  },
  {
    name: "Tailwindcss",
    svg: Tailwind.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 12,
  },
  {
    name: "Github",
    svg: Github.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 13,
  },
  {
    name: "Astro",
    svg: Astro.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 14,
  },
  {
    name: "Linux",
    svg: Linux.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 15,
  },
  {
    name: "Java",
    svg: Java.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 16,
  },
  {
    name: "MySQL",
    svg: MySQL.src,
    bgColor: "#fff",
    textColor: "#00546B",
    index: 11,
  }
];