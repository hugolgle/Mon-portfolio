import './header.scss';
import { Outlet } from 'react-router-dom'

export default function Header() {


    return <>
        <header>
            <img src="../public/images/icone.png" alt="logo" />
            <div className="nav">
                <a href="#home">Accueil</a>
                <a href="#about">Présentation</a>
                <a href="#project">Réalisations</a>
                <a href="#proxp">Expériences professionelles</a>
                <a href="#skills">Compétences</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
        <div className='container my-4'><Outlet /></div >
    </>;
}