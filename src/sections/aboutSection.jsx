import './aboutSection.scss';

import calculerAge from '../utils/function';

export default function AboutSection() {

    const age = calculerAge(2002);

    return (
        <section id='about' className="section about">
            <h1>Présentation</h1>
            <div className="containerAbout">
                <img src="../public/images/portrait.png" alt="" srcset="" />
                <div className="containerText">
                    <p>Je m'appelle Hugo, j'ai {age} ans et je suis étudiant en développement web. Passionné par les possibilités infinies qu'offre la programmation, j'aime explorer les technologies émergentes et créer des solutions innovantes. En dehors de mes études, je suis un fervent amateur de sport, trouvant équilibre et énergie dans l'activité physique. Mon engagement envers le développement web se marie harmonieusement avec ma passion pour le sport, car les deux nécessitent discipline, créativité et persévérance pour atteindre les objectifs fixés.</p>
                </div>
            </div>
        </section>
    );
}