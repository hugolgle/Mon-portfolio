import React, { useState } from 'react';
import './projectSection.scss';
import { realisationsBts, realisationsOC } from '../../public/realisations.json';
import Modal from '../components/modal';

export default function ProjectSection() {

    const [modalVisible, setModalVisible] = useState(false)
    const handleOpenModal = () => {
        setModalVisible(true);
    }

    const handleCloseModal = () => {
        setModalVisible(false);
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

    return (
        <section id='project' className="section project">
            <h1>Réalisations</h1>
            <h2>BTS SIO</h2>
            <div className="containerProject">
                {realisationsBts.map((realisation) => (
                    <div className="containerRealisation">
                        <div className="img">
                            <img src={realisation.image} alt={realisation.title} srcset="" />
                            <div className="containHover">
                                <p>{realisation.date}</p>
                                <p>{getFirstSentence(realisation.mission)}</p>
                                <i onClick={handleOpenModal} className="fa-solid fa-plus"></i>
                                {
                                    modalVisible &&
                                    <Modal show="show" btnClose={handleCloseModal} titre={realisation.title}>
                                        <div className="containModal">
                                            <p><b>Mission:</b> {realisation.mission}</p>
                                        </div>
                                        <div className="containModal">
                                            <p><b>Contexte:</b> {realisation.context}</p>
                                        </div>
                                        <div className="containModal">
                                            <p><b>Compétences:</b> {realisation.skills}</p>
                                        </div>
                                        <div className="containModal">
                                            <a href={realisation.ressource} target="_blank" rel="noopener noreferrer">Ressources</a> - <a href="../public/images/fichedecompetences.pdf" target="_blank" rel="noopener noreferrer">Fiche de compétences</a>
                                        </div>
                                    </Modal>
                                }
                            </div>
                        </div>
                        <div className="details">
                            <h3>{realisation.title}</h3>
                            <p>{realisation.semestre}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2>OpenclassRooms</h2>
            <div className="containerProject">
                {realisationsOC.map((realisation) => (
                    <div className="containerRealisation">
                        <div className="img">
                            <img src={realisation.image} alt={realisation.title} srcset="" />
                            <div className="containHover">
                                <p>{realisation.date}</p>
                                <p>{getFirstSentence(realisation.mission)}</p>
                                <i onClick={handleOpenModal} className="fa-solid fa-plus"></i>
                                {
                                    modalVisible &&
                                    <Modal show="show" btnClose={handleCloseModal} titre={realisation.title}>
                                        <div className="containModal">
                                            <p><b>Mission:</b> {realisation.mission}</p>
                                        </div>
                                        <div className="containModal">
                                            <p><b>Contexte:</b> {realisation.context}</p>
                                        </div>
                                        <div className="containModal">
                                            <p><b>Techonologies :</b> {realisation.techno}</p>
                                        </div>
                                        <div className="containModal">
                                            <p><b>Compétences:</b> </p>
                                            {Object.values(realisation.skills).map((skill, index) => (
                                                <p key={index}>{skill}</p>
                                            ))}
                                        </div>
                                        <div className="containModal">
                                            <a href={realisation.ressource} target="_blank" rel="noopener noreferrer">Ressources</a>
                                        </div>
                                    </Modal>
                                }
                            </div>
                        </div>
                        <div className="details">
                            <h3>{realisation.title}</h3>
                            <p>{realisation.techno}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}