import { useState } from "react";
import "./projectSection.scss";
import { realisations } from "../../../public/data/realisations.json";
import Button from "../../components/button";
import Modal from "../../components/modal";

export default function ProjectSection() {
  const [modalIndex, setModalIndex] = useState(null);
  const [btnFilter, setBtnFilter] = useState("");

  const handleOpenModal = (index) => {
    setModalIndex(index);
  };

  const handleCloseModal = () => {
    setModalIndex(null);
  };

  const getFirstSentence = (text) => {
    if (!text) return "";
    const sentences = text.split(/[.!?]\s/);
    let firstSentence = sentences[0];
    if (!/[.!?]$/.test(firstSentence)) {
      firstSentence += ".";
    }
    return firstSentence;
  };

  const realisationFilter = (real, college) => {
    if (college !== "") {
      return real.filter((x) => x.ecole === college);
    } else {
      return real;
    }
  };

  const handleBtnFilter = (ecole) => {
    setBtnFilter(ecole);
  };

  // Get unique colleges for filtering
  const uniqueColleges = [
    ...new Set(realisations.map((project) => project.ecole)),
  ];
  const filteredRealisations = realisationFilter(realisations, btnFilter);

  return (
    <section id="project" className="section project">
      <h1>Réalisations</h1>
      <div className="btnFilter">
        <Button
          title="Tout"
          className={`btnFilter ${btnFilter === "" ? "active" : ""}`}
          value="Tout"
          action={() => handleBtnFilter("")}
        />
        {uniqueColleges.map((college) => (
          <Button
            key={college}
            title={college}
            className={`btnFilter ${btnFilter === college ? "active" : ""}`}
            value={college}
            action={() => handleBtnFilter(college)}
          />
        ))}
      </div>

      <div className="containerProject">
        {filteredRealisations.map((realisation, index) => (
          <div
            className="containerRealisation"
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <div className="img">
              <img src={realisation.image} alt={realisation.title} />
              <div className="containHover">
                <p>{realisation.date}</p>
                <p>{getFirstSentence(realisation.mission)}</p>
              </div>
            </div>
            <div className="details">
              <h3>{realisation.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <Modal
          show="show"
          btnClose={handleCloseModal}
          titre={filteredRealisations[modalIndex].title}
        >
          <div className="containModal">
            {filteredRealisations[modalIndex].mission && (
              <p>
                <b>Mission:</b> {filteredRealisations[modalIndex].mission}
              </p>
            )}
          </div>
          <div className="containModal">
            {filteredRealisations[modalIndex].context && (
              <p>
                <b>Contexte :</b> {filteredRealisations[modalIndex].context}
              </p>
            )}
          </div>
          <div className="containModal">
            {filteredRealisations[modalIndex].techno && (
              <p>
                <b>Technologies:</b>{" "}
                {filteredRealisations[modalIndex].techno.join(", ")}
              </p>
            )}
          </div>
          <div className="containModal">
            {filteredRealisations[modalIndex].skills && (
              <div>
                <b>Compétences:</b>
                {filteredRealisations[modalIndex].skills.map(
                  (skill, skillIndex) => (
                    <p key={skillIndex}>• {skill.skill}</p> // Render skill correctly
                  )
                )}
              </div>
            )}
          </div>
          {filteredRealisations[modalIndex].ressource && (
            <div className="containModal">
              <a
                href={filteredRealisations[modalIndex].ressource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ressources
              </a>
            </div>
          )}
        </Modal>
      )}
    </section>
  );
}
