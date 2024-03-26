import React from 'react';
import './progressBar.scss';

export default function ProgressBar(props) {
    return (
        <div className="containerProgressBar">
            <div className="progressBar" style={{ width: `${props.width}%` }} ></div>
        </div>
    );
}