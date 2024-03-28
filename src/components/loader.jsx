import React, { useEffect } from 'react';
import './loader.scss';

export default function Loader() {
    useEffect(() => {
        const loader = document.querySelector('.loader');

        const handleLoad = () => {
            loader.classList.add('fondu-out');
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="loader">
            <span className="span1"></span>
            <span className="span2"></span>
        </div>
    );
}
