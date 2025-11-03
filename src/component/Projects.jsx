import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "N8N email reachout automation",
    description:
      "Automated email reachout to recruiters and hiring managers reading from google sheet and drafting personalized emails.",
    technologies: ["N8N", "LLM", "Tailwind Prompt Engineering"],
    github: "https://github.com/yourusername/project-one",
    demo: "https://project-one.demo.com",
  },
  {
    title: "Resume AI ",
    description:
      "Resume AI that drafts a resume based on the user's profile and job description.",
    technologies: ["Python", "Flask", "Langchain", "LLM"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://project-two.demo.com",
  },
  {
    title: "Inverter management system",
    description:
      "Inverter management system that monitors the inverter, energy production, consumption and sends alerts to the user.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "AWS"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://project-three.demo.com",
  },
  {
    title: "Graid AI teaching agent",
    description:
      "Graid AI teaching agent that helps student learn better and provide personalized learning experience.",
    technologies: ["GCP", "Fast API", "Agentic Programming"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://project-three.demo.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-2">Projects</h2>
          <p className="text-muted-foreground">Some things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
