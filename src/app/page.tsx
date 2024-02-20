// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import Companies from "./companies";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Companies />
      <Skills />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}
