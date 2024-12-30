import Html from '../components/svg/html.svg'
import Figma from '../components/svg/figma.svg'
import Github from '../components/svg/github.svg'
import SvgReact from '../components/svg/react.svg'
import API from '../components/svg/api(white).svg'
import Postman from '../components/svg/postman.svg'
import Tailwind from '../components/svg/tailwindcss.svg'
import JavaScript from '../components/svg/javascript.svg'

import type { Tech } from '../types.ts';

export const aquaSyncData: Tech[] = [
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
    name: "Html",
    svg: Html.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 3,
  },
  {
    name: "Postman",
    svg: Postman.src,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 4,
  },
  {
    name: "JavaScript",
    svg: JavaScript.src,
    bgColor: "#665e24",
    textColor: "#fff",
    index: 5,
  },
  {
    name: "Tailwindcss",
    svg: Tailwind.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 6,
  },
  {
    name: "Github",
    svg: Github.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 7,
  },
  {
    name: "PLC Eaton",
    svg: API.src,
    bgColor: "#157CC4",
    textColor: "#fff",
    index: 8,
  }
];