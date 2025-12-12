import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 bg-grid">
      <Navbar />
      <main className="flex flex-col items-center justify-between pt-16">
        <Hero />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Fayis Muhammed. All rights reserved.</p>
      </footer>
    </div>
  );
}
