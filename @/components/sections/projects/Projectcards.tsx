import {FC} from 'react'
import Image from 'next/image';
import { IProjectSectionData } from '@components/@/lib/data'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import CardProject from '../../ui/ProjectCard';
interface CardSectionProps{
        title:string,
        version?:string,
        data:IProjectSectionData[];
}

export const CardSection:FC<CardSectionProps>=({title,version,data})=>{
            return(
            <section className="mt-4 " >
            <h3>{title}</h3>
            <div className="grid grid-cols-4 gap-3">
               {data.map((project)=>
                    <CardProject key={project.id} title={project.title} src={project.src} techStack={project.stack}/>
                )}
                </div>
            </section>
            )
}
