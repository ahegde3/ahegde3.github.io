import React from "react";
import { ChevronRight } from "lucide-react";
import { Contact } from "../component/Contact";
import profilepic from "../assets/profile-pic.jpg";

export default function Home() {
  return (
    <section id="home" className="section" style={{ paddingTop: "8rem" }}>
      {/* Small label */}
      <div className="flex flex-col items-center text-center mb-12">
        <span
          className="text-sm font-medium tracking-wide uppercase mb-4"
          style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
        >
          Software Engineer
        </span>

        {/* Large heading */}
        <h1 className="font-heading mb-6">Anish Hegde</h1>
      </div>

      {/* Photo */}
      <div className="flex justify-center mb-16">
        <img
          src={profilepic}
          alt="Anish Hegde"
          className="w-full max-w-2xl rounded-2xl object-cover shadow-lg"
          style={{ maxHeight: "450px" }}
        />
      </div>

      {/* Inspirational quote - GIC style */}
      <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
        <div>
          <h2 className="font-heading" style={{ lineHeight: "1.2" }}>
            Ship fast. Make beautiful
            things.
          </h2>
          <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
            How you do anything is how you do everything.
          </p>
        </div>
      </div>

      {/* About text */}
      <div className="max-w-xl mb-8 mx-auto text-center">
        <p className="mb-4" style={{ color: "var(--foreground)", lineHeight: "1.8" }}>
          I specialize in building large-scale, production-grade software — from
          scalable backend systems and full-stack apps to Agentic GenAI
          workflows.
        </p>
        <p className="mb-6" style={{ color: "var(--muted)" }}>
          My stack includes Python, Golang, JavaScript/TypeScript, C/C++, Java,
          and cloud-native development. Currently pursuing my Master's at
          Northeastern University.
        </p>
        <Contact />
      </div>
    </section>
  );
}
