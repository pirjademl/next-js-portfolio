import { Interface } from "readline"

export interface ITechSectionData{
    id:number,
    title:string,
    icon:string
}
export interface IProjectSectionData{
    id:number,
    src:string,
    title:string,
    stack:string
}
export interface IOthers{
    id:number,
    title:string,
    src:string

}

export const ProjectsData:IProjectSectionData[]=[
    {
        id:1,
        src:'/exam.jpeg',
        title:"Online Examination System",
        stack:"Reactjs,Nodejs,mongodb,express,Material ui"
    },
    {
        id:2,
        src:'/job-dekho.jpeg',
        title:"job Dekho   clone",
        stack:"HTMl ,CSS, Javascript,nodejs, reactjs,expresjs"
    
    },
    {
        id:3,
        src:'/vaccine-mgmt.png',
        title:"Vaccine Mangement system",
        stack:"HTML,CSS, Javascript,Java,Mysql,jdbc,JConnector"
    
    },
    {
    id: 4,
    title: "Library management REST API",
    src: "/library-mgmt.jpg",
    stack: "Nodejs, Express js,postman,bcrypt,monogdb,mongoose",
    }

]


export const FrontEnd:ITechSectionData[] = [
  {
    id: 1,
    title: "HTMl",
    icon: "Code",
  },
  {
    id: 2,
    title: "CSS",
    icon: "Code",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: "Code",
  },
  {
    id: 4,
    title: "React",
    icon: "Code",
  },
  {
    id: 5,
    title: "Redux",
    icon: "Code",
  },
  {
    id: 6,
    title: "Tailwind",
    icon: "Code",
  },
  {
    id: 7,
    title: "Bootstrap",
    icon: "Code",
  },
  {
    id: 8,
    title: "Materail ui",
    icon: "Code",
  },
];
export const backEnd:ITechSectionData[] = [
  {
    id: 1,
    title: "Node.js",
    icon: "Code",
  },
  {
    id: 2,
    title: "Express.js",
    icon: "Code",
  },

  {
    id: 3,
    title: "MySQL",
    icon: "Code",
  },

  {
    id: 4,
    title: "Java",
    icon: "Code",
  },
];
export const Database = [
  {
    id: 5,
    title: "MongoDB",
    icon: "Code",
  },

  {
    id: 6,
    title: "MySQL",
    icon: "Code",
  },
  {
    id: 7,
    title: "SQLite",
    icon: "Code",
  },
];
export const devOps:ITechSectionData[] = [
  {
    id: 1,
    title: "Git",
    icon: "Code",
  },
  {
    id: 2,
    title: "GitHub",
    icon: "Code",
  },
  {
    id: 3,
    title: "Heroku",
    icon: "Code",
  },
  {
    id: 4,
    title: "Netlify",
    icon: "Code",
  },

  {
    id: 5,
    title: "Vercel",
    icon: "Code",
  },
{
    id: 6,
    title: "Docker",
    icon: "Code",
  },

];
export const others:IOthers[]= [
  {
    id: 1,
    title: "REST API",
    src: "/assets/rest.webp",
  },
  {
    id: 1,
    title: "FIGMA ",
    src: "/assets/figma.png",
  },
];
