import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main className="mx-auto max-w-7xl px-4">
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
    </ThemeProvider>
  );
}

export default App;