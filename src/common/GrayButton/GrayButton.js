import React from 'react';

import styles from './GrayButton.module.css';

const GrayButton = props => {
    const {title, click} = props;

    return (
        <button className={styles.button} onClick={click}>
            { title }
        </button>
    );
}

export default GrayButton;