import "./aboutSection.scss";
import { calculerAge } from "../../utils/function";
import { text } from "../../../public/data/about.json";

export default function AboutSection() {
  const age = calculerAge(2002, 7);

  return (
    <section id="about" className="section about">
      <h1>À propos de moi</h1>
      <div className="containerAbout">
        <img src="./images/portrait.png" />
        <div className="containerText">
          <p>&quot;{text.replace("{age}", age)}&quot;</p>
        </div>
      </div>
    </section>
  );
}
