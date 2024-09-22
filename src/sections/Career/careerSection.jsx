import { careers } from "../../../public/data/career.json";
import "./careerSection.scss";

export default function CareerSection() {
  const careersReverse = [...careers].reverse();

  return (
    <section id="parcours" className="section parcours">
      <h1>Parcours</h1>

      <div className="containerParcours">
        <div className="barre"></div>
        {careersReverse.map((unParcours, index) => (
          <div key={index} className="boxParcour">
            <div className="rond"></div>
            <div className="boxText">
              <h3>{unParcours.date}</h3>
              <hr />
              <p>{unParcours.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
