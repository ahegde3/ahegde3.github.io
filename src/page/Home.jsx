import React from "react";
import profilepic from "../assets/profile-pic.jpg";

export default function Home() {

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <img
        src={profilepic}
        alt="profile pic"
        className="mb-8 w-full max-w-lg h-auto rounded-lg shadow-lg object-cover"
      />
      <h1 className="text-4xl font-bold text-foreground">Anish Hegde</h1>
      <p className="mt-2 text-foreground/80 justify-center">
        I specialize in building large-scale, production-grade software — from
        ⚙️ scalable backend systems and 🌐 full-stack apps to 🧠 agentic GenAI
        workflows.
      </p>
      <br />
      <p className="mt-2 text-foreground/80">
        My stack includes Python, Golang, JavaScript/TypeScript, C/C++, Java,
        and cloud-native development .
      </p>
    </div>
  );
}
