import type { education } from '../types.ts';
import fidelitas from "../img/WorkExperience/fidelitas.webp";
import CTPMN from "../img/WorkExperience/CTPMN.webp";



export const educationData: education[] = [
    {
        degree: "Software Engineering",
        institution: "Fidelitas University, 2025",
        img: fidelitas.src,
        index: 1,
    },
    {
        degree: "Industrial Electronics Technician ",
        institution: "CTP Mercedes Norte, 2025",
        img: CTPMN.src,
        index: 1,
    },
]