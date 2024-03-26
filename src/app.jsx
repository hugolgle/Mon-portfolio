import './app.scss';
import Header from './components/header.jsx';
import HomeSection from './sections/homeSection.jsx';
import AboutSection from './sections/aboutSection.jsx';
import CareerSection from './sections/careerSection.jsx';
import ProjectSection from './sections/projectSection.jsx';
import XpSection from './sections/xpSection.jsx';
import SkillsSection from './sections/skillsSection.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
      <CareerSection />
      <ProjectSection />
      <XpSection />
      <SkillsSection />
    </div>
  );
}

export default App;