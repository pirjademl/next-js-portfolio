import { TechCard } from "../../ui";
import { FrontEnd, backEnd, devOps, Database } from "../../../lib/data";
import { FC } from "react";
export interface ITechSectionProps {
  title: string;
}
export const TechSection: FC<ITechSectionProps> = ({ title }) => {
  return (
    <section className="mt-4">
      <h1>{title}</h1>
      <div className="grid mt-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 items-stretch">
        <TechCard title={"FrontEnd"} data={FrontEnd} />
        <TechCard title={"BackEnd"} data={backEnd} />
        <TechCard title={"Database"} data={Database} />
        <TechCard title={"Devops"} data={devOps} />
      </div>
    </section>
  );
};
