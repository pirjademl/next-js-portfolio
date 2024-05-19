import { FC } from "react";
import { IProjectSectionData } from "../../../lib/data";
import CardProject from "../../ui/ProjectCard";
interface CardSectionProps {
  title: string;
  version?: string;
  data: IProjectSectionData[];
}

export const CardSection: FC<CardSectionProps> = ({ title, version, data }) => {
  return (
    <section className="mt-4 ">
      <h3>{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((project) => (
          <CardProject
            key={project.id}
            title={project.title}
            src={project.src}
            techStack={project.stack}
          />
        ))}
      </div>
    </section>
  );
};
