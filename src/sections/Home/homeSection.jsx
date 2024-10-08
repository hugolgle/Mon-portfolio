import "./homeSection.scss";

import { calculerAge } from "../../utils/function.js";

export default function HomeSection() {
  const age = calculerAge(2002, 7);
  return (
    <section id="home" className="section home">
      <div className="containerLeft">
        <img src="./images/pp.jpeg" alt="" />
        <h1>Étudiant de {age} ans</h1>
        <hr />
        <p>
          Développeur alternant <br />
          chez ATEMPO
        </p>
        <div className="mouse">
          <hr />
        </div>
      </div>
    </section>
  );
}
