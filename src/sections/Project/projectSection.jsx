import { useState } from "react";
import "./projectSection.scss";
import { realisations } from "../../../public/data/projects.json";
import Button from "../../components/button";
import Modal from "../../components/modal";
import { parseDate } from "../../utils/function";

export default function ProjectSection() {
  const [modalIndex, setModalIndex] = useState(null);
  const [btnFilter, setBtnFilter] = useState("");

  const handleOpenModal = (index) => {
    setModalIndex(index);
  };

  const handleCloseModal = () => {
    setModalIndex(null);
  };

  const realisationFilter = (real, college) => {
    return college !== "" ? real.filter((x) => x.formation === college) : real;
  };

  const handleBtnFilter = (formation) => {
    setBtnFilter(formation);
  };

  const uniqueColleges = [
    ...new Set(realisations.map((project) => project.formation)),
  ];
  const filteredRealisations = realisationFilter(realisations, btnFilter);

  return (
    <section id="project" className="section project">
      <h1>Mes projets</h1>
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
        {filteredRealisations
          .sort((a, b) => parseDate(b.date) - parseDate(a.date))
          .map((realisation, index) => {
            console.log(new Date(realisation.date));
            return (
              <div
                className="cardRealisation animate__animated animate__fadeIn"
                key={`${btnFilter}-${index}`}
                onClick={() => handleOpenModal(index)}
              >
                <div className="img">
                  <img src={realisation.image} alt={realisation.title} />
                  <div className="containHover">
                    <p>{realisation.date}</p>
                    <p>{realisation.objectif}</p>
                  </div>
                </div>
                <div className="details">
                  <h3>{realisation.title}</h3>
                </div>
              </div>
            );
          })}
      </div>

      {modalIndex !== null && (
        <Modal
          show="show"
          btnClose={handleCloseModal}
          titre={filteredRealisations[modalIndex].title}
          image={filteredRealisations[modalIndex].image}
        >
          <div className="containModal">
            {filteredRealisations[modalIndex].objectif && (
              <p>
                <b>Objectif :</b> {filteredRealisations[modalIndex].objectif}
              </p>
            )}

            {filteredRealisations[modalIndex].description && (
              <p>
                <b>Description :</b>{" "}
                {filteredRealisations[modalIndex].description}
              </p>
            )}

            {filteredRealisations[modalIndex].technology && (
              <p>
                <b>Technologies :</b>{" "}
                {filteredRealisations[modalIndex].technology.join(" - ")}
              </p>
            )}

            {filteredRealisations[modalIndex].skills && (
              <div className="skills">
                <b>Compétences :</b>
                {filteredRealisations[modalIndex].skills.map(
                  (skill, skillIndex) => (
                    <p key={skillIndex}>• {skill.skill}</p>
                  )
                )}
              </div>
            )}

            {filteredRealisations[modalIndex].ressource && (
              <div>
                {filteredRealisations[modalIndex].ressource
                  .map((res, index) => (
                    <a
                      key={index}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {res.label}
                    </a>
                  ))
                  .reduce((prev, curr) => [prev, " - ", curr])}
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
