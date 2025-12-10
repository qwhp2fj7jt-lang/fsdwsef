
import { Hero, Skills, ProjectsAndExperience, Blog } from "@/widgets";

export default function HomeRoute() {
  return (
    <div className="container mx-auto px-6 md:px-20 py-10">
      <Hero />
      <Skills />
      <Blog />
      <ProjectsAndExperience />
    </div>
  );
}
