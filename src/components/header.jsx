import { useEffect } from 'react';
import './header.scss';
import { Outlet } from 'react-router-dom'

export default function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>
        <header>
            <a href="/"><img src="../public/images/icone.png" alt="logo" /></a>
            <div className="nav">
                <a href="#home">Accueil</a>
                <a href="#about">Présentation</a>
                <a href="#parcours">Parcours</a>
                <a href="#project">Réalisations</a>
                <a href="#xpPro">Expériences professionelles</a>
                <a href="#skills">Compétences</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
        <div className='container my-4'><Outlet /></div >
    </>;
}