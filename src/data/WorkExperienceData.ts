import Experian from "../img/WorkExperience/Experian.webp";
import Intel from "../img/WorkExperience/intel.webp";


import type { WorkExperience } from '../types.ts';

export const WorkExperienceData: WorkExperience[] = [
    {
        company: "Intel - Heredia, Costa Rica",
        role: "Manufacturing Technician",
        period: "January 2025 - Present",
        description: "I maintain and repair hardware components for industrial environments, ensuring optimal performance of computer systems. I perform diagnosis and resolution of faults, applying quality controls and guaranteeing the operational continuity of critical equipment in manufacturing environments.",
        img: Intel.src,
        index: 0,
    },
    {
        company: "Experian - Heredia, Costa Rica",
        role: "RPA Developer Intern",
        period: "October 2024 - December 2024",
        description: "I automated offboarding processes using the ServiceNow API, designing and testing workflows in Postman and developing solutions in Automation Anywhere 360. I prepared technical documentation (PDDs), designed workflows and built custom wrappers. Monitored RPA performance with Splunk to ensure system stability.",
        img: Experian.src,
        index: 1,
    }
];