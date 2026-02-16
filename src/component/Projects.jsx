import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "N8N Email Automation",
    description:
      "Automated email outreach to recruiters and hiring managers — reads from Google Sheets and drafts personalized emails.",
    technologies: ["N8N", "LLM", "Prompt Engineering"],
  },
  {
    title: "Resume AI",
    description:
      "AI tool that drafts tailored resumes based on user profiles and job descriptions.",
    technologies: ["Python", "Flask", "Langchain", "LLM"],
    github: "https://github.com/ahegde3/ResumeAI",
  },
  {
    title: "Inverter Management System",
    description:
      "Monitors inverter performance, energy production & consumption, and sends real-time alerts.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "AWS"],
    github: "https://github.com/ahegde3/inverter-webapp",
  },
  {
    title: "Graid AI Teaching Agent",
    description:
      "AI teaching agent that provides personalized learning experiences for students.",
    technologies: ["GCP", "Fast API", "Agentic Programming"],
    demo: "https://graidai.com/",
  },
  {
    title: "Design Culture",
    description:
      "It's not enough to make functional products — they must be beautiful and delightful to use.",
    technologies: ["UI/UX", "Product Design"],
  },
  {
    title: "Ship Fast, Iterate",
    description:
      "Scope small. Ship fast. Iterate in tight loops close to real feedback.",
    technologies: ["Agile", "CI/CD"],
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="section-dark">
        <div className="section-wide" style={{ padding: "0" }}>
          <h2 className="font-heading text-center mb-12">
            Here's what I build:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="grid-card">
                <h3>{project.title}</h3>
                <p className="mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="flex gap-3 mt-auto pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        <Github size={13} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        <ExternalLink size={13} />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
