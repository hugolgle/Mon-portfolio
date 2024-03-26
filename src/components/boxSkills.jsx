import React from 'react';
import './boxSkills.scss';

export default function BoxSkills(props) {

    return (
        <div className="boxSkills">
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}