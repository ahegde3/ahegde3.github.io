import React from "react";
import SocialIcons from "../component/SocialIcon";
import profilepic from "../assets/profile-pic.jpg";

export default function Home() {
  const linkStyle = { color: "inherit", textDecoration: "none" };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <img
        src={profilepic}
        alt="profile pic"
        className="mb-8 w-full max-w-lg h-auto rounded-lg shadow-lg object-cover"
      />
      <h1 className="text-4xl font-bold text-foreground">Anish Hegde</h1>
      <p className="mt-2 text-foreground/80">Exploring one day at a time.</p>
      <div className="mt-6">
        <SocialIcons />
      </div>
    </div>
  );
}
