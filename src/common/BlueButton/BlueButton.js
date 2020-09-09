import React from 'react';

import styles from './BlueButton.module.css';

const BlueButton = props => {
    const {title, click} = props;

    return (
        <button className={styles.button} onClick={click}>
            { title }
        </button>
    );
}

export default BlueButton;