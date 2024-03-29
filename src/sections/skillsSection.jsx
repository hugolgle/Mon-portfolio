import React from 'react';
import './skillsSection.scss';

import BoxSkills from '../components/boxSkills';
import ProgressBar from '../components/progressBar';
import Button from '../components/button';

export default function SkillsSection() {
    return (
        <section id='skills' className="section skills">
            <h1>Compétences</h1>

            <div className="containerSkills">
                <BoxSkills title="Langages">
                    <h3>HTML5/CSS3</h3>
                    <ProgressBar width="95" />
                    <h3>JS</h3>
                    <ProgressBar width="80" />
                    <h3>PHP</h3>
                    <ProgressBar width="65" />
                    <h3>SQL</h3>
                    <ProgressBar width="65" />
                    <h3>Python</h3>
                    <ProgressBar width="60" />
                    <h3>Java</h3>
                    <ProgressBar width="25" />
                    <h3>C#</h3>
                    <ProgressBar width="30" />
                </BoxSkills>
                <BoxSkills title="Technologies">
                    <h3>Objet</h3>
                    <p>Python, C#, Java</p>
                    <h3>Web</h3>
                    <p>HTML5, CSS3, JS, PHP, Wordpress, SQL, API REST</p>
                    <h3>Librairie, Framework</h3>
                    <p>JS : <b>React, Node</b></p>
                    <p>CSS : <b>Bootstrap, SASS</b></p>
                    <p>PHP : <b>CodeIgniter</b></p>
                </BoxSkills>
                <BoxSkills title="Outils">
                    <h3>Développement</h3>
                    <p>Visual Studio Code</p>
                    <h3>Design</h3>
                    <p>Figma, Photoshop</p>
                    <h3>Projet</h3>
                    <p>Gitlab, GitHub, Git, Gantt, Trello</p>
                    <h3>Gestion de patrimoine</h3>
                    <p>GLPI</p>
                </BoxSkills>
                <BoxSkills title="Conception">
                    <h3>OS</h3>
                    <p>Windows, Linux</p>
                </BoxSkills>
            </div>
            <a href="./images/CV.pdf" target="_blank" rel="noopener noreferrer"><Button title="Voir mon CV" /></a>
        </section >
    );
}
