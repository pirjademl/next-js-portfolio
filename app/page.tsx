import Cover from "@components/@/components/Cover";
import Image from "next/image";
import { CardSection } from "@components/@/components/sections/projects/Projectcards";
import {TechSection} from "@components/@/components/sections/tech/techSection";
import { Card, CardContent, CardHeader, CardTitle } from "@components/@/components/ui/card";
import { ProjectsData } from "@components/@/lib/data";
import { Code } from "lucide-react";
import { OthersSection } from "@components/@/components/sections/others/OthersSection";
export default function Home() {
  return (
  <main className="flex flex-col">
  <Cover/>
  <CardSection title="Projects"  data={ProjectsData}/>
  <TechSection title="What I  know "/>
  <OthersSection/>
 </main>
  );
}
