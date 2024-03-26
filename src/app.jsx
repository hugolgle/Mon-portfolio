import './app.scss';
import Header from './components/header.jsx';
import HomeSection from './sections/homeSection.jsx';
import AboutSection from './sections/aboutSection.jsx';
import CareerSection from './sections/careerSection.jsx';
import ProjectSection from './sections/projectSection.jsx';
import XpSection from './sections/xpSection.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
      <CareerSection />
      <ProjectSection />
      <XpSection />
      {/* <Contact /> */}
    </div>
  );
}

export default App;