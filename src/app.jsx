import "./app.scss";
import Header from "./components/header.jsx";
import ArrowTop from "./components/arrowTop.jsx";
import HomeSection from "./sections/Home/homeSection.jsx";
import AboutSection from "./sections/About/aboutSection.jsx";
// import CareerSection from "./sections/Career/careerSection.jsx";
import ProjectSection from "./sections/Project/projectSection.jsx";
import XpSection from "./sections/Xp/xpSection.jsx";
// import SkillsSection from "./sections/Skill/skillsSection.jsx";
import ContactSection from "./sections/Contact/contactSection.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
      {/* <CareerSection /> */}
      <ProjectSection />
      <XpSection />
      {/* <SkillsSection /> */}
      <ContactSection />
      <ArrowTop />
      <Footer />
    </div>
  );
}

export default App;
