import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          title="Projects"
          description="A mix of full-stack systems and AI/ML-driven builds — the two below are the ones I've developed in the most depth."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((project) => {
            const index = projects.findIndex((p) => p.id === project.id);
            return <ProjectCard key={project.id} project={project} index={index} />;
          })}
        </div>

        {rest.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => {
              const index = projects.findIndex((p) => p.id === project.id);
              return <ProjectCard key={project.id} project={project} index={index} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
