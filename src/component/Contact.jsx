import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/ahegde3",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/anish-hegde-940823120/",
    label: "LinkedIn",
  },
  {
    icon: BiLogoGmail,
    href: "mailto:ahegde3@gmail.com",
    label: "Email",
  },
];

export function Contact() {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          style={{
            width: "2.75rem",
            height: "2.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "1px solid var(--border-strong)",
            color: "var(--muted)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--foreground)";
            e.currentTarget.style.color = "var(--foreground)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-strong)";
            e.currentTarget.style.color = "var(--muted)";
          }}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
