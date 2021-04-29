import React from 'react';
import './Card.css';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div>
            <h2>Hello</h2>
            <p>Denis</p>
            <p className={styles.txt}>Buggy</p>
        </div>
    )
}

export default Card;