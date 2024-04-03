import React, { useState } from 'react';
import './projectSection.scss';
import { realisations } from '../../public/data.json';
import Button from '../components/button';
import Modal from '../components/modal';

export default function ProjectSection() {
    const [modalIndex, setModalIndex] = useState(null);
    const [btnFilter, setBtnFilter] = useState("");

    const handleOpenModal = (index) => {
        setModalIndex(index);
    }

    const handleCloseModal = () => {
        setModalIndex(null);
    }

    const getFirstSentence = (text) => {
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

    const realisationFilter = (real, ecole) => {
        if (ecole != "") {
            return real.filter((x) => x.ecole === ecole);
        } else {
            return real;
        }
    }

    const handleBtnFilter = (ecole) => {
        setBtnFilter(ecole);
    }

    return (
        <section id='project' className="section project">
            <h1>Réalisations</h1>
            <div className="btnFilter">
                <Button title="Tout" className={`btnFilter ${btnFilter === "" ? "active" : ""}`} value="Tout" action={() => handleBtnFilter("")} />
                <Button title="BTS SIO" className={`btnFilter ${btnFilter === "BTS SIO" ? "active" : ""}`} value="BTS SIO" action={() => handleBtnFilter("BTS SIO")} />
                <Button title="OpenClassrooms" className={`btnFilter ${btnFilter === "OpenClassrooms" ? "active" : ""}`} value="OpenClassrooms" action={() => handleBtnFilter("OpenClassrooms")} />
            </div>

            <div className="containerProject">
                {realisationFilter(realisations, btnFilter).map((realisation, index) => (
                    <div className="containerRealisation" key={index}>
                        {
                            modalIndex === index &&
                            <Modal show="show" btnClose={handleCloseModal} titre={realisation.title}>
                                <div className="containModal">
                                    <p><b>Mission:</b> {realisation.mission}</p>
                                </div>
                                <div className="containModal">
                                    <p><b>Contexte:</b> {realisation.context}</p>
                                </div>
                                {realisation.ecole === "BTS SIO" ? (
                                    <>
                                        <div className="containModal">
                                            <p><b>Compétences:</b> {realisation.skills}</p>
                                        </div>
                                        <div className="containModal">
                                            <a href={realisation.ressource} target="_blank" rel="noopener noreferrer">Ressources</a> - <a href="./images/fichedecompetences.pdf" target="_blank" rel="noopener noreferrer">Fiche de compétences</a>
                                        </div>
                                    </>
                                ) : null}
                                {realisation.ecole === "OpenClassrooms" ? (
                                    <>
                                        <div className="containModal">
                                            <p><b>Technologies:</b> {realisation.techno}</p>
                                        </div>
                                        <div className="containModal">
                                            <b>Compétences:</b>
                                            {realisation.skills.map(skill => <p>{skill.skill}</p>)}
                                        </div>
                                        <div className="containModal">
                                            <a href={realisation.ressource} target="_blank" rel="noopener noreferrer">Ressources</a>
                                        </div>
                                    </>
                                ) : null}
                            </Modal>

                        }
                        <div className="img">
                            <img src={realisation.image} alt={realisation.title} srcset="" />
                            <div className="containHover">
                                <p>{realisation.date}</p>
                                <p>{getFirstSentence(realisation.mission)}</p>
                                <i onClick={() => handleOpenModal(index)} className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div className="details">
                            <h3>{realisation.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
