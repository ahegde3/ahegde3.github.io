import { ChevronRight } from "lucide-react";

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Wave Life Sciences",
    period: "2024",
    logo: "/WaveLifesciences.jpg",
  },
  {
    title: "Fullstack Engineer",
    company: "Weekday",
    period: "2022 – 2023",
    logo: "/Weekday.avif",
  },
  {
    title: "Software Engineer",
    company: "Merkle",
    period: "2020 – 2022",
    logo: "/Merkle.jpeg",
  },
  {
    title: "Software Engineer Intern",
    company: "Samsung R&D Institute Bangalore",
    period: "2020",
    logo: "/samsung.jpeg",
  },
];

const education = [
  {
    title: "Master of Computer Science",
    company: "Northeastern University",
    period: "2023 – 2025",
    logo: "/Northeastern_University.png",
  },
  {
    title: "Bachelor of Computer Science",
    company: "Manipal Institute of Technology",
    period: "2016 – 2020",
    logo: "/Manipal_University.png",
  },
];

function EntryRow({ item }) {
  return (
    <div className="entry-item">
      <div className="flex items-center gap-3">
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.company}
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "0.5rem",
              objectFit: "contain",
              background: "#fff",
              padding: "0.15rem",
              border: "1px solid var(--border)",
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
              background: "var(--nav-hover)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--muted)",
              flexShrink: 0,
            }}
          >
            {item.company.charAt(0)}
          </div>
        )}
        <div>
          <div className="entry-title">{item.title}</div>
          <div className="entry-meta">
            {item.company} · {item.period}
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <EntryRow key={index} item={exp} />
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
            <EntryRow key={index} item={edu} />
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
