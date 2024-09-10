import "./skillsSection.scss";

import BoxSkills from "../components/boxSkills";
import Button from "../components/button";

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills">
      <h1>Compétences</h1>

      <div className="containerSkills">
        <BoxSkills title="Langages">
          <img
            src="./images/iconSkills/iconJS.png"
            alt=""
            title="JavaScript"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconTS.png"
            alt=""
            title="TypeScript"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconMySQL.png"
            alt=""
            title="MySQL"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconPHP.png"
            alt=""
            title="PHP"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconPython.png"
            alt=""
            title="Python"
            className="iconSkills"
          />
        </BoxSkills>
        <BoxSkills title="Technologies">
          <img
            src="./images/iconSkills/iconWordpress.png"
            alt=""
            title="WordPess"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconReact.png"
            alt=""
            title="React"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconNode.png"
            alt=""
            title="NodeJS"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconTailwind.png"
            alt=""
            title="Tailwind"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconSASS.png"
            alt=""
            title="SASS"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconBootstrap.png"
            alt=""
            title="Bootstrap"
            className="iconSkills"
          />
        </BoxSkills>
        <BoxSkills title="Outils">
          <img
            src="./images/iconSkills/iconFigma.png"
            alt=""
            title="Figma"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconVSCode.png"
            alt=""
            title="Visual Studio Code"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconGit.png"
            alt=""
            title="Git"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconGitHub.png"
            alt=""
            title="GitHub"
            className="iconSkills"
          />
        </BoxSkills>
        <BoxSkills title="Conception">
          <img
            src="./images/iconSkills/iconWindows.png"
            alt=""
            title="Windows"
            className="iconSkills"
          />
          <img
            src="./images/iconSkills/iconLinux.png"
            alt=""
            title="Linux"
            className="iconSkills"
          />
        </BoxSkills>
      </div>
      <a href="./images/CV.pdf" target="_blank" rel="noopener noreferrer">
        <Button title="Voir mon CV" />
      </a>
    </section>
  );
}
