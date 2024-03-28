import React, { useEffect, useState } from 'react';
import './app.scss';
import Header from './components/header.jsx';
import ArrowTop from './components/arrowTop.jsx';
import HomeSection from './sections/homeSection.jsx';
import AboutSection from './sections/aboutSection.jsx';
import CareerSection from './sections/careerSection.jsx';
import ProjectSection from './sections/projectSection.jsx';
import XpSection from './sections/xpSection.jsx';
import SkillsSection from './sections/skillsSection.jsx';
import ContactSection from './sections/contactSection.jsx';
import Footer from './components/footer.jsx';
import Loader from './components/loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="App">
      {loading && <Loader />} {/* Afficher le Loader si loading est true */}
      <Header />
      <HomeSection />
      <AboutSection />
      <CareerSection />
      <ProjectSection />
      <XpSection />
      <SkillsSection />
      <ContactSection />
      <ArrowTop />
      <Footer />
    </div>
  );
}

export default App;
