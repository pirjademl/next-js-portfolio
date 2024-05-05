import { ITechSectionData } from "@components/@/lib/data";
import { FC} from 'react'
import { cn } from "../../lib/utils"
export type ITechCardProps = {
    title: string,
    data:ITechSectionData[]
};
export const TechCard:FC<ITechCardProps>=({title,data})=>{
    return (
        <div className=" shadow-lg  p-4 bg-secondary flex-col">
            <h4 className="font-semibold p-2">{title}</h4>
            <ul className="grid grid-cols-3 lg:grid-cols-3 gap-4 text-sm">
                {data.map((skill) => (
                    <li
                        className={cn(
                            "rounded-md flex justify-center  items-center  text-xs p-1",
                            skill.title === "Tailwind" && "border border-blue-500/60",
                            skill.title === "JavaScript" && "border border-yellow-500/60",
                            skill.title === "React" && "border border-green-500/60",
                            skill.title === "Redux" && "border border-emerald-600/60",
                            skill.title === "Node.js" && "border border-orange-500/60",
                            skill.title === "Express.js" && "border border-purple-700/60",
                            skill.title === "Java" && " border border-pink-700/60",
                            skill.title === "MongoDB" && "border border-yellow-900/50",
                            skill.title === "MySQL" && " border border-indigo-600/50",
                            skill.title === "Git" && "border border-teal-600/50",
                            skill.title === "GitHub" && "border border-cyan-500/50",
                            skill.title === 'Heroku' && 'border border-orange-300/50',
                            skill.title === 'Docker' && 'border border-blue-500/50'

                        )}
                        key={skill.id}
                    >
                        {skill.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
