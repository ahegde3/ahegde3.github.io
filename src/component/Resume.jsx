import { ChevronRight } from "lucide-react";

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Wave Life Sciences",
    period: "2024",
  },
  {
    title: "Fullstack Engineer",
    company: "Weekday",
    period: "2022 – 2023",
  },
  {
    title: "Software Engineer",
    company: "Merkle",
    period: "2020 – 2022",
  },
  {
    title: "Software Engineer Intern",
    company: "Samsung R&D Institute Bangalore",
    period: "2020",
  },
];

const education = [
  {
    title: "Master of Computer Science",
    company: "Northeastern University",
    period: "2023 – 2025",
  },
  {
    title: "Bachelor of Computer Science",
    company: "Manipal Institute of Technology",
    period: "2016 – 2020",
  },
];

export function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="font-heading text-center mb-4">
        Experience & Education
      </h2>
      <p className="text-center mb-12" style={{ color: "var(--muted)" }}>
        My professional journey so far
      </p>

      {/* Experience */}
      <div className="mb-12">
        <h3
          className="text-sm font-medium uppercase tracking-wider mb-4"
          style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
        >
          Experience
        </h3>
        <div className="entry-list">
          {experience.map((exp, index) => (
            <div key={index} className="entry-item">
              <div>
                <div className="entry-title">{exp.title}</div>
                <div className="entry-meta">
                  {exp.company} · {exp.period}
                </div>
              </div>
              <div className="entry-arrow">
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h3
          className="text-sm font-medium uppercase tracking-wider mb-4"
          style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
        >
          Education
        </h3>
        <div className="entry-list">
          {education.map((edu, index) => (
            <div key={index} className="entry-item">
              <div>
                <div className="entry-title">{edu.title}</div>
                <div className="entry-meta">
                  {edu.company} · {edu.period}
                </div>
              </div>
              <div className="entry-arrow">
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download CV link */}
      <div className="text-center">
        <a
          href="https://drive.google.com/file/d/1X3ZVfaGYdmj9eKNU4JdS5k8sQUb9Pe2m/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow"
        >
          Download full CV
          <ChevronRight size={14} />
        </a>
      </div>
    </section>
  );
}
