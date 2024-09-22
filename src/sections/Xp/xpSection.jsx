import { useState } from "react";
import "./xpSection.scss";
import { xpPro } from "../../../public/data/xpPro.json";

export default function XpSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedXp = showAll
    ? [...xpPro].reverse()
    : [...xpPro].slice(-3).reverse();

  return (
    <section id="xpPro" className="section xpPro">
      <h1>Expériences professionnelles</h1>

      <div className="containerXpPro">
        {displayedXp.map((xp, index) => (
          <div className="boxXpPro" key={index}>
            {xp.image && (
              <div className="image">
                <img src={xp.image} alt={`${xp.title} image`} />
              </div>
            )}
            <p className="box">
              {xp.type} - {xp.domaine} - {xp.date}
            </p>
            <h2 className="box">{xp.title}</h2>
            <h3 className="box">Mission : {xp.mission}</h3>
            <div className="description">
              <p>{xp.description}</p>
            </div>
            <div className="iconSkills">
              {xp.techno &&
                xp.techno.map(({ name, img }, key) => (
                  <div key={key} className="link">
                    <img src={img} alt={name} className="icon" />{" "}
                  </div>
                ))}
            </div>

            <div className="liens">
              {xp.liens &&
                xp.liens.map(({ text, lien }, key) => (
                  <div key={key} className="link">
                    <a href={lien} target="_blank" rel="noopener noreferrer">
                      {text}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {!showAll && xpPro.length > 3 && (
        <button onClick={() => setShowAll(true)}>
          Afficher plus d&apos;expériences
        </button>
      )}
    </section>
  );
}
