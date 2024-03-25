import React from 'react';
import './projectSection.scss';
import { realisations } from '../../public/realisations.json';

export default function ProjectSection() {
    function getFirstSentence(text) {
        if (!text) {
            return '';
        }
        const sentences = text.split(/[.!?]\s/);
        let firstSentence = sentences[0];
        if (!/[.!?]$/.test(firstSentence)) {
            firstSentence += '.';
        }
        return firstSentence;
    }

    return (
        <section id='project' className="section project">
            <h1>Réalisations</h1>
            <div className="containerProject">
                {realisations.map((realisation) => (
                    <div className="containerRealisation">
                        <div className="img">
                            <img src={realisation.image} alt={realisation.title} srcset="" />
                            <div className="containHover">
                                <p>{realisation.date}</p>
                                <p>{getFirstSentence(realisation.mission)}</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div className="details">
                            <h3>{realisation.title}</h3>
                            <p>{realisation.semestre}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}