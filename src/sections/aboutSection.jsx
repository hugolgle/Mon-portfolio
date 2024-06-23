import React from 'react';
import './aboutSection.scss';

export default function AboutSection() {

    return (
        <section id='about' className="section about">
            <h1>Présentation</h1>
            <div className="containerAbout">
                <img src="./images/portrait.png" alt="" srcSet="" />
                <div className="containerText">
                    <p>Je m'appelle Hugo, j'ai  21 ans et je suis passionné par le développement web. Actuellement à la recherche d'une alternance dans ce domaine, je suis motivé et prêt à m'investir pleinement dans une entreprise qui saura me permettre de mettre en pratique mes compétences et d'en acquérir de nouvelles</p>
                </div>
            </div>
        </section>
    );
}
