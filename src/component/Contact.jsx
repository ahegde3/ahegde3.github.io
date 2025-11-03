import SocialIcons from "./SocialIcon";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-2">Get in touch</h2>
          <p className="text-muted-foreground">Get in touch</p>
        </div>
        <SocialIcons />
      </div>
    </section>
  );
}
