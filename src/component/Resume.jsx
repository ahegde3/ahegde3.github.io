import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Led development of key features and mentored junior developers. Improved application performance by 40%.",
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description:
      "Built scalable web applications and collaborated with cross-functional teams to deliver projects on time.",
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "University Name",
    period: "2018 - 2020",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "College Name",
    period: "2014 - 2018",
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4>{exp.title}</h4>
                      <span className="text-muted-foreground text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4>{edu.degree}</h4>
                      <span className="text-muted-foreground text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.school}</p>
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
