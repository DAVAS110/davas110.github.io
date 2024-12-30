import Figma from '../components/svg/figma.svg'
import Github from '../components/svg/github.svg'
import Google from '../components/svg/google.svg'
import SvgReact from '../components/svg/react.svg'
import Postman from '../components/svg/postman.svg'
import Chatgpt from '../components/svg/chatgpt.svg'
import JavaScript from '../components/svg/javascript.svg'

import type { Tech } from '../types.ts';

export const enovaData: Tech[] = [
  {
    name: "ChatGPT API",
    svg: Chatgpt.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 1,
  },
  {
    name: "JavaScript",
    svg: JavaScript.src,
    bgColor: "#665e24",
    textColor: "#fff",
    index: 2,
  },
  {
    name: "Google Cloud Platform",
    svg: Google.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 3,
  },
  {
    name: "React Native",
    svg: SvgReact.src,
    bgColor: "#32547f",
    textColor: "#fff",
    index: 4,
  },
  {
    name: "Figma",
    svg: Figma.src,
    bgColor: "#f8fafc",
    textColor: "#000",
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
    name: "Github",
    svg: Github.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 7,
  },
];