import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import Certifications from './components/Certifications';
import CybersecurityFocus from './components/CybersecurityFocus';
import CareerGoals from './components/CareerGoals';
import AdditionalWork from './components/AdditionalWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050c1a' }}>
      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Section divider */}
        <div className="section-divider" role="separator" />

        <About />

        <div className="section-divider" role="separator" />

        <Education />

        <div className="section-divider" role="separator" />

        <Skills />

        <div className="section-divider" role="separator" />

        <Projects />

        <div className="section-divider" role="separator" />

        <CybersecurityFocus />

        <div className="section-divider" role="separator" />

        <Certifications />

        <div className="section-divider" role="separator" />

        <GitHubActivity />

        <div className="section-divider" role="separator" />

        <CareerGoals />

        <div className="section-divider" role="separator" />

        <AdditionalWork />

        <div className="section-divider" role="separator" />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
