import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="roadmap"><Roadmap /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="py-12 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Mohammad Hadi Shukoor
      </footer>
    </div>
  );
}

export default App;
