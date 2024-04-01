import React from 'react';
import './aboutSection.scss';
import { calculerAge, useIntersectionObserver } from '../utils/function';

export default function AboutSection() {
    const age = calculerAge(2002, 7);
    // const aboutRef = useIntersectionObserver((entries, observer) => {
    //     const ratio = 0.65;
    //     entries.forEach(entry => {
    //         if (entry.intersectionRatio > ratio) {
    //             entry.target.classList.add("show");
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, { root: null, rootMargin: '0px', threshold: 0.65 });

    return (
        <section id='about' className="section about" >
            <h1>Présentation</h1>
            <div className="containerAbout">
                <img src="./images/portrait.png" alt="" srcset="" />
                <div className="containerText">
                    <p>Je m'appelle Hugo, j'ai {age} ans et je suis passionné par le développement web. Actuellement à la recherche d'une alternance dans ce domaine, je suis motivé et prêt à m'investir pleinement dans une entreprise qui saura me permettre de mettre en pratique mes compétences et d'en acquérir de nouvelles.</p>
                </div>
            </div>
        </section>
    );
}
