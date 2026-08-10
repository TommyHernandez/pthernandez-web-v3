import { About } from "./components/About";
import { BookRecommendations } from "./components/BookRecommendations";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <section className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <BookRecommendations />
      <Contact />
    </section>
  );
}
