import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Wave Lifsciences",
    period: "2024 - 2024",
    image: "/WaveLifesciences.jpg ",
  },
  {
    title: "Fullstack Engineer",
    company: "Weekday",
    period: "2022 - 2023",
    image: "/Weekday.avif",
  },
  {
    title: "Software Engineer",
    company: "Merkle",
    period: "2020 - 2022",
    image: "/Merkle.jpeg",
  },
  {
    title: "Software Engineer Intern",
    company: "Samsung R&D Institute Bangalore",
    period: "2020 - 2022",
    image: "/samsung.jpeg",
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Northeastern University",
    period: "2023 - 2025",
    image: "/Northeastern_University.png",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "Manipal Institute of Technology",
    period: "2016 - 2020",
    image: "/Manipal_University.png",
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-accent/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="mb-2">Resume</h2>
            <p className="text-muted-foreground">My professional journey</p>
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1X3ZVfaGYdmj9eKNU4JdS5k8sQUb9Pe2m/view?usp=sharing",
                "_blank"
              )
            }
          >
            <Download size={16} />
            Download CV
          </Button>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-muted-foreground" />
              <h3>Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      {exp.image && (
                        <div className="flex-shrink-0">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4>{exp.title}</h4>
                          <span className="text-muted-foreground text-sm">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-muted-foreground" />
              <h3>Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      {edu.image && (
                        <div className="flex-shrink-0">
                          <img
                            src={edu.image}
                            alt={edu.school}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4>{edu.degree}</h4>
                          <span className="text-muted-foreground text-sm">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
