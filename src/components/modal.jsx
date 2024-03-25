import React from 'react';
import './modal.scss';

export default function Modal(props) {
    const overlayClasses = ['overlay', props.show === "show" ? 'show' : ''];
    const modalClasses = ['modal', props.show === "show" ? `show` : ''];

    return (
        <div className={overlayClasses.join(' ')} onClick={props.btnClose}>
            <div className={modalClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
                <h2>{props.titre}</h2>
                <i onClick={props.btnClose} className="fa-solid fa-xmark"></i>
                {props.children}
            </div>
        </div>
    );
}