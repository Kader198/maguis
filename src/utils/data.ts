import {Braces, GanttChart, GraduationCap, LucideIcon, User} from "lucide-react";

type Link = {
    name: string;
    url: string;
    Icon?: LucideIcon;
}

type NavsIcons = {
    [key: string]: LucideIcon
}

export const NavsIcons:NavsIcons = {
    USER: User,
    PROJECTS: GanttChart,
    TECHNOLOGIES: Braces,
    EDUCATIONS: GraduationCap
}

// profile & projects &  technologies
export const datalinks: Link[] = [
    {
        url: 'profile',
        name: 'Profile',
        Icon: NavsIcons.USER,
    },{
        url: 'projects',
        name: 'Projects',
        Icon: NavsIcons.PROJECTS,
    },{
        url: 'technologies',
        name: 'Technologies',
        Icon: NavsIcons.TECHNOLOGIES,
    },{
    url: 'educations',
    name: 'Educations',
    Icon: NavsIcons.EDUCATIONS,
    }
];
