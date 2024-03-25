import './app.scss';
import Header from './components/header.jsx';
import HomeSection from './sections/homeSection.jsx';
import AboutSection from './sections/aboutSection.jsx';
import ProjectSection from './sections/projectSection.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      {/* <Contact /> */}
    </div>
  );
}

export default App;