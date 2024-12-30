import API from '../components/svg/api.svg'
import Postman from '../components/svg/postman.svg'
import JavaScript from '../components/svg/javascript.svg'

import type { Tech } from '../types.ts';

export const leaversOffboardingData: Tech[] = [
  {
    name: "Postman",
    svg: Postman.src,
    bgColor: "#7f4932",
    textColor: "#fff",
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
    name: "ServicesNow",
    svg: API.src,
    bgColor: "#fff",
    textColor: "#000",
    index: 3,
  },
  {
    name: "Automation Anywhere 360",
    svg: null,
    bgColor: "#7f4932",
    textColor: "#fff",
    index: 4,
  },
];
