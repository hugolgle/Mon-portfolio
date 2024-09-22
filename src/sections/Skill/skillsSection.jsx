import "./skillsSection.scss";
import { skills } from "../../../public/data/skills.json";

import BoxSkills from "../../components/boxSkills";
import Button from "../../components/button";

export default function SkillsSection() {
  const getSkillsByCategory = (category) =>
    skills.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="section skills">
      <h1>Compétences</h1>

      <div className="containerSkills">
        <BoxSkills title="Langages">
          {getSkillsByCategory("Langages").map((skill, index) => (
            <img
              key={index}
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              className="iconSkills"
            />
          ))}
        </BoxSkills>
        <BoxSkills title="Technologies">
          {getSkillsByCategory("Technologies").map((skill, index) => (
            <img
              key={index}
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              className="iconSkills"
            />
          ))}
        </BoxSkills>
        <BoxSkills title="Outils">
          {getSkillsByCategory("Outils").map((skill, index) => (
            <img
              key={index}
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              className="iconSkills"
            />
          ))}
        </BoxSkills>
        <BoxSkills title="Conception">
          {getSkillsByCategory("Conception").map((skill, index) => (
            <img
              key={index}
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              className="iconSkills"
            />
          ))}
        </BoxSkills>
      </div>
      <a href="./images/CV.pdf" target="_blank" rel="noopener noreferrer">
        <Button title="Voir mon CV" />
      </a>
    </section>
  );
}
