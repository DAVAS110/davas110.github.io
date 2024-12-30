import Enova from "../img/Project/Enova.webp";
import Nexus from "../img/Project/Nexus.webp";
import Experian from "../img/Project/Experian.webp";
import AquaSync from "../img/Project/AquaSync.webp";

import type { Project } from '../types.ts';

export const projectsData: Project[] = [
  {
    name: "Leavers Offboarding",
    description:
      "The project involved automating the company’s offboarding process using the ServiceNow API in Automation anywhere.",
    img: Experian.src,
    href: "/leavers-offboarding",
    color: "#6c207a",
    index: 1,
  },
  {
    name: "Enova",
    description:
      "Mobile App focus on recycling detection for classification recycling materials.",
    img: Enova.src,
    href: "/enova",
    color: "#851b7e",
    index: 2,
  },
  {
    name: "AquaSync",
    description:
      "National Eaton Competition Web site to control and monitor PLC status.",
    img: AquaSync.src,
    href: "/aquasync",
    color: "#157CC4",
    index: 3,
  },
  {
    name: "Nexus",
    description: "Website for F1 in School Competition Costa Rica.",
    img: Nexus.src,
    href: "/nexus",
    color: "#CC0000",
    index: 4,
  },
];