import { useEffect } from 'react';
import './arrowTop.scss';

export default function ArrowTop() {
    useEffect(() => {
        const handleScroll = () => {
            const arrow = document.querySelector('.arrowTop'); // Utilisation de '.arrow' au lieu de 'div.arrow'
            if (window.scrollY > 0) {
                arrow.classList.add('visible');
            } else {
                arrow.classList.remove('visible');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='arrowTop'>
            <a href="#home"><i className="fas fa-chevron-up"></i></a>
        </div>
    );
}
