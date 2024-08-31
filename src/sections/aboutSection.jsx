import React from 'react';
import './aboutSection.scss';
import { calculerAge } from '../utils/function';

export default function AboutSection() {

    const age = calculerAge(2002, 7)

    return (
        <section id='about' className="section about">
            <h1>Présentation</h1>
            <div className="containerAbout">
                <img src="./images/portrait.png" />
                <div className="containerText">
                    <p>Je m'appelle Hugo, j'ai {age} ans et je suis passionné par le développement web. Actuellement étudiant à l'école MyDigitalSchool à Vannes, je combine mes études avec une alternance chez Atempo. Cette expérience professionnelle enrichissante me permet de mettre en pratique mes connaissances et de travailler sur des projets concrets, tout en continuant à approfondir mes compétences techniques et créatives dans le domaine du développement web.</p>
                </div>
            </div>
        </section>
    );
}
