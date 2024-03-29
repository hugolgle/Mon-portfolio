import { useEffect, useState } from 'react';
import './header.scss';
import { Outlet } from 'react-router-dom'
import Loader from './loader.jsx';

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

    const [clickHamburger, setClickHamburger] = useState(false);

    const handleOpenHamburger = () => {
        setClickHamburger(true);
    }

    const handleCloseHamburger = () => {
        setClickHamburger(false);
    }

    return <>

        {/* <Loader /> */}
        <header>
            <a href="/"><img src="./images/icone.png" alt="logo" /></a>
            <div className={`nav ${clickHamburger ? "open" : ""}`}>
                <a href="#home" onClick={handleCloseHamburger}>Accueil</a>
                <a href="#about" onClick={handleCloseHamburger}>Présentation</a>
                <a href="#parcours" onClick={handleCloseHamburger}>Parcours</a>
                <a href="#project" onClick={handleCloseHamburger}>Réalisations</a>
                <a href="#xpPro" onClick={handleCloseHamburger}>Expériences professionelles</a>
                <a href="#skills" onClick={handleCloseHamburger}>Compétences</a>
                <a href="#contact" onClick={handleCloseHamburger}>Contact</a>
            </div>
            <button onClick={clickHamburger ? handleCloseHamburger : handleOpenHamburger} className={`hamburger ${clickHamburger ? "open" : ""}`} type="button" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
        <div className='container my-4'><Outlet /></div >
    </>;
}