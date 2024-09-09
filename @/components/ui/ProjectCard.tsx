import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectsCardProps {
  title: string;
  src?: string;
  href?: string;
  techStack?: string;
}

const CardProject: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || "/"}>
      <div className=" mt-4 bg-purple  p-2  flex flex-col">
        <Image
          className="aspect-video bg-cover  object-cover w-full h-full"
          src={`${src}`}
          alt="project-thumbnail"
          width={200}
          height={100}
        />

        <div className="project-info bg-white  text-slate-900 font-semibold p-3">
          <h3 className="pl-2 pt-2 text-sm">{title}</h3>
          <p className="pl-2 mb-2 pt-2  text-xs text-slate-500 font-light  ">
            {techStack}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
