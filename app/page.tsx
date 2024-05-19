import {
  Cover,
  TechSection,
  CardSection,
  OthersSection,
} from "../@/components";
import { ProjectsData } from "../@/lib/data";
export default function Home() {
  return (
    <main className="flex flex-col px-3">
      <Cover />
      <CardSection title="Projects" data={ProjectsData} />
      <TechSection title="What I  know " />
      <OthersSection />
    </main>
  );
}
