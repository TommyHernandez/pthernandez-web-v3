import { About } from "./components/About";
import { BookRecommendations } from "./components/BookRecommendations";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <BookRecommendations />
      <Contact />
      <Footer />
    </main>
  );
}
