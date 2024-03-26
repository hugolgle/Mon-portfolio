import React from 'react';
import './button.scss';

export default function Button(props) {
    return (
        <button type='submit' onClick={props.action}>{props.title}</button>
    );
}